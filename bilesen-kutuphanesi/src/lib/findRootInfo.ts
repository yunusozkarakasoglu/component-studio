/**
 * Koşullu kök tespiti (findRootInfo) + style enjeksiyonu (injectStyleAt)
 * --------------------------------------------------------------------
 * Stüdyonun "🧾 Tam Kod" üreticisinin çekirdeğidir.
 *
 * - findRootInfo: bileşen kaynağındaki kök JSX element(ler)ini bulur.
 *   - Normal kök: `return (<div …` → isConditional=false, branches=[1]
 *   - Ternary kök: `cond ? <A/> : <B/>` → isConditional=true, branches=[A, B]
 *   - Kısa devre: `cond && <X/>` / `cond || <X/>` → isConditional=true, branches=[X]
 *   - JSX render etmeyen dosyalar (icons, barrel) → found=false
 *
 * - injectStyleAt: bulunan bir dala style prop'unu kök açılış etiketine gömer.
 *
 * Sınırlamalar (bilinen):
 * - Nested ternary'de yalnızca ilk dal ve ana üçüncü dal bulunur (orta dallar atlanır).
 * - String literal'ler ve {} blokları doğru atlanır; className içindeki `>`
 *   karakterleri (örn. has-[>svg]) yanlış kesmez.
 */

export interface RootBranch {
  /** Kök JSX tag adı (ör. "Button", "div") */
  tag: string
  /** Açılış etiketinin kapanışı: normal ">" veya self-closing "/>" */
  close: ">" | "/>"
  /** Açılış etiketinin kapanış karakterinin kaynak indeksi (enjeksiyon noktası) */
  end: number
  /** Açılış etiketinin başlangıç ("<") kaynak indeksi */
  at: number
}

export interface RootInfo {
  found: boolean
  isConditional: boolean
  branches: RootBranch[]
  /** İlk `return` anahtar kelimesinin kaynak indeksi (diagnostik) */
  rootAt: number
}

/** start'tan itibaren ilk gerçek JSX kök açılış etiketini bulur (string/{} atlar). */
function findJsxRoot(source: string, start: number): RootBranch | null {
  let i = start
  while (i < source.length) {
    if (source[i] === "<") {
      const tagMatch = source.slice(i + 1).match(/^[A-Za-z][\w.]*/)
      if (tagMatch) {
        const tag = tagMatch[0]
        let j = i + 1 + tag.length
        let depth = 0
        while (j < source.length) {
          const ch = source[j]
          if (ch === '"' || ch === "'") {
            const close = source.indexOf(ch, j + 1)
            if (close < 0) break
            j = close + 1
            continue
          }
          if (ch === "{") { depth++; j++; continue }
          if (ch === "}") { depth--; j++; continue }
          if (depth === 0 && (ch === ">" || (ch === "/" && source[j + 1] === ">"))) {
            const selfClose = ch === "/"
            return { tag, close: selfClose ? "/>" : ">", end: j + (selfClose ? 2 : 1), at: i }
          }
          j++
        }
        // String kapanmazsa bu `<` geçersiz → dış döngüden sonraki karaktere devam edilir
      }
    }
    i++
  }
  return null
}

/**
 * start'tan itibaren ilk ternary'nin ana ":" işaretinin indeksi.
 * - `?.` (optional chaining) ternary olarak yorumlanmaz.
 * - {} bloklarına girilmez (props içi ternary'ler atlanır) — ancak dengeli takip
 *   gerekmez çünkü bloğa girilmiyor.
 */
function findTernaryColon(source: string, start: number): number | null {
  let i = start
  while (i < source.length) {
    const ch = source[i]
    if (ch === '"' || ch === "'") {
      const close = source.indexOf(ch, i + 1)
      if (close < 0) return null
      i = close + 1
      continue
    }
    if (ch === "{") { i++; continue }
    if (ch === "}") { i++; continue }
    if (ch === "?" && source[i + 1] !== ".") {
      let depth = 0
      let k = i + 1
      while (k < source.length) {
        const c2 = source[k]
        if (c2 === '"' || c2 === "'") {
          const close = source.indexOf(c2, k + 1)
          if (close < 0) return null
          k = close + 1
          continue
        }
        if (c2 === "{") { depth++; k++; continue }
        if (c2 === "}") { depth--; k++; continue }
        if (c2 === "?" && source[k + 1] !== ".") depth++
        else if (c2 === ":") {
          if (depth === 0) return k
          depth--
        }
        k++
      }
      return null
    }
    i++
  }
  return null
}

/**
 * Bileşen kaynağındaki kök JSX element(ler)ini bulur.
 * İlk geçerli `return` ifadesinden sonraki yapıyı analiz eder.
 * Bir return'ün hemen sonrasında JSX yoksa (helper fonksiyonlar) sonraki return'e geçer.
 */
export function findRootInfo(source: string): RootInfo {
  const re = /\breturn\b/g
  let m: RegExpExecArray | null
  while ((m = re.exec(source)) !== null) {
    const first = findJsxRoot(source, m.index)
    if (!first) continue
    // Bulunan kök, BU return'ün hemen sonrasındaki JSX olmalı.
    // Arada başka `return` varsa kök sonraki return'e aittir → bu return'ü atla.
    const tail = source.slice(m.index + "return".length, first.at)
    if (/\breturn\b/.test(tail)) continue
    const between = source.slice(m.index, first.at)
    // Ternary `?` tespiti: sonraki karakter `.` DEĞİLSE (onChange?. gibi optional
    // chaining ternary sanılmaz). `cond ? <A/> : <B/>` → `? ` ; `a?.b ? …` → ikinci `?`.
    const hasTernary = Array.from(between).some((c, i) => c === "?" && between[i + 1] !== ".")
    const hasShortCircuit = between.includes("&&") || between.includes("||")
    const isConditional = hasTernary || hasShortCircuit
    if (!isConditional) {
      return { found: true, isConditional: false, branches: [first], rootAt: m.index }
    }
    const colon = findTernaryColon(source, m.index)
    if (colon !== null) {
      const second = findJsxRoot(source, colon + 1)
      if (second && second.end !== first.end) {
        return { found: true, isConditional: true, branches: [first, second], rootAt: m.index }
      }
      return { found: true, isConditional: true, branches: [first], rootAt: m.index }
    }
    return { found: true, isConditional: true, branches: [first], rootAt: m.index }
  }
  return { found: false, isConditional: false, branches: [], rootAt: -1 }
}

/**
 * Bulunan bir dala (kök açılış etiketine) style prop'unu gömer.
 * @param source   Bileşen kaynak kodu
 * @param branch   findRootInfo sonucundaki hedef dal
 * @param styleAttr  Enjekte edilecek style prop metni (başındaki boşluk önemsizdir)
 */
export function injectStyleAt(source: string, branch: RootBranch, styleAttr: string): string {
  const head = source[branch.end - branch.close.length - 1]
  const attrSep = head !== undefined && !/\s/.test(head) ? " " : ""
  const closeSep = branch.close === "/>" ? " " : ""
  const attr = styleAttr.trimStart()
  return source.slice(0, branch.end - branch.close.length) + attrSep + attr + closeSep + branch.close + source.slice(branch.end)
}
