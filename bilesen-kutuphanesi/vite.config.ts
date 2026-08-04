import path from "path"
import { writeFileSync, readFileSync, appendFileSync, existsSync } from "node:fs"
import { spawnSync } from "node:child_process"
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
  return {
    name: "studio-api",
    configureServer(server) {

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
