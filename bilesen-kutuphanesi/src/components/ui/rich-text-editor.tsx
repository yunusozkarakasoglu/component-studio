/**
 * RichTextEditor
 * Taiga wiki temasında WYSIWYG zengin metin editörü — saf React, bağımlılıksız.
 * contentEditable + document.execCommand altyapısı; harici WYSIWYG kütüphanesi YOK.
 * Tema, Taiga wiki editöründen (CKEditor 5) birebir alındı:
 * toolbar #fafafa · aktif buton #198cf0 · başlık #2e3440 · metin #4c566a
 * link #008aa8 · alıntı #83eede · inline kod #d8dee9 · tablo #e5e9f0/#d8dee9
 *
 * Özellikler: Başlık (P/H1/H2/H3) · B/I/S · link (Ctrl+K) · todo/bullet/numaralı
 * liste · hizalama · görsel (URL + dosya) · alıntı · tablo (boyut ızgarası +
 * satır/sütun menüsü) · kod bloğu (dil seçimi) · format temizle · yatay çizgi ·
 * undo/redo.
 *
 *   <RichTextEditor value={html} onChange={setHtml} placeholder="Empty space is so boring..." />
 *
 * Not: Tek dosyadır — tema CSS'i modül yüklendiğinde <style> olarak enjekte edilir.
 * @id 2083
 * @category Özel Komponentler
 * @subcategory RichTextEditor
 * @source ozel
 * @description Taiga wiki temasında WYSIWYG zengin metin editörü — saf React, bağımlılıksız (contentEditable + execCommand).
 * @tags wysiwyg, zengin, metin, editör, editor, richtext, taiga, wiki, html
 */
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"

/* ------------------------------------------------------------------ */
/* Gömülü tema CSS (Taiga) — modül yüklenince bir kez enjekte edilir    */
/* ------------------------------------------------------------------ */

const RTE_CSS = `
.rte{position:relative;font-family:Ubuntu-Regular,Arial,Helvetica,sans-serif;color:#000}
.rte-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:2px;padding:4px 6px;background:#fafafa;border:1px solid #c4c4c4;border-bottom:none;border-radius:2px 2px 0 0}
.rte-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:30px;min-height:30px;padding:2.34px 7.8px;background:transparent;border:1px solid transparent;border-radius:2px;color:#333;font-family:inherit;font-size:13px;line-height:1;cursor:pointer;white-space:nowrap}
.rte-btn:hover,.rte-btn.rte-open{background:#ebebeb}
.rte-btn:focus-visible{outline:none;border-color:#bcbcbc;box-shadow:0 0 0 1px #bcbcbc}
.rte-btn.rte-on{background:#198cf0;color:#fff}
.rte-btn svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.rte-btn.rte-on svg{stroke:#fff}
.rte-btn:disabled{opacity:.5;cursor:default}
.rte-chevron{display:inline-flex;align-items:center;opacity:.8}
.rte-chevron svg{width:10px;height:10px;fill:currentColor;stroke:none}
.rte-glyph{font-size:14px;line-height:1}
.rte-glyph-b{font-weight:800}
.rte-glyph-i{font-family:Georgia,"Times New Roman",serif;font-style:italic}
.rte-glyph-s{text-decoration:line-through}
.rte-glyph-rf{font-size:12px;font-weight:700;text-decoration:line-through}
.rte-sep{width:1px;height:20px;margin:0 4px;background:#c4c4c4}
.rte-heading-label{min-width:64px;text-align:left}
.rte-dd-wrap{position:relative;display:inline-flex}
.rte-pop{position:absolute;top:calc(100% + 4px);left:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:1px solid #c4c4c4;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.15)}
.rte-pop-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;background:none;border:0;border-radius:2px;color:#333;font-family:inherit;font-size:13px;text-align:left;cursor:pointer}
.rte-pop-item:hover{background:#ebebeb}
.rte-pop-item.rte-on{background:#198cf0;color:#fff}
.rte-pop-item svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.rte-pop-check{display:inline-flex;width:16px;flex-shrink:0}
.rte-menu-label{flex:1}
.rte-heading-sample{display:block}
.rte-hs-p{font-size:13px}
.rte-hs-h1{font-size:21px;font-weight:600;color:#2e3440}
.rte-hs-h2{font-size:17px;font-weight:600;color:#2e3440}
.rte-hs-h3{font-size:14px;font-weight:600;color:#2e3440}
.rte-pop-item.rte-on .rte-hs-h1,.rte-pop-item.rte-on .rte-hs-h2,.rte-pop-item.rte-on .rte-hs-h3{color:#fff}
.rte-pop-input-row{display:flex;gap:6px;padding:4px}
.rte-input{flex:1;min-width:0;padding:6px 8px;border:1px solid #c4c4c4;border-radius:2px;font-family:inherit;font-size:13px;color:#333;background:#fff}
.rte-input:focus{outline:none;border-color:#4c566a}
.rte-btn-primary{background:#198cf0;border-color:#198cf0;color:#fff}
.rte-btn-primary:hover{background:#166fd1;border-color:#166fd1}
.rte-btn-upload{width:100%;justify-content:center;padding:10px;border:1px dashed #c4c4c4;border-radius:2px}
.rte-btn-upload:hover{background:#f5f5f5}
.rte-tabs{display:flex;gap:2px;padding:2px 4px;border-bottom:1px solid #e5e5e5;margin-bottom:4px}
.rte-tab{flex:1;padding:6px 8px;background:none;border:0;border-bottom:2px solid transparent;color:#70728f;font-family:inherit;font-size:13px;cursor:pointer}
.rte-tab:hover{color:#333}
.rte-tab.rte-on{color:#198cf0;border-bottom-color:#198cf0}
.rte-grid{display:grid;grid-template-columns:repeat(10,14px);gap:2px;padding:6px}
.rte-grid-cell{width:14px;height:14px;border:1px solid #c4c4c4;border-radius:1px;cursor:pointer}
.rte-grid-cell:hover,.rte-grid-cell.rte-on{background:#198cf0;border-color:#198cf0}
.rte-grid-label{padding:0 6px 6px;color:#70728f;font-size:12px;text-align:center}
.rte-lang-list{max-height:260px;overflow-y:auto}
.rte-table-menu{position:absolute;z-index:50;display:flex;gap:2px;padding:2px;background:#fafafa;border:1px solid #c4c4c4;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.15)}
.rte-btn-sm{min-width:24px;min-height:24px;padding:3px}
.rte-btn-sm svg{width:13px;height:13px}
.rte-editor-wrap{position:relative;background:#fff;border:1px solid #c4c4c4;border-radius:0 0 2px 2px}
.rte-content{min-height:12rem;padding:12px 12px 48px;outline:none;overflow-y:auto;font-size:16px;line-height:1.5;word-break:break-word}
.rte-editor-wrap:focus-within{border-color:#4c566a}
.rte-placeholder{position:absolute;top:12px;left:12px;right:12px;color:#a9aabc;font-style:italic;font-size:16px;pointer-events:none;user-select:none}
.rte-content h1{font-size:2.1rem}
.rte-content h2{font-size:1.7rem}
.rte-content h3{font-size:1.4rem}
.rte-content h4{font-size:1.1rem}
.rte-content h1,.rte-content h2,.rte-content h3,.rte-content h4,.rte-content h5,.rte-content h6{color:#2e3440;font-weight:600;margin:0 0 16px;line-height:1.3}
.rte-content p{font-size:.875rem;color:#4c566a;margin:0 0 12px}
.rte-content strong{color:#2e3440}
.rte-content a,.rte-content a[href]{color:#008aa8;font-weight:600}
.rte-content li{color:#4c566a;margin-bottom:.5rem;font-size:.875rem}
.rte-content ol,.rte-content ul{margin-bottom:1rem;padding:0 0 0 1rem}
.rte-content ul{list-style-type:disc}
.rte-content ul ul{list-style-type:circle}
.rte-content blockquote{border-left:5px solid #83eede;color:#70728f;margin:40px 0;padding:0 1.25rem}
.rte-content blockquote p:last-child{margin-bottom:0}
.rte-content code{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;overflow-wrap:break-word;white-space:pre-wrap}
.rte-content p>code,.rte-content li>code,.rte-content td>code,.rte-content h1>code,.rte-content h2>code,.rte-content h3>code,.rte-content blockquote>p>code{background-color:#d8dee9;border-radius:6px;padding:.2rem .4rem}
.rte-content pre{position:relative;margin:0 0 20px;padding:1em;background:#2d2d2d;color:#f8f8f2;border-radius:4px;overflow-x:auto}
.rte-content pre code{display:block;background:none;padding:0;color:inherit;white-space:pre;font-size:13px;line-height:1.5}
.rte-content pre[data-language]::before{content:attr(data-language);position:absolute;top:0;right:0;padding:4px 10px;border-radius:0 4px 0 4px;background:#3d3d3d;color:#a9aabc;font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:11px;text-transform:uppercase;letter-spacing:.5px}
.rte-content img{max-width:100%;height:auto}
.rte-content hr{background-color:#83eede;border:0;height:2px;margin:8px 0 24px}
.rte-content table{border-collapse:collapse;border:1px solid #d8dee9}
.rte-content table td{font-size:.875rem;color:#70728f}
.rte-content table th{background-color:#e5e9f0;color:#2e3440;font-weight:400;text-align:left}
.rte-content table td,.rte-content table th{border:1px solid #d8dee9;min-width:2em;padding:.4em}
.rte-content ul[data-type="todo"]{list-style:none;padding-left:0}
.rte-content ul[data-type="todo"]>li{display:flex;align-items:center;margin-bottom:.5rem}
.rte-content ul[data-type="todo"] input[type="checkbox"]{margin-right:.5rem;flex-shrink:0}
`

let rteInjected = false
function ensureRteStyles() {
  if (rteInjected || typeof document === "undefined") return;
  rteInjected = true
  const el = document.createElement("style")
  el.setAttribute("data-rte-theme", "taiga")
  el.textContent = RTE_CSS
  document.head.appendChild(el)
}

/* ------------------------------------------------------------------ */
/* Sabitler                                                            */
/* ------------------------------------------------------------------ */

const HEADINGS = [
  { value: "p", label: "Paragraph" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
]

const ALIGNMENTS = [
  { value: "left", label: "Align left" },
  { value: "center", label: "Align center" },
  { value: "right", label: "Align right" },
  { value: "justify", label: "Justify" },
]

const LANGUAGES: [string, string][] = [
  ["plaintext", "Plaintext"],
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript"],
  ["jsx", "JSX"],
  ["html", "HTML / XML"],
  ["css", "CSS"],
  ["scss", "SCSS"],
  ["python", "Python"],
  ["java", "Java"],
  ["c", "C"],
  ["cpp", "C++"],
  ["csharp", "C#"],
  ["go", "Go"],
  ["rust", "Rust"],
  ["kotlin", "Kotlin"],
  ["swift", "Swift"],
  ["php", "PHP"],
  ["ruby", "Ruby"],
  ["sql", "SQL"],
  ["json", "JSON"],
  ["yaml", "YAML"],
  ["bash", "Bash / Shell"],
  ["powershell", "PowerShell"],
  ["markdown", "Markdown"],
  ["diff", "Diff"],
  ["dockerfile", "Dockerfile"],
  ["lua", "Lua"],
  ["r", "R"],
  ["matlab", "MATLAB"],
  ["perl", "Perl"],
  ["haskell", "Haskell"],
  ["scala", "Scala"],
  ["groovy", "Groovy"],
  ["dart", "Dart"],
  ["julia", "Julia"],
  ["erlang", "Erlang"],
  ["elixir", "Elixir"],
  ["clojure", "Clojure"],
  ["makefile", "Makefile"],
  ["ini", "INI / TOML"],
  ["nginx", "Nginx"],
  ["graphql", "GraphQL"],
]

/* ------------------------------------------------------------------ */
/* İkonlar (inline SVG)                                                */
/* ------------------------------------------------------------------ */

const I = {
  bold: <b className="rte-glyph rte-glyph-b">B</b>,
  italic: <i className="rte-glyph rte-glyph-i">I</i>,
  strike: <s className="rte-glyph rte-glyph-s">S</s>,
  removeFormat: <span className="rte-glyph rte-glyph-rf">Tx</span>,
  link: (
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  todo: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  bulletList: (
    <svg viewBox="0 0 24 24">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  numberedList: (
    <svg viewBox="0 0 24 24">
      <line x1="10" y1="6" x2="21" y2="6" />
      <line x1="10" y1="12" x2="21" y2="12" />
      <line x1="10" y1="18" x2="21" y2="18" />
      <text x="2" y="9" fontSize="9" fontWeight="700">1</text>
      <text x="2" y="15" fontSize="9" fontWeight="700">2</text>
      <text x="2" y="21" fontSize="9" fontWeight="700">3</text>
    </svg>
  ),
  alignLeft: (
    <svg viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="15" y2="12" />
      <line x1="3" y1="18" x2="18" y2="18" />
    </svg>
  ),
  alignCenter: (
    <svg viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  alignRight: (
    <svg viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="9" y1="12" x2="21" y2="12" />
      <line x1="6" y1="18" x2="21" y2="18" />
    </svg>
  ),
  alignJustify: (
    <svg viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  ),
  quote: (
    <svg viewBox="0 0 24 24">
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
    </svg>
  ),
  table: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24">
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </svg>
  ),
  hr: (
    <svg viewBox="0 0 24 24">
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="3" />
    </svg>
  ),
  undo: (
    <svg viewBox="0 0 24 24">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  ),
  redo: (
    <svg viewBox="0 0 24 24">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 10 10">
      <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  arrowUp: (
    <svg viewBox="0 0 24 24">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  ),
  arrowDown: (
    <svg viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
}

/* ------------------------------------------------------------------ */
/* Yardımcılar                                                         */
/* ------------------------------------------------------------------ */

const isEditorNode = (node: Node | null | undefined, editor: HTMLElement | null) =>
  !!node && !!editor && (node === editor || editor.contains(node))

const closest = (node: Node | null | undefined, selector: string) => {
  const el = node && node.nodeType === 1 ? (node as Element) : node && node.parentElement
  return el ? el.closest(selector) : null
}

const escapeHtml = (s: string = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

/* ------------------------------------------------------------------ */
/* Props                                                               */
/* ------------------------------------------------------------------ */

export interface RichTextEditorProps {
  /** Kontrollü HTML içerik (opsiyonel — uncontrolled da çalışır) */
  value?: string
  /** Her düzenlemede (html) => void çağrılır */
  onChange?: (html: string) => void
  /** Boş içerik gösterimi (varsayılan: Taiga metni) */
  placeholder?: string
  /** Kök div'e eklenecek class */
  className?: string
}

/* ------------------------------------------------------------------ */
/* Bileşen                                                             */
/* ------------------------------------------------------------------ */

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Empty space is so boring... go on, be descriptive...",
  className = "",
}: RichTextEditorProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const savedRangeRef = useRef<Range | null>(null)
  const lastHtmlRef = useRef<string>("")
  const prevStatesRef = useRef("")

  const [focused, setFocused] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [heading, setHeading] = useState("p")
  const [linkUrl, setLinkUrl] = useState("https://")
  const [linkMode, setLinkMode] = useState<"create" | "edit">("create")
  const [imageUrl, setImageUrl] = useState("https://")
  const [imageTab, setImageTab] = useState<"url" | "upload">("url")
  const [tableHover, setTableHover] = useState({ r: 0, c: 0 })
  const [tableMenuPos, setTableMenuPos] = useState<{ left: number; top: number } | null>(null)
  const [states, setStates] = useState<Record<string, boolean>>({})

  /* ---------------- temel yardımcılar ---------------- */

  const notifyChange = useCallback(() => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML
    lastHtmlRef.current = html
    setIsEmpty(!html || html === "<br>" || html === "<br>\n")
    if (onChange) onChange(html)
  }, [onChange])

  const saveRange = useCallback(() => {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0 && isEditorNode(sel.anchorNode, editorRef.current)) {
      savedRangeRef.current = sel.getRangeAt(0).cloneRange()
    }
  }, [])

  const restoreRange = useCallback(() => {
    if (!savedRangeRef.current || !editorRef.current) return;
    try {
      const sel = window.getSelection()
      sel && sel.removeAllRanges()
      sel && sel.addRange(savedRangeRef.current)
    } catch {
      /* noop */
    }
  }, [])

  /** Komut: odak + seçimi geri getir + execCommand + onChange + durum tazele */
  const exec = useCallback(
    (command: string, arg?: string) => {
      editorRef.current && editorRef.current.focus()
      restoreRange()
      try {
        document.execCommand(command, false, arg)
      } catch {
        /* noop */
      }
      notifyChange()
      refreshStates()
    },
    [restoreRange, notifyChange]
  )

  /* ---------------- durum tazeleme ---------------- */

  const refreshStates = useCallback(() => {
    const qs = (c: string) => {
      try {
        return !!document.queryCommandState(c)
      } catch {
        return false
      }
    }
    const qv = (c: string) => {
      try {
        return String(document.queryCommandValue(c) || "")
          .toLowerCase()
          .replace(/[<>]/g, "")
      } catch {
        return ""
      }
    }

    const next: Record<string, boolean> = {
      bold: qs("bold"),
      italic: qs("italic"),
      strike: qs("strikeThrough"),
      ul: qs("insertUnorderedList"),
      ol: qs("insertOrderedList"),
      jl: qs("justifyLeft"),
      jc: qs("justifyCenter"),
      jr: qs("justifyRight"),
      jf: qs("justifyFull"),
    }
    const key = JSON.stringify(next)
    if (key !== prevStatesRef.current) {
      prevStatesRef.current = key
      setStates(next)
    }

    const block = qv("formatBlock")
    setHeading(HEADINGS.some((h) => h.value === block) ? block : block === "" ? heading : "p")

    /* tablo içinde mi? → bağlam menüsü konumu */
    const sel = window.getSelection()
    const anchor = sel && sel.anchorNode
    if (anchor && isEditorNode(anchor, editorRef.current)) {
      const td = closest(anchor, "td,th")
      if (td && tableMenuPos === null) {
        const rect = (td.closest("table") as HTMLElement).getBoundingClientRect()
        const rootRect = rootRef.current!.getBoundingClientRect()
        setTableMenuPos({
          left: Math.max(0, rect.left - rootRect.left),
          top: Math.max(0, rect.top - rootRect.top - 34),
        })
      } else if (!td && tableMenuPos !== null) {
        setTableMenuPos(null)
      }
    }
  }, [heading, tableMenuPos])

  /* ---------------- olay dinleyicileri ---------------- */

  useEffect(() => {
    ensureRteStyles()
    const onSelChange = () => {
      const sel = window.getSelection()
      const inEditor = sel && sel.anchorNode && isEditorNode(sel.anchorNode, editorRef.current)
      if (inEditor) {
        savedRangeRef.current = sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null
        refreshStates()
      }
    }
    const onDocMouseDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
        setTableMenuPos(null)
      }
    }
    const onDocKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("selectionchange", onSelChange)
    document.addEventListener("mousedown", onDocMouseDown)
    document.addEventListener("keydown", onDocKey)
    return () => {
      document.removeEventListener("selectionchange", onSelChange)
      document.removeEventListener("mousedown", onDocMouseDown)
      document.removeEventListener("keydown", onDocKey)
    }
  }, [refreshStates])

  /* dışarıdan gelen value değişince içeriği güncelle */
  useEffect(() => {
    if (
      editorRef.current &&
      typeof value === "string" &&
      value !== lastHtmlRef.current &&
      value !== editorRef.current.innerHTML
    ) {
      editorRef.current.innerHTML = value
      lastHtmlRef.current = value
      setIsEmpty(!value || value === "<br>")
    }
  }, [value])

  /* ---------------- menü ---------------- */

  const toggleMenu = (name: string) => {
    saveRange()
    if (name === "link") {
      const sel = window.getSelection()
      const a = closest(sel && sel.anchorNode, "a")
      if (a) {
        setLinkMode("edit")
        setLinkUrl(a.getAttribute("href") || "")
      } else {
        setLinkMode("create")
        setLinkUrl("https://")
      }
    }
    if (name === "image") {
      setImageTab("url")
      setImageUrl("https://")
    }
    setOpenMenu((cur) => (cur === name ? null : name))
  }

  const closeMenu = () => setOpenMenu(null)

  /* ---------------- format komutları ---------------- */

  const applyHeading = (tag: string) => {
    closeMenu()
    exec("formatBlock", tag === "p" ? "P" : tag.toUpperCase())
    setHeading(tag)
  }

  const alignTo = (v: string) => {
    closeMenu()
    exec("justify" + v.charAt(0).toUpperCase() + v.slice(1))
  }

  /* ---------------- link ---------------- */

  const applyLink = (e: React.FormEvent) => {
    e.preventDefault()
    let url = linkUrl.trim()
    if (!url) return;
    if (!/^[a-z]+:\/\//i.test(url) && !url.startsWith("mailto:")) {
      url = "https://" + url
    }
    restoreRange()
    const sel = window.getSelection()
    const hasText = sel && !sel.isCollapsed
    if (hasText) {
      exec("createLink", url)
    } else {
      exec("insertHTML", `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>&nbsp;`)
    }
    setOpenMenu(null)
    setLinkUrl("https://")
  }

  const removeLink = () => {
    restoreRange()
    exec("unlink")
    setOpenMenu(null)
    setLinkUrl("https://")
  }

  /* ---------------- todo listesi ---------------- */

  const toggleTodo = () => {
    saveRange()
    restoreRange()
    const sel = window.getSelection()
    const li = closest(sel && sel.anchorNode, "li")
    const ul = li && li.parentElement
    if (ul && ul.getAttribute("data-type") === "todo") {
      const html = ul.outerHTML
        .replace(/data-type="todo"/g, "")
        .replace(/<input[^>]*\/?>/gi, "")
        .trim()
      ul.outerHTML = html
      notifyChange()
      refreshStates()
    } else {
      exec(
        "insertHTML",
        '<ul data-type="todo"><li><input type="checkbox" /><span>&#8203;</span></li></ul>'
      )
      const inserted = editorRef.current && editorRef.current.querySelector('ul[data-type="todo"] li:last-of-type span')
      if (inserted) {
        const r = document.createRange()
        r.setStart(inserted, 0)
        r.collapse(true)
        const s = window.getSelection()
        s && s.removeAllRanges()
        s && s.addRange(r)
      }
      notifyChange()
      refreshStates()
    }
  }

  /* ---------------- görsel ---------------- */

  const insertImageByUrl = (e: React.FormEvent) => {
    e.preventDefault()
    const url = imageUrl.trim()
    if (!url) return
    restoreRange()
    exec("insertImage", url)
    setOpenMenu(null)
    setImageUrl("https://")
  }

  const onFileChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      alert("Görsel 3 MB'tan büyük olamaz.")
      e.target.value = ""
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      restoreRange()
      exec("insertImage", reader.result as string)
      setOpenMenu(null)
      e.target.value = ""
    }
    reader.readAsDataURL(file)
  }

  /* ---------------- tablo ---------------- */

  const insertTable = (rows: number, cols: number) => {
    closeMenu()
    let html = "<table><tbody>"
    for (let r = 0; r < rows; r++) {
      html += "<tr>"
      for (let c = 0; c < cols; c++) html += "<td><br /></td>"
      html += "</tr>"
    }
    html += "</tbody></table><p><br /></p>"
    exec("insertHTML", html)
  }

  const tableAction = (action: string) => {
    restoreRange()
    const sel = window.getSelection()
    const td = closest(sel && sel.anchorNode, "td,th") as HTMLTableCellElement | null
    if (!td) return;
    const tr = td.closest("tr")
    const table = td.closest("table")
    if (!tr || !table) return;
    const tbody = table.querySelector("tbody") as HTMLTableSectionElement | null || table

    const blankCell = (tag: string) => {
      const c = document.createElement(tag)
      c.innerHTML = "<br />"
      return c
    }

    switch (action) {
      case "addRowAbove": {
        const row = tr.cloneNode(true) as HTMLTableRowElement
        Array.from(row.cells).forEach((c) => (c.innerHTML = "<br />"))
        tr.before(row)
        break
      }
      case "addRowBelow": {
        const row = tr.cloneNode(true) as HTMLTableRowElement
        Array.from(row.cells).forEach((c) => (c.innerHTML = "<br />"))
        tr.after(row)
        break
      }
      case "addColLeft": {
        Array.from(tbody.rows).forEach((r) => {
          const c = r.cells[td.cellIndex]
          if (c) c.before(blankCell(c.tagName))
        })
        break
      }
      case "addColRight": {
        Array.from(tbody.rows).forEach((r) => {
          const c = r.cells[td.cellIndex]
          if (c) c.after(blankCell(c.tagName))
        })
        break
      }
      case "delRow": {
        tr.remove()
        break
      }
      case "delCol": {
        Array.from(tbody.rows).forEach((r) => {
          const c = r.cells[td.cellIndex]
          if (c) c.remove()
        })
        break
      }
      case "delTable": {
        table.remove()
        break
      }
      default:
        break
    }
    notifyChange()
    refreshStates()
  }

  /* ---------------- kod bloğu ---------------- */

  const applyCodeBlock = (lang: string) => {
    closeMenu()
    restoreRange()
    const sel = window.getSelection()
    const pre = closest(sel && sel.anchorNode, "pre")
    if (pre) {
      pre.setAttribute("data-language", lang)
      const code = pre.querySelector("code")
      if (code) code.className = "language-" + lang
      notifyChange()
      return
    }
    const text = (sel && sel.toString()) || ""
    const content = text ? escapeHtml(text) : "\n"
    exec(
      "insertHTML",
      `<pre data-language="${lang}"><code class="language-${lang}">${content}</code></pre><p><br /></p>`
    )
    const preEl = editorRef.current && editorRef.current.querySelector("pre[data-language]")
    if (preEl) {
      const r = document.createRange()
      r.selectNodeContents(preEl)
      r.collapse(false)
      const s = window.getSelection()
      s && s.removeAllRanges()
      s && s.addRange(r)
    }
    notifyChange()
  }

  /* ---------------- tuş kısayolları ---------------- */

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault()
      toggleMenu("link")
      return
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "x") {
      e.preventDefault()
      exec("strikeThrough")
      return
    }
    if (e.key === "Tab") {
      const sel = window.getSelection()
      const td = closest(sel && sel.anchorNode, "td,th")
      if (td) {
        e.preventDefault()
        const cells = Array.from((td as Element).closest("table")!.querySelectorAll("td,th"))
        const idx = cells.indexOf(td as Element)
        const next = cells[e.shiftKey ? idx - 1 : idx + 1]
        if (next) {
          const r = document.createRange()
          r.selectNodeContents(next)
          r.collapse(true)
          const s = window.getSelection()
          s && s.removeAllRanges()
          s && s.addRange(r)
        }
        return
      }
    }
    if (e.key === "Enter") {
      const sel = window.getSelection()
      const li = closest(sel && sel.anchorNode, "li")
      const ul = li && li.parentElement
      if (ul && ul.getAttribute("data-type") === "todo") {
        e.preventDefault()
        document.execCommand(
          "insertHTML",
          false,
          "</li><li><input type='checkbox' /><span>&#8203;</span></li>"
        )
        const spans = ul.querySelectorAll("span")
        const last = spans[spans.length - 1]
        if (last) {
          const r = document.createRange()
          r.setStart(last, 0)
          r.collapse(true)
          const s = window.getSelection()
          s && s.removeAllRanges()
          s && s.addRange(r)
        }
        notifyChange()
        return
      }
    }
  }

  const onInput = () => notifyChange()

  /* ---------------- toolbar UI ---------------- */

  const Btn = ({
    on,
    title,
    onClick,
    children,
  }: {
    on?: boolean
    title: string
    onClick?: () => void
    children: ReactNode
  }) => (
    <button
      type="button"
      className={"rte-btn" + (on ? " rte-on" : "")}
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => {
        saveRange()
        onClick && onClick()
      }}
    >
      {children}
    </button>
  )

  const DropdownBtn = ({
    open,
    title,
    onClick,
    children,
  }: {
    open?: boolean
    title: string
    onClick: () => void
    children: ReactNode
  }) => (
    <button
      type="button"
      className={"rte-btn rte-dropdown" + (open ? " rte-open" : "")}
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
      <span className="rte-chevron">{I.chevron}</span>
    </button>
  )

  const Menu = ({ name, width, children }: { name: string; width?: number; children: ReactNode }) =>
    openMenu === name ? (
      <div className="rte-pop" style={width ? { width } : undefined} onMouseDown={(e) => e.preventDefault()}>
        {children}
      </div>
    ) : null

  const MenuItem = ({ on, onClick, children }: { on?: boolean; onClick: () => void; children: ReactNode }) => (
    <button
      type="button"
      className={"rte-pop-item" + (on ? " rte-on" : "")}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      <span className="rte-pop-check">{on ? I.check : null}</span>
      {children}
    </button>
  )

  const currentHeading = HEADINGS.find((h) => h.value === heading) || HEADINGS[0]

  const tableMenuItems: [string, string, ReactNode][] = [
    ["addRowAbove", "Row above", I.arrowUp],
    ["addRowBelow", "Row below", I.arrowDown],
    ["addColLeft", "Column left", I.plus],
    ["addColRight", "Column right", I.plus],
    ["delRow", "Delete row", I.trash],
    ["delCol", "Delete column", I.trash],
    ["delTable", "Delete table", I.trash],
  ]

  /* ---------------- render ---------------- */

  return (
    <div ref={rootRef} className={"rte" + (className ? " " + className : "")} data-rte>
      <div className="rte-toolbar" role="toolbar" aria-label="Editor toolbar">
        {/* Başlık */}
        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "heading"} title="Heading" onClick={() => toggleMenu("heading")}>
            <span className="rte-heading-label">{currentHeading.label}</span>
          </DropdownBtn>
          <Menu name="heading">
            {HEADINGS.map((h) => (
              <MenuItem key={h.value} on={heading === h.value} onClick={() => applyHeading(h.value)}>
                <span className={"rte-heading-sample rte-hs-" + h.value}>{h.label}</span>
              </MenuItem>
            ))}
          </Menu>
        </div>

        <span className="rte-sep" />

        <Btn on={states.bold} title="Bold (Ctrl+B)" onClick={() => exec("bold")}>
          {I.bold}
        </Btn>
        <Btn on={states.italic} title="Italic (Ctrl+I)" onClick={() => exec("italic")}>
          {I.italic}
        </Btn>
        <Btn on={states.strike} title="Strikethrough (Ctrl+Shift+X)" onClick={() => exec("strikeThrough")}>
          {I.strike}
        </Btn>

        <span className="rte-sep" />

        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "link"} title="Link (Ctrl+K)" onClick={() => toggleMenu("link")}>
            {I.link}
          </DropdownBtn>
          <Menu name="link" width={260}>
            <div className="rte-pop-input-row">
              <input
                className="rte-input"
                type="text"
                value={linkUrl}
                placeholder="https://..."
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") applyLink(e)
                }}
                autoFocus
              />
              <button type="button" className="rte-btn rte-btn-primary" onClick={applyLink}>
                {linkMode === "edit" ? "Update" : "Insert"}
              </button>
            </div>
            {linkMode === "edit" && (
              <button type="button" className="rte-pop-item" onClick={removeLink}>
                <span className="rte-pop-check" />
                Remove link
              </button>
            )}
          </Menu>
        </div>

        <span className="rte-sep" />

        <Btn title="To-do list" onClick={toggleTodo}>
          {I.todo}
        </Btn>
        <Btn on={states.ul} title="Bulleted list" onClick={() => exec("insertUnorderedList")}>
          {I.bulletList}
        </Btn>
        <Btn on={states.ol} title="Numbered list" onClick={() => exec("insertOrderedList")}>
          {I.numberedList}
        </Btn>

        <span className="rte-sep" />

        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "align"} title="Text alignment" onClick={() => toggleMenu("align")}>
            {states.jl ? I.alignLeft : states.jc ? I.alignCenter : states.jr ? I.alignRight : states.jf ? I.alignJustify : I.alignLeft}
          </DropdownBtn>
          <Menu name="align">
            {ALIGNMENTS.map((a) => (
              <MenuItem key={a.value} on={states["j" + a.value[0]]} onClick={() => alignTo(a.value)}>
                {I["align" + a.value.charAt(0).toUpperCase() + a.value.slice(1) as keyof typeof I]}
                <span className="rte-menu-label">{a.label}</span>
              </MenuItem>
            ))}
          </Menu>
        </div>

        <span className="rte-sep" />

        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "image"} title="Insert image" onClick={() => toggleMenu("image")}>
            {I.image}
          </DropdownBtn>
          <Menu name="image" width={300}>
            <div className="rte-tabs">
              <button
                type="button"
                className={"rte-tab" + (imageTab === "url" ? " rte-on" : "")}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setImageTab("url")}
              >
                URL
              </button>
              <button
                type="button"
                className={"rte-tab" + (imageTab === "upload" ? " rte-on" : "")}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setImageTab("upload")}
              >
                Upload
              </button>
            </div>
            {imageTab === "url" ? (
              <div className="rte-pop-input-row">
                <input
                  className="rte-input"
                  type="text"
                  value={imageUrl}
                  placeholder="https://example.com/image.png"
                  onChange={(e) => setImageUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") insertImageByUrl(e)
                  }}
                />
                <button type="button" className="rte-btn rte-btn-primary" onClick={insertImageByUrl}>
                  Insert
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="rte-btn rte-btn-upload"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => fileRef.current && fileRef.current.click()}
              >
                {I.image} Choose image file…
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={onFileChosen} />
          </Menu>
        </div>

        <Btn title="Block quote" onClick={() => exec("formatBlock", "BLOCKQUOTE")}>
          {I.quote}
        </Btn>

        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "table"} title="Insert table" onClick={() => toggleMenu("table")}>
            {I.table}
          </DropdownBtn>
          <Menu name="table">
            <div className="rte-grid">
              {Array.from({ length: 100 }, (_, i) => {
                const r = Math.floor(i / 10) + 1
                const c = (i % 10) + 1
                const active = r <= tableHover.r && c <= tableHover.c
                return (
                  <div
                    key={i}
                    className={"rte-grid-cell" + (active ? " rte-on" : "")}
                    onMouseEnter={() => setTableHover({ r, c })}
                    onClick={() => insertTable(r, c)}
                  />
                )
              })}
            </div>
            <div className="rte-grid-label">
              {tableHover.r > 0 ? `${tableHover.r} × ${tableHover.c}` : "Select table size"}
            </div>
          </Menu>
        </div>

        <div className="rte-dd-wrap">
          <DropdownBtn open={openMenu === "code"} title="Insert code block" onClick={() => toggleMenu("code")}>
            {I.code}
          </DropdownBtn>
          <Menu name="code">
            <div className="rte-lang-list">
              {LANGUAGES.map(([value, label]) => (
                <MenuItem key={value} onClick={() => applyCodeBlock(value)}>
                  {label}
                </MenuItem>
              ))}
            </div>
          </Menu>
        </div>

        <Btn title="Remove format" onClick={() => exec("removeFormat")}>
          {I.removeFormat}
        </Btn>
        <Btn title="Horizontal line" onClick={() => exec("insertHTML", "<hr />")}>
          {I.hr}
        </Btn>

        <span className="rte-sep" />

        <Btn title="Undo (Ctrl+Z)" onClick={() => exec("undo")}>
          {I.undo}
        </Btn>
        <Btn title="Redo (Ctrl+Y)" onClick={() => exec("redo")}>
          {I.redo}
        </Btn>
      </div>

      <div className="rte-editor-wrap">
        <div
          ref={editorRef}
          className={"rte-content" + (focused ? " rte-focused" : "")}
          contentEditable
          suppressContentEditableWarning
          onInput={onInput}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isEmpty && !focused && <div className="rte-placeholder">{placeholder}</div>}
      </div>

      {/* tablo bağlam menüsü */}
      {tableMenuPos && (
        <div className="rte-table-menu" style={tableMenuPos}>
          {tableMenuItems.map(([action, label, icon]) => (
            <button
              key={action}
              type="button"
              className="rte-btn rte-btn-sm"
              title={label}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => tableAction(action)}
            >
              {icon}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default RichTextEditor
