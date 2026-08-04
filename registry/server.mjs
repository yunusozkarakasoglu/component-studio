/**
 * Template Maker — Bileşen Kayıt Defteri MCP Sunucusu
 * -------------------------------------------------
 * LLM'lerin (pi, Claude Desktop, Cursor...) bileşen kodlarını doğrudan
 * sorgulayıp almasını sağlar.
 *
 * Kullanım: node server.mjs   (stdio transport — MCP istemcisiyle)
 * Kurulum:  ~/.pi/agent/mcp.json içine kayıt (README'ye bakın)
 */
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

const __dirname = dirname(fileURLToPath(import.meta.url))

/* ---------- Kayıt defterini yükle ---------- */
function loadRegistry() {
  try {
    return JSON.parse(readFileSync(join(__dirname, "data", "registry.json"), "utf8"))
  } catch (e) {
    console.error("registry.json bulunamadı. Önce: node build-registry.mjs")
    return { components: [], layouts: [] }
  }
}
const registry = loadRegistry()
const byId = new Map(registry.components.map((c) => [c.id, c]))
const byIdL = new Map(registry.layouts.map((l) => [l.id, l]))

const server = new McpServer(
  { name: "bilesen-kayit-defteri", version: "1.0.1" },
  {
    instructions:
      "Bileşen kütüphanesi (87 bileşen + 10 şablon, çevrimdışı/yerel). " +
      "Akış: search_components ile bileşen bul (örn '009'), get_component/get_components ile kodunu al, " +
      "build_page ile sayfa üret (örn components:['008','009'], layout:'layout-dashboard'). " +
      "list_components/list_layouts/get_layout ile keşfet.",
  }
)

/* ---------- Yardımcı ---------- */
function fmtComp(c) {
  return { id: c.id, name: c.name, category: c.category, description: c.description, file: c.file }
}

/* ========== ARAÇLAR ========== */

server.tool(
  "list_components",
  "Bileşenleri listeler (kategori isteğe bağlı).",
  { category: z.string().optional().describe("Kategori adı (örn: 'Form Elemanları')") },
  ({ category }) => {
    let list = registry.components
    if (category) list = list.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()))
    return { content: [{ type: "text", text: JSON.stringify(list.map(fmtComp), null, 2) }] }
  }
)

server.tool(
  "search_components",
  "Bileşen ara (ad/numara/kategori).",
  { query: z.string().describe("Arama terimi (örn: 'buton', 'tabs', '009', 'renk')") },
  ({ query }) => {
    const q = query.toLowerCase()
    const hits = registry.components.filter(
      (c) =>
        c.id.includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.description || "").toLowerCase().includes(q)
    )
    return { content: [{ type: "text", text: JSON.stringify(hits.map(fmtComp), null, 2) }] }
  }
)

server.tool(
  "get_component",
  "Bir bileşenin tam kodunu döndürür (örn '008').",
  { id: z.string().describe("Bileşen numarası (001-087) veya adı (örn: '008', 'Button')") },
  ({ id }) => {
    const c = byId.get(id) || registry.components.find((x) => x.name.toLowerCase() === id.toLowerCase())
    if (!c) return { content: [{ type: "text", text: `Bileşen bulunamadı: ${id}. list_components ile arayın.` }] }
    return { content: [{ type: "text", text: JSON.stringify({ ...fmtComp(c), code: c.code }, null, 2) }] }
  }
)

server.tool(
  "get_components",
  "Birden çok bileşen kodunu tek blokta döndürür (örn ['008','009']).",
  { ids: z.array(z.string()).describe("Bileşen numaraları, örn: ['008','009','012']") },
  ({ ids }) => {
    const parts = []
    for (const id of ids) {
      const c = byId.get(id) || registry.components.find((x) => x.name.toLowerCase() === String(id).toLowerCase())
      if (!c) { parts.push(`<!-- ${id}: BULUNAMADI -->`); continue }
      parts.push(`<!-- ===== ${c.id} ${c.name} (${c.category}) ===== -->\n${c.code}`)
    }
    return { content: [{ type: "text", text: parts.join("\n\n") }] }
  }
)

server.tool(
  "list_layouts",
  "Sayfa şablonlarını listeler.",
  {},
  () => {
    return {
      content: [{
        type: "text",
        text: JSON.stringify(
          registry.layouts.map((l) => ({ id: l.id, name: l.name, description: l.description, components: l.components })),
          null, 2
        ),
      }],
    }
  }
)

server.tool(
  "get_layout",
  "Şablon kodunu + kullandığı bileşenleri döndürür.",
  { id: z.string().describe("Layout kimliği (örn: 'layout-dashboard') veya adı") },
  ({ id }) => {
    const l = byIdL.get(id) || registry.layouts.find((x) => x.name.toLowerCase() === id.toLowerCase())
    if (!l) return { content: [{ type: "text", text: `Layout bulunamadı: ${id}. list_layouts ile arayın.` }] }
    return { content: [{ type: "text", text: JSON.stringify({ id: l.id, name: l.name, description: l.description, components: l.components, code: l.code }, null, 2) }] }
  }
)

server.tool(
  "build_page",
  "İstenen sayfa için hazır istem + bileşen/layout kodlarını üretir (örn components:['008'], layout:'layout-dashboard').",
  {
    components: z.array(z.string()).describe("Kullanılacak bileşen numaraları (örn: ['008','009','021'])"),
    layout: z.string().optional().describe("Kullanılacak layout kimliği (örn: 'layout-dashboard')"),
  },
  ({ components, layout }) => {
    const parts = []
    const used = []
    for (const id of components) {
      const c = byId.get(id) || registry.components.find((x) => x.name.toLowerCase() === String(id).toLowerCase())
      if (!c) { parts.push(`<!-- ${id}: BULUNAMADI -->`); continue }
      used.push(`${c.id} ${c.name}`)
      parts.push(`<!-- ===== ${c.id} ${c.name} (${c.category}) ===== -->\n${c.code}`)
    }
    let layoutPart = ""
    if (layout) {
      const l = byIdL.get(layout) || registry.layouts.find((x) => x.name.toLowerCase() === layout.toLowerCase())
      if (l) {
        used.push(`layout: ${l.id} ${l.name}`)
        layoutPart = `\n<!-- ===== LAYOUT: ${l.id} ${l.name} ===== -->\n${l.code}`
      }
    }
    const prompt =
      `GÖREV: Aşağıdaki bileşen ve layout kodlarını kullanarak istenen sayfayı oluştur.\n` +
      `Kullanılan kayıtlar: ${used.join(", ") || "yok"}\n` +
      `Kurallar:\n` +
      `- Kodları olduğu gibi kullan; isimleri, export'ları değiştirme.\n` +
      `- Uygulamayı <Rac> sağlayıcısı ile sarmala (import { Rac } from "@/components/ui/rac").\n` +
      `- İkonlar için: import { IkonAdi } from "@/components/ui/icons" (lucide).\n` +
      `- Bileşenler Tailwind v4 + shadcn tema değişkenleri kullanır; index.css hazır olduğunu varsay.\n` +
      `- Yalnızca çalışan, derlenebilir kod üret.\n\n` +
      parts.join("\n\n") + layoutPart
    return { content: [{ type: "text", text: prompt }] }
  }
)

/* ---------- Başlat ---------- */
const transport = new StdioServerTransport()
await server.connect(transport)
console.error("✅ Bileşen Kayıt Defteri MCP sunucusu çalışıyor (stdio)")
