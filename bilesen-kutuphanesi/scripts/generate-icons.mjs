/**
 * İkon kütüphanesi üretici — generate-icons.mjs
 * ------------------------------------------------------------------
 * lucide-react paketinden (MIT lisanslı, kurulu) TÜM ikonların SVG path'lerini
 * çekip kendi icons.tsx'imize gömülü bileşenler olarak üretir.
 *
 * Üretim sonrası ikonlar HİÇBİR dış pakete referans vermez:
 *   import { Search } from "@/components/ui/icons"
 *
 * Kullanım: cd bilesen-kutuphanesi && node scripts/generate-icons.mjs
 * Çıktı: src/components/ui/icons.tsx (üzerine yazılır)
 */
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import * as Icons from "lucide-react"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, "..", "src", "components", "ui", "icons.tsx")

/* ---------- 1) Referans dedupe: aynı bileşen objesi = aynı ikon ---------- */
const main = new Map() // ref → ana isim
const aliases = new Map() // alias adı → ana isim
for (const n of Object.keys(Icons)) {
  const ref = Icons[n]
  if (ref == null || (typeof ref !== "object" && typeof ref !== "function")) continue
  if (n === "default" || n === "LucideProvider") continue
  if (n.startsWith("Lucide")) continue // LucideX isimleri ana olmaz — X / XIcon tercih edilir
  if (main.has(ref)) {
    aliases.set(n, main.get(ref))
    continue
  }
  main.set(ref, n)
}
console.log(`benzersiz ikon: ${main.size} | alias: ${aliases.size}`)

/* ---------- 2) HTML attr → JSX prop (stroke-width → strokeWidth) ---------- */
const camel = (a) => a.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

/* ---------- 3) Her ana ikon için bileşen gövdesi üret ---------- */
const parts = []
const skipped = []
for (const [ref, name] of main) {
  let html
  try {
    html = renderToStaticMarkup(createElement(ref))
  } catch (e) {
    skipped.push(name)
    continue
  }
  const m = html.match(/^<svg[^>]*>([\s\S]*)<\/svg>$/)
  if (!m) {
    skipped.push(name)
    continue
  }
  const body = m[1]
    // <circle …></circle> → <circle … />
    .replace(/<(\w+)([^>]*?)><\/\1>/g, "<$1$2 />")
    // attribute'ları camelCase yap
    .replace(/([a-zA-Z-]+)="([^"]*)"/g, (_, k, v) => `${camel(k)}="${v}"`)
  parts.push({ name, body })
}

/* ---------- 4) TSX dosyasını üret ---------- */
const header = `/**
 * Icons — KENDİ İKON KÜTÜPHANEMİZ (birincil ikon kaynağı)
 * ------------------------------------------------------------------
 * TÜM bileşenler ikonlarını BURADAN import eder:
 *   import { Search } from "@/components/ui/icons"
 * Doğrudan lucide-react'ten import YASAKTIR (barrel atlanamaz).
 *
 * Bu dosya lucide-react'ten (MIT) ÜRETİLMİŞTİR ve tüm SVG path'lerini
 * kendi içinde barındırır — hiçbir dış pakete referans vermez.
 * Yeniden üretim: node scripts/generate-icons.mjs
 *
 * YASAK dış ikon kaynakları (Heroui çevirilerinde):
 * - @gravity-ui/icons gibi üçüncü parti paketler → lucide eşdeğeriyle değiştirilir
 * - CDN/URL ikonları (iconUrl, <img src="https://…">) → asla kullanılmaz
 */
import type { SVGProps } from "react"

export type IconProps = SVGProps<SVGSVGElement>
`

const components = parts
  .map(
    (p) => `function ${p.name}(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
${p.body
        .split("\n")
        .map((l) => "      " + l)
        .join("\n")}
    </svg>
  )
}`
  )
  .join("\n\n")

const mainExports = parts.map((p) => `export { ${p.name} }`).join("\n")
const aliasExports = [...aliases]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([a, m]) => `export { ${m} as ${a} }`)
  .join("\n")

const output = `${header}\n${components}\n\n/* ---------- Ana export'lar ---------- */\n${mainExports}\n\n/* ---------- Alias export'lar (lucide uyumluluğu: SearchIcon vb.) ---------- */\n${aliasExports}\n`
writeFileSync(OUT, output, "utf8")
console.log(`✅ ${OUT} üretildi (${parts.length} ikon, ${aliases.size} alias, ${(output.length / 1024).toFixed(0)} KB)`)
if (skipped.length) console.log(`⚠ atlanan (ikon değil): ${skipped.join(", ")}`)
