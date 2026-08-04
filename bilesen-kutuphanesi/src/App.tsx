import { Component, useEffect, useMemo, useState, type ReactNode } from "react"
import type { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { findRootInfo, injectStyleAt } from "@/lib/findRootInfo"
import { COMPONENT_META } from "@/components-meta"
import { SAMPLES } from "./samples"

type CompRecord = { id: string; name: string; category: string; description: string; file: string; code: string; exists: boolean; path: string }

/* ---------- Hata sınırı ---------- */
class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null }
  static getDerivedStateFromError(err: Error) { return { err } }
  render() {
    if (this.state.err) {
      return <div className="flex h-full items-center justify-center p-2 text-center text-[10px] text-muted-foreground">{this.state.err.message}</div>
    }
    return this.props.children
  }
}

/* ---------- Stüdyo UI yardımcıları (saf React — bağımlılıksız) ---------- */
function Text({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={className}>{children}</div>
}

const btnVariant: Record<string, string> = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-black/30 bg-transparent hover:bg-muted",
  secondary: "bg-muted text-foreground hover:bg-muted/70",
  ghost: "bg-transparent hover:bg-muted",
}
const btnSize: Record<string, string> = {
  default: "px-3 py-1.5 text-sm",
  sm: "px-2 py-1 text-xs",
}

function Button({
  variant = "default",
  size = "default",
  isDisabled,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string; isDisabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
        btnVariant[variant] ?? btnVariant.default,
        btnSize[size] ?? btnSize.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function SearchField({
  value,
  onChange,
  className,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & { onChange?: (v: string) => void }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn("h-8 w-full rounded border border-black/40 bg-background px-2 text-xs outline-none", className)}
      {...props}
    />
  )
}

/* ========== ÖZELLEŞTİRME AYARLARI ========== */
type StyleState = {
  borderColor: string
  borderWidth: string
  borderRadius: string
  fontFamily: string
  fontSize: string
  fontWeight: string
  color: string
  backgroundColor: string
  padding: string
  width: string
  textAlign: string
}

const DEF_STYLE: StyleState = {
  borderColor: "#000000",
  borderWidth: "1px",
  borderRadius: "8px",
  fontFamily: "system-ui, sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#111827",
  backgroundColor: "#ffffff",
  padding: "8px 16px",
  width: "auto",
  textAlign: "left",
}

const STYLE_KEYS: [keyof StyleState, string][] = [
  ["borderColor", "borderColor"],
  ["borderWidth", "borderWidth"],
  ["borderRadius", "borderRadius"],
  ["fontFamily", "fontFamily"],
  ["fontSize", "fontSize"],
  ["fontWeight", "fontWeight"],
  ["color", "color"],
  ["backgroundColor", "backgroundColor"],
  ["padding", "padding"],
  ["width", "width"],
  ["textAlign", "textAlign"],
]

function buildCustomCode(name: string, id: string, s: StyleState): string {
  const lines = STYLE_KEYS.map(([sk, jsKey]) => `    ${jsKey}: "${s[sk]}"`).join(",\n")
  return `/* ${id} ${name} — özelleştirilmiş kullanım (Template Maker) */\n` +
    `/* Temel stiller kaynak kodda; buradaki style, görünümü ezer. */\n` +
    `<${name}\n  style={{\n${lines}\n  }}\n>\n  İçerik\n</${name}>`
}

function Sel({
  value, onChange, options,
}: { value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-7 w-full rounded border border-black/30 bg-background px-1 text-[11px] outline-none"
    >
      {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
    </select>
  )
}

function SettingRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex items-center gap-2">
      <span className="w-[88px] shrink-0 truncate text-[11px] text-foreground">{label}</span>
      <span className="min-w-0 flex-1">{children}</span>
    </label>
  )
}

function SettingsPanel({ s, set }: { s: StyleState; set: (p: Partial<StyleState>) => void }) {
  const color = (label: string, key: keyof StyleState) => (
    <SettingRow label={label}>
      <input type="color" value={s[key] as string} onChange={(e) => set({ [key]: e.target.value } as Partial<StyleState>)}
        className="h-7 w-full cursor-pointer rounded border border-black/30 bg-background" />
    </SettingRow>
  )
  const group = (title: string, rows: ReactNode) => (
    <div className="rounded-lg border border-black/25 p-2">
      <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{title}</div>
      <div className="space-y-1.5">{rows}</div>
    </div>
  )
  return (
    <div className="space-y-2 p-2.5">
      {group("Kenarlık", (
        <>
          {color("Kenarlık Rengi", "borderColor")}
          <SettingRow label="Kalınlık">
            <Sel value={s.borderWidth} onChange={(v) => set({ borderWidth: v })} options={[["0px","Yok"],["1px","1px"],["2px","2px"],["3px","3px"],["4px","4px"]]} />
          </SettingRow>
          <SettingRow label="Köşe Yarıçapı">
            <Sel value={s.borderRadius} onChange={(v) => set({ borderRadius: v })} options={[["0px","Keskin"],["4px","4px"],["8px","8px"],["12px","12px"],["16px","16px"]]} />
          </SettingRow>
        </>
      ))}
      {group("Yazı Tipi", (
        <>
          <SettingRow label="Yazı Tipi">
            <Sel value={s.fontFamily} onChange={(v) => set({ fontFamily: v })}
              options={[["system-ui, sans-serif","Sistem"],["'Segoe UI', Arial, sans-serif","Sans"],["Georgia, 'Times New Roman', serif","Serif"],["'Courier New', monospace","Mono"]]} />
          </SettingRow>
          <SettingRow label="Yazı Boyutu">
            <Sel value={s.fontSize} onChange={(v) => set({ fontSize: v })}
              options={[["12px","12px"],["14px","14px"],["16px","16px"],["18px","18px"],["20px","20px"],["24px","24px"],["28px","28px"],["32px","32px"]]} />
          </SettingRow>
          <SettingRow label="Kalınlık">
            <Sel value={s.fontWeight} onChange={(v) => set({ fontWeight: v })}
              options={[["400","Normal"],["500","Orta"],["600","Kalın"],["700","Çok kalın"],["800","En kalın"]]} />
          </SettingRow>
          {color("Yazı Rengi", "color")}
        </>
      ))}
      {group("Görünüm", (
        <>
          {color("Arka Plan", "backgroundColor")}
          <SettingRow label="Dolgu (Padding)">
            <Sel value={s.padding} onChange={(v) => set({ padding: v })}
              options={[["0px","Yok"],["4px 8px","4px"],["8px 16px","8px"],["12px 24px","12px"],["16px 32px","16px"],["24px 48px","24px"]]} />
          </SettingRow>
          <SettingRow label="Genişlik">
            <Sel value={s.width} onChange={(v) => set({ width: v })}
              options={[["auto","Otomatik"],["100%","%100"],["160px","160px"],["240px","240px"],["320px","320px"],["480px","480px"]]} />
          </SettingRow>
          <SettingRow label="Hizalama">
            <Sel value={s.textAlign} onChange={(v) => set({ textAlign: v })}
              options={[["left","Sol"],["center","Orta"],["right","Sağ"]]} />
          </SettingRow>
        </>
      ))}
    </div>
  )
}



/* ---------- LLM entegrasyon istemi üretici ---------- */
function buildPrompt(absPath: string, name: string, id: string, category: string, kind: "component" | "layout", task: string): string {
  const t = task.trim() || "(kullanıcı görevi belirtilmedi — bileşeni projeye ekle ve örnek kullanımını göster)"
  const tur = kind === "layout" ? "sayfa şablonunu" : "bileşeni"
  const baslik = kind === "layout" ? "ŞABLON" : "BİLEŞEN"
  return `GÖREV: Aşağıdaki ${tur} projeme entegre et ve belirtilen görevi uygula.

DOSYA YOLU: ${absPath}
${baslik}: ${id} ${name}${category ? ` (${category})` : ""}

KULLANICI GÖREVİ: ${t}

KURALLAR:
1. DOSYA YOLU'ndaki kodu oku ve olduğu gibi kullan — isimleri ve export'ları değiştirme.
2. Bağımlılıkları kontrol et, eksikse kur: react-aria-components, class-variance-authority, lucide-react, tw-animate-css, sonner.
3. "@/" import alias'ı "src" klasörüne işaret etmeli; @/lib/utils içinde cn() olmalı (yoksa ekle).
4. Tailwind v4 + shadcn tema değişkenleri (index.css) hazır olduğunu varsay; yoksa shadcn init ile kur.
5. Uygulamayı <Rac> sağlayıcısı ile sarmala (locale="tr-TR").
6. KULLANICI GÖREVİ'ni uygula ve yaptığın değişiklikleri açıkla.
7. Yalnızca çalışan, derlenebilir kod üret.`
}

function PromptDialog({
  absPath, name, id, category, kind, onClose,
}: { absPath: string; name: string; id: string; category: string; kind: "component" | "layout"; onClose: () => void }) {
  const [task, setTask] = useState("")
  const [prompt, setPrompt] = useState("")
  const [copied, setCopied] = useState(false)

  const copy = async (txt: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(txt)
      else {
        const ta = document.createElement("textarea")
        ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"
        document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove()
      }
      setCopied(true); setTimeout(() => setCopied(false), 1600)
    } catch { setCopied(true); setTimeout(() => setCopied(false), 1600) }
  }

  const generate = () => {
    const p = buildPrompt(absPath, name, id, category, kind, task)
    setPrompt(p)
    copy(p)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="flex max-h-[85vh] w-full max-w-xl flex-col rounded-xl border border-black/40 bg-background shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/30 bg-blue-600 px-4 py-2 text-white">
          <div>
            <h3 className="text-sm font-bold">✨ LLM Entegrasyon İstemi</h3>
            <Text className="text-[11px] text-blue-100">{id} {name} · {absPath}</Text>
          </div>
          <Button variant="outline" size="sm" onClick={onClose} className="border-black/40 bg-white/10 text-white hover:bg-white/20">✕</Button>
        </div>
        <div className="space-y-2 p-4">
          <label className="block">
            <span className="mb-1 block text-[11px] font-medium">Kullanıcı Görevi (LLM'e söyleyeceğiniz şey)</span>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={3}
              placeholder="örn. Bu butonu ana sayfadaki navbara ekle, koyu tema uyumlu yap"
              className="w-full resize-none rounded border border-black/40 bg-background p-2 text-xs outline-none focus:border-black"
            />
          </label>
          <div className="flex items-center justify-between">
            <Text className="text-[11px] text-muted-foreground">Prompt otomatik kopyalanır — direkt LLM'e yapıştırın.</Text>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onClose}>Vazgeç</Button>
              <Button size="sm" onClick={generate}>⚡ Üret & Kopyala</Button>
            </div>
          </div>
          {prompt && (
            <div>
              <textarea readOnly value={prompt} spellCheck={false}
                className="h-52 w-full resize-none rounded border border-black/30 bg-foreground/[.03] p-2 font-mono text-[11px] leading-relaxed outline-none" />
              <div className="mt-1 flex items-center justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => copy(prompt)}>{copied ? "✓ Kopyalandı" : "📋 İstemi Kopyala"}</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------- Yeni bileşen dialogu ---------- */
function NewComponentDialog({
  cats, nextId, onClose, onCreated,
}: { cats: string[]; nextId: string; onClose: () => void; onCreated: () => void }) {
  const [name, setName] = useState("")
  const [cat, setCat] = useState("Genel")
  const [newCat, setNewCat] = useState("")
  const [num, setNum] = useState(nextId)
  const [status, setStatus] = useState("")
  const [busy, setBusy] = useState(false)

  const finalCat = cat === "__yeni__" ? newCat : cat

  const create = async () => {
    if (!name || !finalCat.trim()) { setStatus("Ad ve kategori gerekli"); return }
    setBusy(true); setStatus("")
    try {
      const r = await fetch("/api/create-component", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category: finalCat, num: Number(num) || 0 }),
      })
      const j = await r.json()
      if (j.ok) {
        setStatus(`✓ ${j.id} ${name} oluşturuldu (${j.category})`)
        setTimeout(onCreated, 700)
      } else {
        setStatus("✗ " + (j.error || "hata"))
      }
    } catch (e) { setStatus("✗ Sunucuya ulaşılamadı: " + String(e)) }
    setBusy(false)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-xl border border-black/40 bg-background p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-sm font-bold">➕ Yeni Bileşen</h3>
        <Text className="mb-3 text-[11px] text-muted-foreground">Şablon dosya oluşturulur; galeri + veri tabanına otomatik eklenir.</Text>

        <label className="mb-2 block">
          <span className="mb-1 block text-[11px] font-medium">Bileşen Adı (PascalCase)</span>
          <input
            value={name} onChange={(e) => setName(e.target.value)}
            placeholder="örn: HeroBanner"
            className="h-8 w-full rounded border border-black/40 bg-background px-2 text-xs outline-none focus:border-black"
          />
        </label>

        <label className="mb-2 block">
          <span className="mb-1 block text-[11px] font-medium">Kategori</span>
          <select
            value={cat} onChange={(e) => setCat(e.target.value)}
            className="h-8 w-full rounded border border-black/40 bg-background px-1 text-xs outline-none"
          >
            {cats.map((c) => <option key={c} value={c}>{c}</option>)}
            <option value="__yeni__">➕ Yeni kategori…</option>
          </select>
        </label>

        {cat === "__yeni__" && (
          <label className="mb-2 block">
            <span className="mb-1 block text-[11px] font-medium">Yeni Kategori Adı</span>
            <input
              value={newCat} onChange={(e) => setNewCat(e.target.value)}
              placeholder="örn: Özel Bileşenler"
              className="h-8 w-full rounded border border-black/40 bg-background px-2 text-xs outline-none focus:border-black"
            />
          </label>
        )}

        <label className="mb-3 block">
          <span className="mb-1 block text-[11px] font-medium">Numara <span className="text-muted-foreground">(otomatik: {nextId}, dilerseniz değiştirin)</span></span>
          <input
            value={num} onChange={(e) => setNum(e.target.value.replace(/[^0-9]/g, ""))}
            className="h-8 w-20 rounded border border-black/40 bg-background px-2 font-mono text-xs outline-none focus:border-black"
          />
        </label>

        <Text className="mb-2 min-h-4 text-[11px]">{status}</Text>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onClose}>Vazgeç</Button>
          <Button size="sm" onClick={create} isDisabled={busy}>{busy ? "Oluşturuluyor…" : "Oluştur"}</Button>
        </div>
      </div>
    </div>
  )
}

/* ========== DÜZENLEME MODALI (orijinal + özelleştirilmiş iki alan) ========== */
function EditorModal({
  title, subtitle, file, dir, initialCode, preview, absPath, category, kind, onClose, onSaved,
}: {
  title: string; subtitle: string; file: string; dir: "ui" | "layouts"
  initialCode: string; preview: ReactNode
  absPath: string; category: string; kind: "component" | "layout"
  onClose: () => void; onSaved: () => void
}) {
  const [promptOpen, setPromptOpen] = useState(false)
  const [code, setCode] = useState(initialCode)
  const [style, setStyle] = useState<StyleState>(DEF_STYLE)
  const [status, setStatus] = useState("")
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)

  const compName = (title.match(/\d+ — (.+)/) || [])[1] || title
  const compId = (title.match(/^(\d+)/) || [])[1] || ""

  const [codeMode, setCodeMode] = useState<"tam" | "kisa">("tam")
  const [branchIndex, setBranchIndex] = useState<number>(() => COMPONENT_META[compId]?.preferredTarget ?? 0)
  const shortCode = useMemo(() => buildCustomCode(compName, compId, style), [compName, compId, style])
  const info = useMemo(() => findRootInfo(code), [code])
  const styleAttr = useMemo(
    () => ` style={{\n${STYLE_KEYS.map(([sk, jsKey]) => `    ${jsKey}: "${style[sk]}"`).join(",\n")}\n  }}`,
    [style]
  )
  const targetIndex = Math.min(branchIndex, Math.max(0, info.branches.length - 1))
  const fullCode = useMemo(() => {
    if (!info.found) return null
    return injectStyleAt(code, info.branches[targetIndex], styleAttr)
  }, [code, info, targetIndex, styleAttr])
  const customCode = codeMode === "tam" ? (fullCode ?? shortCode) : shortCode

  const save = async () => {
    setSaving(true); setStatus("")
    try {
      const r = await fetch("/api/save-component", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file, code, dir }),
      })
      const j = await r.json()
      if (j.ok) { setStatus("✓ Kaynak kodu kaydedildi — HMR ile güncellendi"); onSaved() }
      else setStatus("✗ Hata: " + (j.error || "bilinmeyen"))
    } catch (e) { setStatus("✗ Sunucuya ulaşılamadı: " + String(e)) }
    setSaving(false)
  }

  const rebuild = async () => {
    setStatus("Veri tabanı yenileniyor…")
    try {
      const r = await fetch("/api/rebuild-registry", { method: "POST" })
      const j = await r.json()
      setStatus(j.ok ? "✓ Veri tabanı yenilendi" : "✗ " + (j.err || "hata"))
      onSaved()
    } catch { setStatus("✗ Yenilenemedi") }
  }

  const copyText = async (txt: string, msg: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(txt)
      else {
        const ta = document.createElement("textarea")
        ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"
        document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove()
      }
      setStatus(msg); setCopied(true); setTimeout(() => setCopied(false), 1600)
    } catch { setStatus("Kopyalanamadı") }
  }
  const copy = () => copyText(customCode, "✓ Özelleştirilmiş kod kopyalandı")
  const copyPath = () => copyText(absPath, "✓ Dosya yolu kopyalandı: " + absPath)

  const previewStyle = {
    borderColor: style.borderColor,
    borderWidth: style.borderWidth,
    borderRadius: style.borderRadius,
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    color: style.color,
    backgroundColor: style.backgroundColor,
    padding: style.padding,
    width: style.width === "auto" ? "auto" : style.width,
    textAlign: style.textAlign as "left" | "center" | "right",
    maxWidth: "100%",
  }

  return (
    <div className="fixed inset-3 z-50 flex flex-col overflow-hidden rounded-xl border border-black/40 bg-background shadow-2xl">
      {/* Üst bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-black/30 bg-blue-600 px-4 py-2.5 text-white">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold">{title}</h3>
          <Text className="truncate text-[11px] text-blue-100">{subtitle} · {file}</Text>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="outline" size="sm" onClick={rebuild} className="border-black/40 bg-white/10 text-white hover:bg-white/20" aria-label="registry.json + registry.db yeniden üretilir">🔄 DB Yenile</Button>
          <Button variant="outline" size="sm" onClick={onClose} className="border-black/40 bg-white/10 text-white hover:bg-white/20">✕</Button>
        </div>
      </div>

      {/* İki alan */}
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 p-3">
        {/* ① ORİJİNAL: kaynak kod + orijinal önizleme */}
        <section className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-black/35">
          <div className="flex shrink-0 items-center justify-between border-b border-black/20 bg-muted/50 px-3 py-1.5">
            <span className="text-[11px] font-bold">① ORİJİNAL (KAYNAK KOD)</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => { setCode(initialCode); setStatus("Kaynak kod varsayılanına dönüldü") }}
                className="rounded border border-black/30 px-2 py-0.5 text-[10px] hover:bg-muted"
                title="Kaynak kodu dosyadaki son haline sıfırlar"
              >↺ Kaynağı Sıfırla</button>
              <Button size="sm" className="h-6 px-2 text-[11px]" onClick={save} isDisabled={saving}>
                {saving ? "…" : "💾 Kaydet"}
              </Button>
            </div>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-2">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="min-h-0 resize-none border-r border-black/20 bg-foreground/[.03] p-3 font-mono text-[11px] leading-relaxed outline-none"
            />
            <div className="min-h-0 overflow-auto bg-muted/20 p-4">
              <ErrorBoundary>{preview}</ErrorBoundary>
            </div>
          </div>
        </section>

        {/* ② ÖZELLEŞTİRİLMİŞ: ayarlar + önizleme + özel kod */}
        <section className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-black/35">
          <div className="flex shrink-0 items-center justify-between border-b border-black/20 bg-muted/50 px-3 py-1.5">
            <span className="text-[11px] font-bold">② ÖZELLEŞTİRİLMİŞ</span>
            <button
              onClick={() => { setStyle(DEF_STYLE); setStatus("Ayarlar varsayılana döndürüldü") }}
              className="rounded border border-black/30 px-2 py-0.5 text-[10px] hover:bg-muted"
              title="Özelleştirme ayarlarını varsayılana döndürür"
            >↺ Varsayılana Dön</button>
          </div>
          {info.isConditional && info.branches.length > 1 && (
            <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 border-b border-black/20 bg-amber-50 px-3 py-1.5">
              <span className="shrink-0 text-[10px] font-bold text-amber-700">🎯 Style hedefi</span>
              <div className="flex flex-wrap gap-1">
                {info.branches.map((b, i) => (
                  <button
                    key={`${b.tag}-${i}`}
                    onClick={() => setBranchIndex(i)}
                    title={`${i + 1}. dal: <${b.tag}> — style bu köke gömülür`}
                    className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${targetIndex === i ? "bg-blue-600 font-semibold text-white" : "border border-black/25 bg-background text-muted-foreground hover:bg-muted"}`}
                  >
                    {i + 1}. &lt;{b.tag}&gt;
                  </button>
                ))}
              </div>
              <span className="ml-auto shrink-0 text-[10px] text-amber-600">seçilen dala gömülür</span>
            </div>
          )}
          <div className="grid min-h-0 flex-1 grid-cols-[230px_1fr]">
            <div className="min-h-0 overflow-y-auto border-r border-black/20">
              <SettingsPanel s={style} set={(pp) => setStyle((prev) => ({ ...prev, ...pp }))} />
            </div>
            <div className="min-h-0 overflow-auto bg-muted/20 p-4">
              <div style={previewStyle as React.CSSProperties} className="shrink-0">
                <ErrorBoundary>{preview}</ErrorBoundary>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col border-t border-black/20">
            <div className="flex items-center justify-between gap-2 px-2 py-1">
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">Özelleştirilmiş kod</span>
                <div className="flex shrink-0 rounded border border-black/25 p-0.5">
                  <button
                    onClick={() => setCodeMode("tam")}
                    title="Kaynak kod + gömülü style — kopyalayıp projenize birebir koyun"
                    className={`rounded px-1.5 py-0.5 text-[10px] ${codeMode === "tam" ? "bg-blue-600 font-semibold text-white" : "text-muted-foreground hover:bg-muted"}`}
                  >🧾 Tam Kod</button>
                  <button
                    onClick={() => setCodeMode("kisa")}
                    title="Kısa kullanım örneği — <Bileşen style={{...}}>İçerik</Bileşen>"
                    className={`rounded px-1.5 py-0.5 text-[10px] ${codeMode === "kisa" ? "bg-blue-600 font-semibold text-white" : "text-muted-foreground hover:bg-muted"}`}
                  >🪄 Kısa</button>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <Button size="sm" variant="outline" className="h-6 px-2 text-[10px] border-black/30" onClick={copyPath} aria-label="Dosyanın mutlak yolunu kopyalar — LLM'e direkt verin">📂 Path Kopyala</Button>
                <Button size="sm" variant="outline" className="h-6 px-2 text-[10px] border-black/30" onClick={() => setPromptOpen(true)} aria-label="LLM entegrasyon istemi oluşturur">✨ Prompt Oluştur</Button>
                <Button size="sm" className="h-6 px-2 text-[11px]" onClick={copy}>{copied ? "✓ Kopyalandı" : "📋 Kodu Kopyala"}</Button>
              </div>
            </div>
            <textarea
              value={customCode}
              readOnly
              spellCheck={false}
              className="h-36 resize-none border-t border-black/20 bg-foreground/[.03] p-3 font-mono text-[11px] leading-relaxed outline-none"
            />
            {codeMode === "tam" && (
              <div className={`px-2 py-1 text-[10px] ${!info.found || info.isConditional ? "text-amber-600" : "text-muted-foreground"}`}>
                {!info.found
                  ? "⚠ Bu dosya JSX render etmiyor (ör. icons/index) — kök element bulunamadı, kısa kullanım kodu gösteriliyor."
                  : info.isConditional
                    ? "🎯 Koşullu kök — style yalnızca seçilen dala gömülür (nested ternary orta dalları elle ekleyin)."
                    : "🧾 Tam kod: kaynak + özelleştirilmiş style kök elemente gömüldü — 📋 ile kopyalayın, projenize birebir koyun."}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Alt durum */}
      <div className="flex shrink-0 items-center justify-between border-t border-black/30 px-4 py-1.5">
        <Text className="min-w-0 truncate text-[11px]">{status || "① orijinali düzenle → 💾 · ② ayarlarla oyna → 🧾 Tam Kod (stil gömülü) → 📋 kopyala"}</Text>
      </div>

      {promptOpen && (
        <PromptDialog
          absPath={absPath}
          name={compName}
          id={compId}
          category={category}
          kind={kind}
          onClose={() => setPromptOpen(false)}
        />
      )}
    </div>
  )
}


/* ========== ANA UYGULAMA ========== */
export default function Studio() {
  const [registry, setRegistry] = useState<{ components: CompRecord[]; categories?: string[] } | null>(null)
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("Tümü")
  const [panelOpen, setPanelOpen] = useState(true)
  const [openCats, setOpenCats] = useState<Set<string>>(new Set())
  const [edit, setEdit] = useState<{ rec: CompRecord } | null>(null)
  const [newOpen, setNewOpen] = useState(false)
  const refresh = () => {
    fetch("/registry.json").then((r) => r.json()).then(setRegistry).catch(() => {})
    location.reload()
  }

  useEffect(() => {
    fetch("/registry.json").then((r) => r.json()).then(setRegistry).catch(() => setRegistry({ components: [] }))
  }, [])

  const term = q.toLowerCase().trim()

  const cats = useMemo(() => {
    if (!registry) return []
    const sabit = Array.isArray(registry.categories) ? registry.categories : []
    const mevcut = registry.components.map((c) => c.category)
    return Array.from(new Set([...sabit, ...mevcut]))
  }, [registry])

  const compsInCat = useMemo(() => {
    const m: Record<string, CompRecord[]> = {}
    if (!registry) return m
    for (const c of registry.components) {
      if (term && !(c.id.includes(term) || c.name.toLowerCase().includes(term))) continue
      ;(m[c.category] ||= []).push(c)
    }
    return m
  }, [registry, term])

  const filtered = useMemo(() => {
    if (!registry) return []
    return registry.components.filter(
      (c) =>
        (cat === "Tümü" || c.category === cat) &&
        (!term || c.id.includes(term) || c.name.toLowerCase().includes(term) || c.description.toLowerCase().includes(term))
    )
  }, [registry, q, cat])

  const toggleCat = (c: string) => {
    setOpenCats((prev) => {
      const next = new Set(prev)
      if (next.has(c)) next.delete(c)
      else next.add(c)
      return next
    })
  }

  if (!registry) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Text className="text-muted-foreground">Kayıt defteri yükleniyor…</Text>
      </div>
    )
  }

  const totalComps = registry.components.filter(
    (c) => !term || c.id.includes(term) || c.name.toLowerCase().includes(term)
  ).length

  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-background">
        {/* Üst bar */}
        <header className="flex shrink-0 items-center justify-between border-b border-black/30 bg-background px-4 py-2.5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPanelOpen((v) => !v)}
              className="flex size-8 items-center justify-center rounded-lg border border-black/40 text-sm transition-colors hover:bg-muted"
              title={panelOpen ? "Paneli kapat" : "Paneli aç"}
            >
              {panelOpen ? "◀" : "▶"}
            </button>
            <div>
              <h1 className="text-[15px] font-bold leading-tight">🧩 Tasarım Kütüphanesi Stüdyosu</h1>
              <Text className="text-[11px] leading-tight text-muted-foreground">
                {registry.components.length} bileşen · tıkla → düzenle → kaydet
              </Text>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-[11px] text-muted-foreground sm:flex">
            <span>💾 Kaydet → HMR</span><span>·</span><span>🔄 DB Yenile</span>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          {/* SOL PANEL */}
          {panelOpen && (
            <aside className="flex w-60 shrink-0 flex-col border-r border-black/30 bg-background min-h-0">
              <div className="shrink-0 space-y-2 border-b border-black/30 p-2.5">
                <SearchField aria-label="Ara" value={q} onChange={setQ} placeholder="Ara: 008, buton, renk…" className="h-8 border-black/40 text-xs" />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-2">
                    <button
                      onClick={() => setCat("Tümü")}
                      className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs transition-colors ${cat === "Tümü" ? "bg-blue-600 font-semibold text-white" : "hover:bg-muted"}`}
                    >
                      <span>Tümü</span>
                      <span className={`font-mono text-[10px] ${cat === "Tümü" ? "text-blue-100" : "text-muted-foreground"}`}>{totalComps}</span>
                    </button>
                    {cats.map((c) => {
                      const items = compsInCat[c] || []
                      const active = cat === c
                      return (
                        <div key={c} className="mt-0.5">
                          <button
                            onClick={() => { setCat(c); toggleCat(c) }}
                            className={`flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-xs transition-colors ${active ? "bg-blue-600 font-semibold text-white" : "hover:bg-muted"}`}
                          >
                            <span className={`inline-block text-[9px] transition-transform ${openCats.has(c) ? "rotate-90" : ""}`}>▶</span>
                            <span className="flex-1 truncate">{c}</span>
                            <span className={`font-mono text-[10px] ${active ? "text-blue-100" : "text-muted-foreground"}`}>{items.length}</span>
                          </button>
                          {openCats.has(c) && (
                            <div className="mt-0.5 ml-4 space-y-0.5 border-l border-black/25 pl-2">
                              {items.length === 0 ? (
                                <div className="px-1.5 py-1 text-[10px] italic text-muted-foreground/60">henüz bileşen yok</div>
                              ) : (
                              items.map((comp) => (
                                <button
                                  key={comp.id}
                                  onClick={() => setEdit({ rec: comp })}
                                  className="flex w-full items-center gap-1.5 rounded px-1.5 py-1 text-left text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                >
                                  <span className="font-mono text-[9px] text-muted-foreground/70">{comp.id}</span>
                                  <span className="truncate">{comp.name}</span>
                                </button>
                              )))}
                            </div>
                          )}
                        </div>
                      )
                    })}
              </div>

              <div className="shrink-0 border-t border-black/30 p-2">
                <Button size="sm" variant="outline" className="w-full border-black/40" onClick={() => setNewOpen(true)}>
                  ➕ Yeni Bileşen
                </Button>
                <div className="mt-1.5 text-[10px] leading-relaxed text-muted-foreground">
                  🔍 Arama: numara / ad · 📂 Kategoriye tıkla → filtre + açılır
                </div>
              </div>
            </aside>
          )}

          {/* ANA ALAN */}
          <main className="min-h-0 flex-1 overflow-y-auto p-4">
            {filtered.length ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {filtered.map((c) => {
                    const sample = SAMPLES[c.id]
                    if (!sample) return null
                    return (
                      <div
                        key={c.id}
                        className="group cursor-pointer overflow-hidden rounded-lg border-thin-black bg-background transition-all duration-150 hover:border-black hover:shadow-xl hover:scale-[1.03]"
                        onClick={() => setEdit({ rec: c })}
                        title={`${c.id} ${c.name} — düzenlemek için tıkla`}
                      >
                        {/* Mavi başlık: üstte */}
                        <div className="flex items-center justify-between gap-1 bg-blue-600 px-2 py-1 text-white">
                          <span className="truncate text-[11px] font-semibold">{c.name}</span>
                          <span className="shrink-0 font-mono text-[9px] text-blue-200">{c.id}</span>
                        </div>
                        <div className="flex h-24 items-start justify-center overflow-hidden bg-muted/20 p-3 transition-transform duration-150 group-hover:scale-105">
                          <ErrorBoundary>{sample}</ErrorBoundary>
                        </div>
                        <div className="border-t border-black/20 px-2 py-1 text-[9px] text-muted-foreground">
                          {c.category}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <Text className="py-16 text-center text-sm text-muted-foreground">Sonuç yok</Text>
              )}
          </main>
        </div>
      </div>

      {/* Yeni bileşen dialogu */}
      {newOpen && (
        <NewComponentDialog
          cats={cats}
          nextId={String(Math.max(0, ...registry.components.map((c) => Number(c.id) || 0)) + 1).padStart(3, "0")}
          onClose={() => setNewOpen(false)}
          onCreated={refresh}
        />
      )}

      {/* Düzenleme modalı */}
      {edit && (
        <EditorModal
          title={`${edit.rec.id} — ${edit.rec.name}`}
          subtitle={`${edit.rec.category} · LLM referansı: "${edit.rec.id} ${edit.rec.name}"`}
          file={edit.rec.file}
          dir="ui"
          initialCode={edit.rec.code}
          preview={SAMPLES[edit.rec.id]}
          absPath={edit.rec.path || ""}
          category={edit.rec.category}
          kind="component"
          onClose={() => setEdit(null)}
          onSaved={() => {}}
        />
      )}
    </>
  )
}
