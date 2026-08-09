/**
 * Tema4 (NovaPanel — Chat) — Sayfa layout şablonu (Tema 4)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Sohbet yapısı — sol konuşma listesi + mesaj paneli + yazma çubuğu.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema4.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema4
 * @source ozel
 */
import { useEffect, useRef, useState } from "react"
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Filter,
  Home,
  Layers,
  LayoutGrid,
  Menu,
  Moon,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  Sun,
  User,
  Users,
  X,
} from "@/components/ui/icons"
import "./tema4.css"

/* ---------- İkon eşleme ---------- */
const I = {
  menu: (s: number) => <Menu style={{ width: s, height: s }} />,
  search: (s: number) => <Search style={{ width: s, height: s }} />,
  filter: (s: number) => <Filter style={{ width: s, height: s }} />,
  plus: (s: number) => <Plus style={{ width: s, height: s }} />,
  download: (s: number) => <Download style={{ width: s, height: s }} />,
  bell: (s: number) => <Bell style={{ width: s, height: s }} />,
  calendar: (s: number) => <CalendarDays style={{ width: s, height: s }} />,
  user: (s: number) => <User style={{ width: s, height: s }} />,
  chevronDown: (s: number) => <ChevronDown style={{ width: s, height: s }} />,
  chevronLeft: (s: number) => <ChevronLeft style={{ width: s, height: s }} />,
  chevronRight: (s: number) => <ChevronRight style={{ width: s, height: s }} />,
  check: (s: number) => <Check style={{ width: s, height: s }} />,
  moon: (s: number) => <Moon style={{ width: s, height: s }} />,
  sun: (s: number) => <Sun style={{ width: s, height: s }} />,
  sort: (s: number) => <ArrowUpDown style={{ width: s, height: s }} />,
  eye: (s: number) => <Eye style={{ width: s, height: s }} />,
  dots: (s: number) => <MoreHorizontal style={{ width: s, height: s }} />,
  grid: (s: number) => <LayoutGrid style={{ width: s, height: s }} />,
  chart: (s: number) => <BarChart3 style={{ width: s, height: s }} />,
  users: (s: number) => <Users style={{ width: s, height: s }} />,
  layers: (s: number) => <Layers style={{ width: s, height: s }} />,
  settings: (s: number) => <Settings style={{ width: s, height: s }} />,
  send: (s: number) => <Send style={{ width: s, height: s }} />,
  x: (s: number) => <X style={{ width: s, height: s }} />,
  home: (s: number) => <Home style={{ width: s, height: s }} />,
}

/* ---------- Örnek veri ---------- */

/* ---------- Global Header ---------- */

function GlobalHeader() {
  return (
    <header className="g-header">
      <div className="g-header__brand">
        <div className="brand-mark">
          <Layers style={{ width: 16, height: 16 }} />
        </div>
        <span className="brand-name">NovaPanel</span>
        <span className="brand-badge">v2.0</span>
      </div>

      <div className="g-header__actions">
        <div className="icon-box" title="Bildirimler">
          <Bell style={{ width: 17, height: 17 }} />
          <span className="notif-dot" />
        </div>
        <div className="icon-box" title="Takvim">
          <CalendarDays style={{ width: 17, height: 17 }} />
        </div>
        <div className="g-divider" />
        <div className="profile-box" title="Profil">
          <div className="avatar avatar--sm">Y</div>
          <span className="profile-name">Yunus</span>
          <ChevronDown style={{ width: 14, height: 14 }} className="profile-chevron" />
        </div>
      </div>
    </header>
  )
}

/* ---------- Sidebar (açılır-kapanır, kontrollü) ---------- */

function Sidebar({ collapsed, onToggle, dark, onToggleDark, activeConvId, onSelect }: { collapsed: boolean; onToggle: () => void; dark: boolean; onToggleDark: () => void; activeConvId: number; onSelect: (id: number) => void }) {
  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div
        className={`sidebar__toggle ${collapsed ? "sidebar__toggle--center" : ""}`}
        onClick={onToggle}
        title={collapsed ? "Paneli genişlet" : "Paneli daralt"}
      >
        {I[collapsed ? "chevronRight" : "chevronLeft"](15)}
      </div>

      <div className="sidebar__nav">
        <div className="conv-list">
          {conversations.map((c) => (
            <div
              key={c.id}
              className={`conv-item ${c.id === activeConvId ? "conv-item--active" : ""}`}
              title={collapsed ? c.name : undefined}
              onClick={() => onSelect(c.id)}
            >
              <div className="conv-item__avatar" style={{ background: c.color }}>
                {c.name.charAt(0)}
              </div>
              {!collapsed && (
                <div className="conv-item__body">
                  <div className="conv-item__name">
                    <span>{c.name}</span>
                    <span className="conv-item__time">{c.time}</span>
                  </div>
                  <div className="conv-item__preview">{c.preview}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar__footer">
        {!collapsed && (
          <div className="theme-switch" onClick={onToggleDark} title="Tema değiştir">
            <div className="theme-switch__label">
              {dark ? <Moon style={{ width: 14, height: 14 }} /> : <Sun style={{ width: 14, height: 14 }} />}
              <span>Tema</span>
            </div>
            <div className={`switch ${dark ? "switch--on" : ""}`}>
              <span className="switch__knob" />
            </div>
          </div>
        )}
        <div className="sidebar__divider" />
        <div className="nav-item" title="Ayarlar">
          <Settings style={{ width: 17, height: 17 }} />
          {!collapsed && <span className="nav-item__label">Ayarlar</span>}
        </div>
        {!collapsed && <div className="sidebar__hint">Pro plan</div>}
      </div>
    </aside>
  )
}

/* ---------- Sohbet verileri ---------- */

interface Message {
  id: number
  from: "in" | "out"
  text: string
  time: string
}

interface Conversation {
  id: number
  name: string
  color: string
  time: string
  preview: string
  unread?: number
  online: boolean
  messages: Message[]
}

const conversations: Conversation[] = [
  {
    id: 1, name: "Elif Yılmaz", color: "#2563eb", time: "09:41", online: true,
    preview: "Raporu inceledin mi?",
    messages: [
      { id: 1, from: "out", text: "Merhaba Elif! Proje raporuyla ilgili bir şey soracaktım.", time: "09:12" },
      { id: 2, from: "in", text: "Merhaba! Tabii, buyur sor.", time: "09:15" },
      { id: 3, from: "out", text: "Q3 hedef metriklerini dün akşam paylaştım, inceledin mi?", time: "09:20" },
      { id: 4, from: "in", text: "Evet inceledim, çok net görünüyor. Sadece büyüme oranı kısmını biraz daha detaylandırabiliriz.", time: "09:41" },
    ],
  },
  {
    id: 2, name: "Mert Kaya", color: "#8b5cf6", time: "08:55", online: true,
    preview: "Yeni tasarımlar hazır 📐",
    messages: [
      { id: 1, from: "in", text: "Yeni dashboard tasarımları hazır, bakmak ister misin?", time: "08:55" },
      { id: 2, from: "out", text: "Tabii, hemen gönder!", time: "09:02" },
    ],
  },
  {
    id: 3, name: "Zeynep Demir", color: "#ec4899", time: "Dün", online: false,
    preview: "Veri seti güncellendi",
    messages: [
      { id: 1, from: "in", text: "Veri setini güncelledim, 12.000 satır eklendi.", time: "Dün" },
      { id: 2, from: "out", text: "Süper, teşekkürler! Kontrol ediyorum.", time: "Dün" },
    ],
  },
  {
    id: 4, name: "Ekip — Tasarım", color: "#10b981", time: "Dün", online: true, unread: 3,
    preview: "Yeni bileşen kütüphanesi sürümü çıktı",
    messages: [
      { id: 1, from: "in", text: "Ekip kanalına hoş geldiniz 👋", time: "Dün" },
    ],
  },
]

function ChatPanel({ conv, onSend, input, onInput }: { conv: Conversation; onSend: () => void; input: string; onInput: (v: string) => void }) {
  return (
    <div className="chat-panel">
      <div className="chat-panel__head">
        <div className="conv-item__avatar" style={{ background: conv.color }}>{conv.name.charAt(0)}</div>
        <div>
          <div className="chat-panel__name">{conv.name}</div>
          <div className="chat-panel__status">{conv.online ? "Çevrimiçi" : "Son görülme: az önce"}</div>
        </div>
        <div className="chat-panel__meta">NovaPanel · v2.0</div>
      </div>

      <div className="chat-msgs">
        {conv.messages.map((m) => (
          <div key={m.id} className={`msg-row ${m.from === "out" ? "msg-row--out" : ""}`}>
            <div>
              <div className={`msg-bubble msg-bubble--${m.from}`}>{m.text}</div>
              <div className="msg-time">{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-inputbar">
        <input
          className="chat-input"
          placeholder="Mesaj yaz…"
          value={input}
          onChange={(e) => onInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) onSend()
          }}
        />
        <button type="button" className="chat-send" onClick={onSend} aria-label="Gönder">
          <Send style={{ width: 16, height: 16 }} />
        </button>
      </div>
    </div>
  )
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="g-footer">
      <div className="g-footer__left">
        <span className="g-footer__brand">© 2025 NovaPanel</span>
        <span className="g-footer__sep" />
        <span>Tüm hakları saklıdır.</span>
      </div>
      <div className="g-footer__right">
        <span className="g-footer__link">Gizlilik</span>
        <span className="g-footer__link">Koşullar</span>
        <span className="g-footer__link">Yardım</span>
        <span className="g-footer__sep" />
        <span className="g-footer__status">
          <span className="g-footer__pulse" />
          Çalışıyor
        </span>
      </div>
    </footer>
  )
}

/* ---------- Tema 4 (App — Chat) ---------- */

const initialChatState = {
  collapsed: false,
  dark: false,
  activeConvId: 1,
}

function Tema4() {
  const [s, setS] = useState(initialChatState)
  const [input, setInput] = useState("")
  const [convs, setConvs] = useState<Conversation[]>(conversations)
  const rootRef = useRef<HTMLDivElement>(null)

  const active = convs.find((c) => c.id === s.activeConvId) ?? convs[0]

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const send = () => {
    if (!input.trim()) return
    const now = new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    setConvs((cs) =>
      cs.map((c) =>
        c.id === active.id
          ? {
              ...c,
              messages: [...c.messages, { id: Date.now(), from: "out" as const, text: input.trim(), time: now }],
              preview: input.trim(),
              time: now,
            }
          : c
      )
    )
    setInput("")
  }

  return (
    <div ref={rootRef} data-theme="light" className="tema4-root app">
      <GlobalHeader />
      <div className="app__body">
        <Sidebar
          collapsed={s.collapsed}
          onToggle={() => setS((p) => ({ ...p, collapsed: !p.collapsed }))}
          dark={s.dark}
          onToggleDark={() => setS((p) => ({ ...p, dark: !p.dark }))}
          activeConvId={s.activeConvId}
          onSelect={(id) => setS((p) => ({ ...p, activeConvId: id }))}
        />
        <main className="main">
          <ChatPanel conv={active} onSend={send} input={input} onInput={setInput} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export { Tema4 }
