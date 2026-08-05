import path from "path"
import { writeFileSync, readFileSync, appendFileSync, existsSync, rmSync, mkdirSync, readdirSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { createRequire } from "node:module"
import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

/**
 * Düzenleme API'si: katalog stüdyosundan gelen kayıt isteklerini işler.
 * - POST /api/save-component { file, code } → src/components/ui/<file> yazar
 * - POST /api/rebuild-registry → build-registry.mjs çalıştırır (veri tabanını tazeler)
 */
function studioApi(): Plugin {
  const UI_DIR = path.resolve(__dirname, "src", "components", "ui")
  const LAYOUT_DIR = path.resolve(__dirname, "src", "layouts")
  const WB_DIR = path.resolve(__dirname, "src", "workbench", "current")

  /* ---------- Pi SDK köprüsü (terminal sohbeti — tembel başlatma) ---------- */
  let piSessionPromise: Promise<{ prompt: (m: string) => Promise<unknown>; subscribe: (fn: (e: unknown) => void) => () => void }> | null = null
  async function getPiSession() {
    if (!piSessionPromise) {
      piSessionPromise = (async () => {
        const g = spawnSync("npm", ["root", "-g"], { encoding: "utf8" }).stdout.trim()
        const require = createRequire(import.meta.url)
        const sdk = require(path.join(g, "@earendil-works", "pi-coding-agent"))
        const { createAgentSession, DefaultResourceLoader, SessionManager, getAgentDir } = sdk
        const ROOT = path.resolve(__dirname, "..")
        const loader = new DefaultResourceLoader({
          cwd: ROOT,
          agentDir: getAgentDir(),
          // Sihirbaz bağlamı: pi bu oturumda yeni bileşen üretir
          appendSystemPromptOverride: () => [
            {
              text: `ŞU ANKİ GÖREV: "+ Yeni Bileşen" sihirbazı — kullanıcının istediği bileşeni ÜRET.
Kurallar: 1) Çalışma klasörü src/workbench/current/ — index.tsx'e tek dosya yaz (named export).
2) Saf React: yalnızca react + tailwind. Üçüncü parti UI paketi YOK.
3) İkonlar kendi setimizden: @/components/ui/icons.
4) Mevcut kütüphane bileşenlerini import edebilirsin: @/components/ui/...
5) Bileşeni yazdıktan sonra kullanıcıya kısaca açıkla (ne yaptın, nasıl kullanılır).`,
            },
          ],
        })
        await loader.reload()
        const { session } = await createAgentSession({ resourceLoader: loader, sessionManager: SessionManager.inMemory() })
        return session
      })()
    }
    return piSessionPromise
  }

  return {
    name: "studio-api",
    configureServer(server) {

      /* ---------- Workbench (geçici çalışma alanı) ---------- */
      function wbEnsure() { mkdirSync(WB_DIR, { recursive: true }) }

      server.middlewares.use("/api/workbench/start", (_req, res) => {
        try {
          rmSync(WB_DIR, { recursive: true, force: true })
          wbEnsure()
          const tmpl = `/**\n * Yeni Bileşen — sihirbaz çalışma alanı\n * Bu dosya geçicidir; kayıtta src/components/ui/'ya taşınır.\n */\nimport { cn } from "@/lib/utils"\n\nfunction YeniBilesen({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {\n  return (\n    <div className={cn("rounded-lg border border-border bg-background p-6", className)} {...props}>\n      Bileşeninizi buraya yazın — Önizle ile canlı görün.\n    </div>\n  )\n}\n\nexport { YeniBilesen }\n`
          writeFileSync(path.join(WB_DIR, "index.tsx"), tmpl, "utf8")
          res.end(JSON.stringify({ ok: true }))
        } catch (e: unknown) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) }
      })

      server.middlewares.use("/api/workbench/save", (req, res) => {
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", () => {
          try {
            const { code } = JSON.parse(body)
            if (typeof code !== "string") throw new Error("code gerekli")
            wbEnsure()
            writeFileSync(path.join(WB_DIR, "index.tsx"), code, "utf8")
            res.end(JSON.stringify({ ok: true }))
          } catch (e: unknown) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) }
        })
      })

      server.middlewares.use("/api/workbench/read", (_req, res) => {
        try {
          const idx = path.join(WB_DIR, "index.tsx")
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ ok: true, code: existsSync(idx) ? readFileSync(idx, "utf8") : "" }))
        } catch (e: unknown) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) }
      })

      server.middlewares.use("/api/workbench/clear", (_req, res) => {
        try { rmSync(WB_DIR, { recursive: true, force: true }); res.end(JSON.stringify({ ok: true })) }
        catch (e: unknown) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) }
      })

      /* ---------- Test Et: workbench dosyasını doğrula ---------- */
      server.middlewares.use("/api/test-component", (_req, res) => {
        try {
          const idx = path.join(WB_DIR, "index.tsx")
          if (!existsSync(idx)) throw new Error("Önce kodu önizleyin (workbench boş)")
          const code = readFileSync(idx, "utf8")
          const issues: string[] = []
          // yasak bağımlılık
          for (const b of ["@heroui/react", "@gravity-ui", "lucide-react", "@iconify", "react-aria-components", "class-variance-authority", "sonner"]) {
            for (const line of code.split("\n")) {
              if (line.includes("import") && line.includes("from") && line.includes(b)) issues.push("Yasak import: " + b)
            }
          }
          // named export var mı
          if (!/export \{/.test(code)) issues.push("Named export yok (export { Ad })")
          // JSDoc @category yoksa uyarı değil (kayıtta eklenir)
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ ok: issues.length === 0, issues }))
        } catch (e: unknown) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) }
      })

      /* ---------- Pi köprüsü: POST /api/pi {message} → SSE akışı ---------- */
      server.middlewares.use("/api/pi", async (req, res) => {
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", async () => {
          try {
            const { message } = JSON.parse(body || "{}")
            if (!message) throw new Error("message gerekli")
            res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" })
            const session = await getPiSession()
            const send = (type: string, data: unknown) => res.write("data: " + JSON.stringify({ type, ...(data as object) }) + "\n\n")
            const unsub = session.subscribe((e: { type?: string; assistantMessageEvent?: { type?: string; delta?: string }; toolCall?: { name?: string } }) => {
              try {
                if (e.type === "message_update" && e.assistantMessageEvent?.type === "text_delta") {
                  send("delta", { text: e.assistantMessageEvent.delta })
                } else if (e.type === "tool_execution_start") {
                  send("tool", { name: e.toolCall?.name ?? "araç" })
                } else if (e.type === "turn_end") {
                  send("turn", {})
                }
              } catch { /* istemci kapandı */ }
            })
            await session.prompt(message)
            send("done", {})
            unsub()
            res.end()
          } catch (e: unknown) {
            try { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) })) } catch { /* boş */ }
          }
        })
      })

      /* ---------- Kaydet (aşama 1): workbench → ui/<kebab>.tsx + barrel + samples ---------- */
      server.middlewares.use("/api/finalize-component", (req, res) => {
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", () => {
          try {
            const { name, category, subcategory } = JSON.parse(body)
            if (!name || !/^[A-Z][A-Za-z0-9]*$/.test(name)) throw new Error("Geçersiz bileşen adı (PascalCase)")
            const cat = (category || "Genel").trim()
            const sub = (subcategory || "").trim()
            const idx = path.join(WB_DIR, "index.tsx")
            if (!existsSync(idx)) throw new Error("Workbench boş — önce önizleyin")
            let code = readFileSync(idx, "utf8")
            // @id bul (sıradaki boş — registry'den)
            let used = new Set<number>()
            try {
              const reg = JSON.parse(readFileSync(path.resolve(__dirname, "..", "registry", "data", "registry.json"), "utf8"))
              used = new Set(reg.components.map((c: { id: string }) => Number(c.id) || 0))
            } catch { /* yoksa dosya taraması */ }
            let id = used.size ? Math.max(...used) + 1 : 615
            // JSDoc @id/@category ekle (mevcut /** ... */ yoksa başa; varsa etiketleri enjekte et)
            const pad = String(id).padStart(3, "0")
            if (code.includes("@id")) code = code.replace(/@id\s+\d+/, "@id " + pad)
            else code = code.replace(/\/\*\*/, "/**\n * " + name + " — sihirbazla oluşturuldu\n * @id " + pad)
            if (code.includes("@category")) code = code.replace(/@category\s+.+/, "@category " + cat)
            else if (code.includes("@id")) code = code.replace(/@id\s+\d+/, "@id " + pad + "\n * @category " + cat)
            if (sub && code.includes("@subcategory")) code = code.replace(/@subcategory\s+.+/, "@subcategory " + sub)
            else if (sub && code.includes("@category")) code = code.replace(/@category\s+.+/, "@category " + cat + "\n * @subcategory " + sub)
            // kebab dosya adı (slug kuralı: TextArea→textarea, all-caps ayrımı)
            let n = name.replace(/TextArea/g, "Textarea").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
            const kebab = n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            const target = path.join(UI_DIR, kebab + ".tsx")
            if (existsSync(target)) throw new Error("Dosya zaten var: " + kebab + ".tsx")
            writeFileSync(target, code, "utf8")
            // barrel
            appendFileSync(path.join(UI_DIR, "index.tsx"), "\nexport * from \"./" + kebab + "\"\n", "utf8")
            // samples
            const sp = path.resolve(__dirname, "src", "samples.tsx")
            const ss = readFileSync(sp, "utf8")
            if (!ss.includes('"' + pad + '":')) {
              const i = ss.lastIndexOf("}")
              writeFileSync(sp, ss.slice(0, i) + '  "' + pad + '": <U.' + name + ' />,\n' + ss.slice(i), "utf8")
            }
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ ok: true, id: pad, file: kebab + ".tsx", category: cat, needsRegistry: true }))
          } catch (e: unknown) {
            res.statusCode = 500
            res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) }))
          }
        })
      })

      server.middlewares.use("/api/create-component", (req, res) => {
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", () => {
          try {
            const { name, category, num } = JSON.parse(body)
            if (!name || !/^[A-Z][A-Za-z0-9]*$/.test(name)) throw new Error("Geçersiz bileşen adı (PascalCase olmalı)")
            const cat = (category || "Genel").trim()
            // dosya adı (kebab-case)
            const kebab = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            const target = path.resolve(UI_DIR, kebab + ".tsx")
            if (existsSync(target)) throw new Error("Bu isimde dosya zaten var: " + kebab + ".tsx")
            // numara: verilen ya da sıradaki boş (registry.json'dan mevcut kimlikler)
            let used = new Set<number>()
            try {
              const reg = JSON.parse(readFileSync(path.resolve(__dirname, "..", "registry", "data", "registry.json"), "utf8"))
              used = new Set(reg.components.map((c: { id: string }) => Number(c.id) || 0))
            } catch { /* registry yoksa dosya taraması */ }
            let id = num ? Number(num) : 0
            if (!id || used.has(id)) { while (used.has(++id)) {} }
            if (id > 999) throw new Error("Numara aralığı dolu")
            // şablon
            const code = `/**\n * ${name}\n * Template Maker — özel bileşen (otomatik oluşturuldu)\n * @id ${String(id).padStart(3, "0")}\n * @category ${cat}\n */\nimport { cn } from "@/lib/utils"\nimport type * as React from "react"\n\ninterface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {}\n\nfunction ${name}({ className, ...props }: ${name}Props) {\n  return (\n    <div className={cn("rounded-lg border border-border bg-card p-6", className)} {...props}>\n      ${name} içeriği — burayı düzenleyin\n    </div>\n  )\n}\n\nexport { ${name} }\nexport type { ${name}Props }\n`
            writeFileSync(target, code, "utf8")
            // index.tsx'e ekle
            appendFileSync(path.resolve(UI_DIR, "index.tsx"), `\nexport * from "./${kebab}"\n`, "utf8")
            // samples.tsx'e önizleme ekle
            const sp = path.resolve(__dirname, "src", "samples.tsx")
            const ss = readFileSync(sp, "utf8")
            if (!ss.includes('"${String(id).padStart(3, "0")}":')) {
              const i = ss.lastIndexOf("}")
              writeFileSync(sp, ss.slice(0, i) + `  "${String(id).padStart(3, "0")}": <U.${name} />,\n` + ss.slice(i), "utf8")
            }
            // veri tabanını tazele
            spawnSync("node", ["build-registry.mjs"], { cwd: path.resolve(__dirname, "..", "registry"), stdio: "pipe" })
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ ok: true, id: String(id).padStart(3, "0"), file: kebab + ".tsx", category: cat }))
          } catch (e: unknown) {
            res.statusCode = 500
            res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) }))
          }
        })
      })

      server.middlewares.use("/api/save-component", (req, res) => {
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", () => {
          try {
            const { file, code, dir } = JSON.parse(body)
            if (!file || !/^[a-z0-9-]+\.tsx$/.test(file)) throw new Error("Geçersiz dosya adı")
            const base = dir === "layouts" ? LAYOUT_DIR : UI_DIR
            const target = path.resolve(base, file)
            if (!target.startsWith(base + path.sep)) throw new Error("Yol dışında")
            writeFileSync(target, code, "utf8")
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ ok: true }))
          } catch (e: unknown) {
            res.statusCode = 500
            res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) }))
          }
        })
      })
      server.middlewares.use("/api/rebuild-registry", (_req, res) => {
        try {
          const r = spawnSync("node", ["build-registry.mjs"], {
            cwd: path.resolve(__dirname, "..", "registry"),
            stdio: "pipe",
          })
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ ok: r.status === 0, out: String(r.stdout), err: String(r.stderr) }))
        } catch (e: unknown) {
          res.statusCode = 500
          res.end(JSON.stringify({ ok: false, error: String((e as Error).message || e) }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), studioApi()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { port: 5800, strictPort: true },
})
