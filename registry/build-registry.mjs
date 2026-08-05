/**
 * Kayıt defteri üretici (build-registry)
 * -------------------------------------------------
 * 1. Bileşen Listesi .txt'den id/ad/kategori okur
 * 2. bilesen-kutuphanesi/src/components/ui/*.tsx kodlarını okur
 * 3. layouts.json + layout dosyalarını okur
 * 4. Çıktı: data/registry.json + data/registry.db (SQLite) + public/registry.json
 *
 * Kullanım: node build-registry.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import Database from "better-sqlite3"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const UI_DIR = join(ROOT, "bilesen-kutuphanesi", "src", "components", "ui")
const LAYOUT_DIR = join(ROOT, "bilesen-kutuphanesi", "src", "layouts")
const INVENTORY = join(ROOT, "Bileşen Listesi .txt")

/* ---------- Envanter txt ayrıştırma ---------- */
const inv = readFileSync(INVENTORY, "utf8")

const items = []
let category = "Genel"
let subcategory = ""
for (const line of inv.split("\n")) {
  const catMatch = line.match(/^###\s+(.+)/)
  if (catMatch) { category = catMatch[1].trim(); subcategory = ""; continue }
  const subMatch = line.match(/^####\s+(.+)/)
  if (subMatch) { subcategory = subMatch[1].trim(); continue }
  const itemMatch = line.match(/`(\d+)`\s+([A-Za-z0-9]+)/)
  if (itemMatch) items.push({ id: itemMatch[1], name: itemMatch[2], category, subcategory })
}

function pascal(s) {
  return s.replace(/-([a-z])/g, (m, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())
}

/* İsim → dosya adı eşlemesi (camelCase → kebab) */
function slug(name) {
  const overrides = { ComboBox: "combobox", Textfield: "text-field" }
  if (overrides[name]) return overrides[name]
  // "TextArea" tek kelime kabul edilir (text-area değil textarea)
  let n = name.replace(/TextArea/g, "Textarea")
  // All-caps kısaltmaları ayır: "InputOTPBasic" → "Input-Otp-Basic"
  n = n.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
  return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}

/* ---------- Bileşen dosyalarını oku (envanter) ---------- */
const components = items.map((item) => {
  const file = slug(item.name) + ".tsx"
  const path = join(UI_DIR, file)
  const exists = existsSync(path)
  let code = ""
  let description = ""
  if (exists) {
    code = readFileSync(path, "utf8")
    const m = code.match(/\/\*\*\n \* (.+?)\n/) // JSDoc ilk satır
    if (m) description = m[1].trim()
  }
  const srcMatch = code.match(/@source\s+(.+)/)
  return { ...item, source: srcMatch ? srcMatch[1].trim() : "heroui", file, exists, code, description, path: join(UI_DIR, file) }
})

/* ---------- Özel (kullanıcı) bileşenleri: @id/@category etiketli dosyalar ---------- */
{
  const knownFiles = new Set(components.map((c) => c.file))
  for (const f of readdirSync(UI_DIR).filter((f) => f.endsWith(".tsx"))) {
    if (knownFiles.has(f)) continue
    const code = readFileSync(join(UI_DIR, f), "utf8")
    const idMatch = code.match(/@id\s+(\d+)/)
    const catMatch = code.match(/@category\s+(.+)/)
    const subMatch = code.match(/@subcategory\s+(.+)/)
    const srcMatch = code.match(/@source\s+(.+)/)
    const descMatch = code.match(/@description\s+(.+)/)
    if (!idMatch) continue
    const slugName = f.slice(0, -4)
    components.push({
      id: idMatch[1],
      name: pascal(slugName),
      category: catMatch ? catMatch[1].trim() : "Genel",
      subcategory: subMatch ? subMatch[1].trim() : "",
      source: srcMatch ? srcMatch[1].trim() : "heroui",
      file: f,
      exists: true,
      code,
      description: descMatch ? descMatch[1].trim() : "Özel bileşen",
      path: join(UI_DIR, f),
    })
  }
}

/* ---------- Layout'ları oku ---------- */
const layoutsMeta = existsSync(join(LAYOUT_DIR, "layouts.json")) ? JSON.parse(readFileSync(join(LAYOUT_DIR, "layouts.json"), "utf8")) : []
const layouts = layoutsMeta.map((l) => {
  const path = join(LAYOUT_DIR, l.file)
  const code = existsSync(path) ? readFileSync(path, "utf8") : ""
  return { ...l, code, path }
})

/* ---------- Kategori iskeleti (txt'deki ### başlıkları + mevcut kategoriler) ---------- */
const categories = []
for (const line of inv.split("\n")) {
  const catMatch = line.match(/^###\s+(.+)/)
  if (catMatch) {
    const c = catMatch[1].trim()
    if (!categories.includes(c)) categories.push(c)
  }
}
for (const c of components) {
  if (!categories.includes(c.category)) categories.push(c.category)
}

/* ---------- JSON çıktı ---------- */
const registry = {
  generatedAt: new Date().toISOString(),
  counts: { components: components.length, ready: components.filter((c) => c.exists).length, layouts: layouts.length },
  categories,
  components,
  layouts,
}
mkdirSync(join(__dirname, "data"), { recursive: true })
writeFileSync(join(__dirname, "data", "registry.json"), JSON.stringify(registry, null, 2))
mkdirSync(join(ROOT, "bilesen-kutuphanesi", "public"), { recursive: true })
writeFileSync(join(ROOT, "bilesen-kutuphanesi", "public", "registry.json"), JSON.stringify(registry))

/* ---------- SQLite ---------- */
const db = new Database(join(__dirname, "data", "registry.db"))
db.exec(`
  CREATE TABLE IF NOT EXISTS components (
    id TEXT PRIMARY KEY, num TEXT, name TEXT, category TEXT,
    description TEXT, file TEXT, code TEXT
  );
  CREATE TABLE IF NOT EXISTS layouts (
    id TEXT PRIMARY KEY, name TEXT, description TEXT, file TEXT,
    components TEXT, code TEXT
  );
`)
const insComp = db.prepare("INSERT OR REPLACE INTO components VALUES (?,?,?,?,?,?,?)")
for (const c of components) insComp.run(c.id, c.id, c.name, c.category, c.description, c.file, c.code)
const insLay = db.prepare("INSERT OR REPLACE INTO layouts VALUES (?,?,?,?,?,?)")
for (const l of layouts) insLay.run(l.id, l.name, l.description, l.file, JSON.stringify(l.components), l.code)
db.close()

console.log(`\n✅ Kayıt defteri oluşturuldu`)
console.log(`   Bileşen: ${components.length} (hazır: ${components.filter((c) => c.exists).length})`)
console.log(`   Layout : ${layouts.length}`)
console.log(`   → registry/data/registry.json + registry.db`)
console.log(`   → bilesen-kutuphanesi/public/registry.json`)
