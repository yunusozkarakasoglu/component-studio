/**
 * findRootInfo + injectStyleAt birim testleri (node:test, vitest gerekmez)
 * -------------------------------------------------------------------------
 * Çalıştırma: npm test   (package.json → "test": "node --experimental-strip-types --test tests/")
 *
 * Kapsam:
 * 1. Envanterdeki TÜM bileşen dosyalarında kök bulma (icons/index hariç)
 * 2. Koşullu kök (ternary) edge case'leri
 * 3. injectStyleAt'ın doğru dala gömme davranışı
 */
import { test } from "node:test"
import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { findRootInfo, injectStyleAt } from "../src/lib/findRootInfo.ts"

const UI_DIR = join(import.meta.dirname, "..", "src", "components", "ui")

/* ---------- 1) Envanter taraması ---------- */

test("saf React kütüphanesi dosyalarının tamamı kök bulur (index hariç)", () => {
  const files = readdirSync(UI_DIR).filter((f) => f.endsWith(".tsx"))
  const fallback = new Set(["index.tsx"]) // barrel — JSX render etmez
  let checked = 0
  for (const f of files) {
    const src = readFileSync(join(UI_DIR, f), "utf8")
    const info = findRootInfo(src)
    if (fallback.has(f)) {
      assert.equal(info.found, false, `${f} JSX render etmiyor → found=false olmalı`)
      continue
    }
    assert.equal(info.found, true, `${f} kök bulunamadı`)
    assert.equal(info.isConditional, false, `${f} şu an koşullu köklü olmamalı`)
    assert.equal(info.branches.length, 1, `${f} tek kök olmalı`)
    checked++
  }
  assert.ok(checked >= 4, `en az 4 saf bileşen taranmalı (taranan: ${checked})`)
})

test("enjeksiyon tüm envanter dosyalarında parantez dengesini bozmaz", () => {
  const files = readdirSync(UI_DIR).filter((f) => f.endsWith(".tsx"))
  const styleAttr = ' style={{\n    color: "red"\n  }}'
  for (const f of files) {
    const src = readFileSync(join(UI_DIR, f), "utf8")
    const info = findRootInfo(src)
    if (!info.found) continue
    const out = injectStyleAt(src, info.branches[0], styleAttr)
    const bal = (s: string) =>
      s.split("{").length - 1 === s.split("}").length - 1 &&
      s.split("(").length - 1 === s.split(")").length - 1
    assert.ok(bal(out), `${f} enjeksiyon sonrası parantez dengesi bozuk`)
    assert.ok(out.includes(styleAttr.trim()), `${f} style bloğu koda gömülmedi`)
  }
})

/* ---------- 2) Koşullu kök edge case'leri ---------- */

test("ternary: her iki dal da bulunur", () => {
  const src = "function C() { return isLoading ? <Skeleton /> : <Button>X</Button> }"
  const info = findRootInfo(src)
  assert.equal(info.found, true)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Skeleton", "Button"])
})

test("ternary null dal: yalnızca tek dal", () => {
  const src = "function C() { return loading ? <Spinner/> : null }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Spinner"])
})

test("&& kısa devre: koşullu ama tek kök", () => {
  const src = "function C() { return isOpen && <Panel>x</Panel> }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Panel"])
})

test("|| kısa devre: koşullu ama tek kök", () => {
  const src = "function C() { return items || <Empty/> }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Empty"])
})

test("nested ternary: ilk + ana üçüncü dal (orta dal bilinen sınırlama)", () => {
  const src = "function C() { return a ? b ? <X/> : <Y/> : <Z/> }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["X", "Z"])
})

test("aynı tag iki dal: konumlar ayrı olmalı", () => {
  const src = "function C() { return ok ? <Button>a</Button> : <Button>b</Button> }"
  const info = findRootInfo(src)
  assert.equal(info.branches.length, 2)
  assert.notEqual(info.branches[0].end, info.branches[1].end)
})

test("optional chaining + ternary: ?. ternary olarak yorumlanmaz", () => {
  const src = "function C() { return user?.name ? <A/> : <B/> }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, true)
  assert.deepEqual(info.branches.map((b) => b.tag), ["A", "B"])
})

test("map callback: koşullu değil, callback kökü bulunur", () => {
  const src = "function C() { return items.map(x => <Row>{x}</Row>) }"
  const info = findRootInfo(src)
  assert.equal(info.isConditional, false)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Row"])
})

test("props içi ternary: koşullu kök DEĞİL", () => {
  const src = 'function C() { return <Button className={a ? "x" : "y"}>z</Button> }'
  const info = findRootInfo(src)
  assert.equal(info.isConditional, false)
  assert.deepEqual(info.branches.map((b) => b.tag), ["Button"])
})

test("normal return: koşullu değil", () => {
  const src = 'function C() { return (\n    <div className="x">y</div>\n  ) }'
  const info = findRootInfo(src)
  assert.equal(info.isConditional, false)
  assert.deepEqual(info.branches.map((b) => b.tag), ["div"])
})

test("erken return + optional chaining: yanlış pozitif olmaz", () => {
  // toggle benzeri fonksiyonlardaki erken `return` + onChange?. çağrısı ternary sanılmamalı
  const src = `function C({ onChange }) {
  const toggle = (k) => {
    if (isDisabled) return
    if (next.has(k)) next.delete(k)
    else if (controlled) onChange?.(arr)
  }
  return (
    <AccordionSimpleContext.Provider value={ctx}>x</AccordionSimpleContext.Provider>
  )
}`
  const info = findRootInfo(src)
  assert.equal(info.isConditional, false, "optional chaining ternary sanılmamalı")
  assert.deepEqual(info.branches.map((b) => b.tag), ["AccordionSimpleContext.Provider"])
})

/* ---------- 3) injectStyleAt davranışı ---------- */

test("injectStyleAt seçilen dala gömülür, diğer dal değişmez", () => {
  const src = "function C() { return isLoading ? <Skeleton /> : <Button>X</Button> }"
  const info = findRootInfo(src)
  const styleAttr = ' style={{ color: "red" }}'
  const out = injectStyleAt(src, info.branches[1], styleAttr)
  assert.ok(out.includes('<Button style={{ color: "red" }}>X</Button>'), "ikinci dala gömülmeli")
  assert.ok(out.includes("<Skeleton />"), "ilk dal değişmemeli")
})

test("injectStyleAt self-closing köke doğru gömülür", () => {
  const src = "function C() { return <Spinner size=\"lg\" /> }"
  const info = findRootInfo(src)
  const styleAttr = ' style={{ color: "blue" }}'
  const out = injectStyleAt(src, info.branches[0], styleAttr)
  assert.ok(out.includes('<Spinner size="lg" style={{ color: "blue" }} />'), "self-closing öncesi")
})
