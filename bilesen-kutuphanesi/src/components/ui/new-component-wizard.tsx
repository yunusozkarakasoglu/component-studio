/**
 * NewComponentWizard
 * "+ Yeni Bileşen" sihirbazı — 2 sütunlu: SOL terminal (pi sohbet + canlı akış),
 * SAĞ önizleme + alt pencere/dosya seçenekleri (test → kategori → kayıt).
 * Pi SDK köprüsü: POST /api/pi (SSE akışı) — vite dev sunucusu pi'yi çalıştırır.
 * Temiz çalışma: workbench/current izolasyonu; çıkışta silinir; beforeunload uyarısı.
 */
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/* ---------- Yardımcılar ---------- */

type Mode = "kopyala" | "llm" | "kutuphane"

interface TerminalMsg {
  role: "user" | "pi" | "tool" | "system"
  text: string
}

const CATEGORIES = [
  "Accordion", "Alert & Dialog", "Breadcrumbs", "Butonlar & Aksiyonlar", "Checkbox", "Colors",
  "Combobox", "Tarih", "Form Elemanları", "Genel", "Kartlar", "Navigasyon", "Overlay",
  "Panel & Drawer", "Seçim", "Takvim", "Veri Gösterimi", "Yükleme & İlerleme", "Özel Komponentler",
]

const STYLE = {
  btn: "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-muted text-foreground hover:bg-muted/70",
  ghost: "bg-transparent hover:bg-muted",
  danger: "bg-red-600 text-white hover:bg-red-700",
  input: "w-full rounded-md border border-border bg-background px-2.5 py-1.5 text-sm text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/40",
}

/* ---------- Önizleme (workbench/current dinamik import) ---------- */

function useWorkbenchPreview(refreshKey: number) {
  const [Comp, setComp] = useState<React.ComponentType | null>(null)
  const [err, setErr] = useState<string | null>(null)
  useEffect(() => {
    let on = true
    setComp(null)
    setErr(null)
    // query cache-bypass: her önizleme taze modül çeker (vite query'li import ayrı modül sayar)
    import("../../workbench/current/index?wb=" + refreshKey)
      .then((m: Record<string, unknown>) => {
        if (!on) return
        const fn = Object.values(m).find((v) => typeof v === "function")
        if (fn) setComp(() => fn as React.ComponentType)
        else setErr("Named export (fonksiyon) bulunamadı")
      })
      .catch((e: unknown) => on && setErr(String((e as Error).message || e)))
    return () => { on = false }
  }, [refreshKey])
  return { Comp, err }
}

/* ---------- Ana sihirbaz ---------- */

interface NewComponentWizardProps {
  registry: { components: { id: string; name: string; category: string }[] } | null
  onClose: () => void
}

function NewComponentWizard({ registry, onClose }: NewComponentWizardProps) {
  const [mode, setMode] = useState<Mode>("llm")
  const [code, setCode] = useState("")
  const [previewKey, setPreviewKey] = useState(0)
  const [msgs, setMsgs] = useState<TerminalMsg[]>([
    { role: "system", text: "Terminal — pi'ye bağlı. Tanımınızı yazın, pi bileşeni üretip dosyayı yazar." },
  ])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Genel")
  const [subcategory, setSubcategory] = useState("")
  const [testResult, setTestResult] = useState<{ ok: boolean; issues: string[] } | null>(null)
  const [saved, setSaved] = useState<{ id: string; file: string } | null>(null)
  const [pending, setPending] = useState<Array<{ id: string; file: string; category: string }>>(() => {
    try { return JSON.parse(localStorage.getItem("wb-pending") || "[]") } catch { return [] }
  })
  const [libSel, setLibSel] = useState<string[]>([])
  const [libQ, setLibQ] = useState("")
  const termRef = useRef<HTMLDivElement>(null)

  // workbench değişiminde tam sayfa yenileme olmasın (sihirbaz state'i korunur)
  useEffect(() => {
    const mod = import.meta as unknown as { hot?: { accept: (deps: string, cb: () => void) => void } }
    mod.hot?.accept("/src/workbench/current/index.tsx", () => { setPreviewKey((k) => k + 1) })
    return () => {}
  }, [])

  // Kaydetmeden kapatma uyarısı — yalnızca gerçek çalışma varken
  const dirty = code.length > 0 || msgs.length > 1 || saved !== null
  useEffect(() => {
    if (!dirty) return
    const h = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = "" }
    window.addEventListener("beforeunload", h)
    return () => window.removeEventListener("beforeunload", h)
  }, [dirty])

  // Oturum başlat
  useEffect(() => {
    fetch("/api/workbench/start", { method: "POST" }).catch(() => {})
    return () => { fetch("/api/workbench/clear", { method: "POST" }).catch(() => {}) }
  }, [])

  useEffect(() => { termRef.current?.scrollTo({ top: termRef.current.scrollHeight }) }, [msgs])

  const push = (m: TerminalMsg) => setMsgs((p) => [...p, m])

  /* ---------- Pi'ye gönder (SSE) ---------- */
  const sendToPi = async (text: string) => {
    if (!text.trim() || busy) return
    setInput("")
    push({ role: "user", text })
    setBusy(true)
    setTestResult(null)
    try {
      const res = await fetch("/api/pi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      if (!res.ok || !res.body) throw new Error("pi köprüsü yanıt vermedi: " + res.status)
      const reader = res.body.getReader()
      const dec = new TextDecoder()
      let buf = ""
      let acc = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buf += dec.decode(value, { stream: true })
        const lines = buf.split("\n")
        buf = lines.pop() ?? ""
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue
          try {
            const ev = JSON.parse(line.slice(6))
            if (ev.type === "delta") { acc += ev.text ?? ""; setMsgs((p) => {
              const next = [...p]
              const last = next[next.length - 1]
              if (last?.role === "pi") { next[next.length - 1] = { role: "pi", text: (last.text ?? "") + (ev.text ?? "") } }
              else next.push({ role: "pi", text: ev.text ?? "" })
              return next
            }) }
            else if (ev.type === "tool") { push({ role: "tool", text: "⚙ " + (ev.name ?? "araç") }) }
            else if (ev.type === "turn") { /* dönüş sonu */ }
            else if (ev.type === "done") { break }
          } catch { /* kısmi satır */ }
        }
      }
      // pi dosyayı yazdıysa önizlemeyi tazele
      const ok = await fetch("/api/test-component").then((r) => r.json()).catch(() => null)
      if (ok && ok.ok) setPreviewKey((k) => k + 1)
    } catch (e) {
      push({ role: "system", text: "✗ " + String((e as Error).message || e) })
    }
    setBusy(false)
  }

  /* ---------- Önizle ---------- */
  const preview = async () => {
    if (mode === "kopyala") {
      if (!code.trim()) return
      const r = await fetch("/api/workbench/save", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }),
      })
      if (!r.ok) return
    }
    // LLM/kütüphane modunda: pi dosyayı zaten yazdı — yalnızca tazele (üzerine yazma!)
    setPreviewKey((k) => k + 1)
  }

  /* ---------- Test Et ---------- */
  const runTest = async () => {
    const r = await fetch("/api/test-component").then((x) => x.json()).catch((e) => ({ ok: false, issues: [String(e)] }))
    setTestResult(r)
  }

  /* ---------- Kaydet (aşama 1: dosya) ---------- */
  const saveComponent = async () => {
    if (!name.trim()) { push({ role: "system", text: "✗ Bileşen adı gerekli (PascalCase)" }); return }
    const r = await fetch("/api/finalize-component", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), category, subcategory: subcategory.trim() }),
    }).then((x) => x.json()).catch((e) => ({ ok: false, error: String(e) }))
    if (r.ok) {
      setSaved({ id: r.id, file: r.file })
      push({ role: "system", text: `✓ Dosya kaydedildi: ${r.file} (id ${r.id}) — kayıt defterine eklemek için onaylayın.` })
    } else {
      push({ role: "system", text: "✗ " + (r.error || "kayıt başarısız") })
    }
  }

  /* ---------- Kayıt defteri onayı (aşama 2) ---------- */
  const confirmRegistry = async () => {
    const r = await fetch("/api/rebuild-registry").then((x) => x.json()).catch(() => ({ ok: false }))
    if (r.ok) {
      const item = { id: saved!.id, file: saved!.file, category }
      const next = pending.filter((p) => p.file !== item.file)
      setPending(next)
      localStorage.setItem("wb-pending", JSON.stringify(next))
      push({ role: "system", text: "✓ Kayıt defterine eklendi. Stüdyoda görünüyor." })
      setSaved(null)
    } else {
      push({ role: "system", text: "✗ Registry güncellenemedi — 'Bekleyen'de tutuldu." })
      const next = [...pending.filter((p) => p.file !== saved!.file), { id: saved!.id, file: saved!.file, category }]
      setPending(next)
      localStorage.setItem("wb-pending", JSON.stringify(next))
      setSaved(null)
    }
  }

  /* ---------- Vazgeç (temizlik) ---------- */
  const abandon = () => {
    const dirty = saved || code || msgs.length > 1
    if (dirty && !window.confirm("Kaydetmeden çıkılırsa çalışmanız ve workbench dosyaları silinir. Çıkılsın mı?")) return
    fetch("/api/workbench/clear", { method: "POST" }).catch(() => {})
    onClose()
  }

  const { Comp: PreviewComp, err: previewErr } = useWorkbenchPreview(previewKey)

  const libItems = registry?.components.filter((c) => !libQ || c.name.toLowerCase().includes(libQ.toLowerCase())).slice(0, 60) ?? []
  const toggleLib = (n: string) => setLibSel((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]))

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Üst bar */}
      <header className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-3">
          <h1 className="text-[15px] font-bold">🧩 + Yeni Bileşen</h1>
          <div className="flex gap-1 rounded-lg border border-border p-0.5">
            {([["kopyala", "Kopyala-Düzenle"], ["llm", "LLM Tanım"], ["kutuphane", "Kütüphaneden"]] as [Mode, string][]).map(([m, l]) => (
              <button key={m} onClick={() => setMode(m)}
                className={cn("rounded-md px-2.5 py-1 text-xs transition-colors", mode === m ? "bg-blue-600 text-white" : "hover:bg-muted")}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <button onClick={abandon} className={cn(STYLE.btn, STYLE.secondary)}>✕ Kapat</button>
      </header>

      {/* 2 sütun */}
      <div className="flex min-h-0 flex-1">
        {/* SOL — TERMİNAL */}
        <aside className="flex w-2/5 min-w-[340px] flex-col border-r border-border min-h-0">
          {mode === "kopyala" && (
            <div className="flex min-h-0 flex-1 flex-col border-b border-border">
              <div className="border-b border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">KOD</div>
              <textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false}
                className="min-h-0 flex-1 resize-none bg-background p-3 font-mono text-xs outline-none" placeholder="Bileşen kodunuzu yapıştırın…" />
            </div>
          )}
          {mode === "kutuphane" && (
            <div className="flex min-h-0 flex-1 flex-col border-b border-border">
              <div className="border-b border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">KÜTÜPHANEDEN SEÇ (pi'ye bağlam olarak gider)</div>
              <input value={libQ} onChange={(e) => setLibQ(e.target.value)} placeholder="Ara…" className={cn(STYLE.input, "mx-2 my-1.5 h-8 text-xs")} />
              <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-2">
                {libItems.map((c) => (
                  <label key={c.id} className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs hover:bg-muted">
                    <input type="checkbox" checked={libSel.includes(c.name)} onChange={() => toggleLib(c.name)} />
                    <span className="font-mono text-[10px] text-muted-foreground">{c.id}</span>
                    <span>{c.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          <div className="flex min-h-0 flex-1 flex-col">
            <div ref={termRef} className="min-h-0 flex-1 overflow-y-auto bg-neutral-950 p-3 font-mono text-xs text-neutral-100">
              {msgs.map((m, i) => (
                <div key={i} className={cn("mb-1.5 whitespace-pre-wrap break-words",
                  m.role === "user" && "text-blue-300", m.role === "tool" && "text-amber-300",
                  m.role === "system" && "text-neutral-400", m.role === "pi" && "text-emerald-300")}>
                  {m.role === "user" && "❯ "}{m.role === "tool" && "› "}{m.role === "system" && "· "}{m.text}
                </div>
              ))}
              {busy && <div className="animate-pulse text-neutral-400">pi çalışıyor…</div>}
            </div>
            <div className="flex shrink-0 gap-1.5 border-t border-border p-2">
              <input value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendToPi(input)}
                placeholder={mode === "llm" ? "Tanım yazın… (örn: solda ikon, sağda metinli bildirim kartı)" : "pi'ye mesaj…"}
                className={cn(STYLE.input, "h-8 flex-1 text-xs")} />
              <button onClick={() => sendToPi(input)} disabled={busy} className={cn(STYLE.btn, STYLE.primary, "h-8 px-3 text-xs")}>
                {busy ? "…" : "Gönder"}
              </button>
              {mode === "kutuphane" && libSel.length > 0 && (
                <button onClick={() => sendToPi("Şu kütüphane bileşenlerini kullanarak yeni bir bileşen oluştur: " + libSel.join(", ") + ". Bunları birleştirerek kullanışlı bir bileşen tasarla.")}
                  disabled={busy} className={cn(STYLE.btn, STYLE.secondary, "h-8 px-3 text-xs")}>Pi'ye Bağla</button>
              )}
            </div>
          </div>
        </aside>

        {/* SAĞ — ÖNİZLEME + ALT */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="border-b border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">ÖNİZLEME (workbench/current)</div>
            <div className="min-h-0 flex-1 overflow-auto bg-muted/20 p-6">
              {previewErr ? <div className="text-xs text-red-600">{previewErr}</div> : PreviewComp ? <PreviewComp /> : <div className="text-xs text-muted-foreground">Önizleme için [Önizle]'ye basın veya pi'ye tanım verin.</div>}
            </div>
          </div>

          {/* ALT — PENCERE & DOSYA SEÇENEKLERİ */}
          <footer className="shrink-0 border-t border-border bg-background p-3">
            {saved ? (
              <div className="flex items-center gap-3">
                <span className="text-sm">✓ Dosya kaydedildi: <code className="font-mono">{saved.file}</code> (id {saved.id})</span>
                <button onClick={confirmRegistry} className={cn(STYLE.btn, STYLE.primary)}>Kayıt defterine ekle</button>
                <button onClick={() => { setPending([...pending, { id: saved.id, file: saved.file, category }]); localStorage.setItem("wb-pending", JSON.stringify([...pending, { id: saved.id, file: saved.file, category }])); push({ role: "system", text: "Bekleyen kayıtlara eklendi — sol panel rozetinden tamamlanabilir." }); setSaved(null) }}
                  className={cn(STYLE.btn, STYLE.secondary)}>Sonra (bekleyen)</button>
                <button onClick={() => setSaved(null)} className={cn(STYLE.btn, STYLE.ghost)}>Vazgeç</button>
              </div>
            ) : (
              <>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <label className="text-xs text-muted-foreground">Bileşen adı</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="OrnekBilesen (PascalCase)" className={cn(STYLE.input, "w-48 h-8 text-xs")} />
                  <label className="text-xs text-muted-foreground">Kategori</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className={cn(STYLE.input, "h-8 w-44 text-xs")}>
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    <option value="__yeni">+ Yeni kategori…</option>
                  </select>
                  {category === "__yeni" && (
                    <input value={subcategory.startsWith("!") ? subcategory.slice(1) : ""} onChange={(e) => setSubcategory("!" + e.target.value)}
                      placeholder="Yeni kategori adı" className={cn(STYLE.input, "w-40 h-8 text-xs")} />
                  )}
                  <label className="text-xs text-muted-foreground">Alt kategori (ops.)</label>
                  <input value={subcategory.startsWith("!") ? "" : subcategory} onChange={(e) => setSubcategory(e.target.value)} placeholder="örn. Basit" className={cn(STYLE.input, "w-32 h-8 text-xs")} />
                  <span className="text-xs text-muted-foreground">→ <code className="font-mono">{name ? name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : "…"}.tsx</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={preview} className={cn(STYLE.btn, STYLE.secondary)}>👁 Önizle</button>
                  <button onClick={runTest} className={cn(STYLE.btn, STYLE.secondary)}>🧪 Test Et</button>
                  <button onClick={saveComponent} disabled={!name.trim()} className={cn(STYLE.btn, STYLE.primary)}>💾 Kaydet</button>
                  <button onClick={abandon} className={cn(STYLE.btn, STYLE.danger)}>Vazgeç</button>
                  {pending.length > 0 && (
                    <span className="ml-auto rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-medium text-amber-700" title={pending.map((p) => p.file).join("\n")}>
                      ⏳ Bekleyen: {pending.length}
                    </span>
                  )}
                </div>
                {testResult && (
                  <div className={cn("mt-2 rounded-md p-2 text-xs", testResult.ok ? "bg-emerald-500/10 text-emerald-700" : "bg-red-500/10 text-red-700")}>
                    {testResult.ok ? "✓ Test geçti — dosya temiz" : "✗ Test hataları: " + testResult.issues.join(" · ")}
                  </div>
                )}
              </>
            )}
          </footer>
        </main>
      </div>
    </div>
  )
}

export { NewComponentWizard }
