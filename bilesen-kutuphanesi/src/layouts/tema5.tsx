/**
 * Tema5 (NovaPanel — Kanban) — Sayfa layout şablonu (Tema 5)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Kanban yapısı — 3 kolon (kartlar) + kart ekle/taşı.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema5.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema5
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
  Settings,
  Sun,
  User,
  Users,
  X,
} from "@/components/ui/icons"
import "./tema5.css"

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
  x: (s: number) => <X style={{ width: s, height: s }} />,
  home: (s: number) => <Home style={{ width: s, height: s }} />,
}

/* ---------- Örnek veri ---------- */

type IconName = keyof typeof I

const navItems: { icon: IconName; label: string; active?: boolean; children?: string[] }[] = [
  { icon: "grid", label: "Genel", active: true },
  { icon: "layers", label: "Tasarım", children: ["Arayüz", "Bileşenler"] },
  { icon: "chart", label: "Geliştirme", children: ["Frontend", "Backend"] },
  { icon: "users", label: "Pazarlama" },
]

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

function Sidebar({
  collapsed,
  onToggle,
  dark,
  onToggleDark,
  openKey,
  onOpenSubmenu,
  onNavigate,
}: {
  collapsed: boolean
  onToggle: () => void
  dark: boolean
  onToggleDark: () => void
  openKey: string | null
  onOpenSubmenu: (key: string | null) => void
  onNavigate: (name: string) => void
}) {
  const toggleSubmenu = (label: string) => onOpenSubmenu(openKey === label ? null : label)

  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div
        className={`sidebar__toggle ${collapsed ? "sidebar__toggle--center" : ""}`}
        onClick={onToggle}
        title={collapsed ? "Paneli genişlet" : "Paneli daralt"}
      >
        {I[collapsed ? "chevronRight" : "chevronLeft"](15)}
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item) => {
          const hasChildren = !!item.children
          const isOpen = openKey === item.label
          return (
            <div key={item.label} className="nav-group">
              <div
                className={`nav-item ${item.active ? "nav-item--active" : ""} ${isOpen ? "nav-item--open" : ""}`}
                title={collapsed ? item.label : undefined}
                onClick={() => {
                  onNavigate(item.label)
                  if (!collapsed && hasChildren) toggleSubmenu(item.label)
                }}
              >
                {I[item.icon](17)}
                {!collapsed && <span className="nav-item__label">{item.label}</span>}
                {!collapsed && item.active && !hasChildren && <span className="nav-item__dot" />}
                {!collapsed && hasChildren && (
                  <span className={`nav-item__chev ${isOpen ? "nav-item__chev--open" : ""}`}>
                    <ChevronDown style={{ width: 15, height: 15 }} />
                  </span>
                )}
              </div>
              {!collapsed && hasChildren && (
                <div className={`submenu ${isOpen ? "submenu--open" : ""}`}>
                  <div className="submenu__inner">
                    {item.children!.map((child, i) => (
                      <div
                        key={child}
                        className={`submenu__item ${i === 0 ? "submenu__item--active" : ""}`}
                        onClick={() => onNavigate(child)}
                      >
                        <span className="submenu__dot" />
                        {child}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>

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
        <div className="nav-item" title="Ayarlar" onClick={() => onNavigate("Ayarlar")}>
          <Settings style={{ width: 17, height: 17 }} />
          {!collapsed && <span className="nav-item__label">Ayarlar</span>}
        </div>
        {!collapsed && <div className="sidebar__hint">Pro plan</div>}
      </div>
    </aside>
  )
}

/* ---------- Kanban verileri ---------- */

interface KanbanCard {
  id: number
  title: string
  tag?: string
  tagColor?: string
  meta?: string
  avatars?: string[]
  colors?: string[]
}

interface KanbanColumn {
  id: string
  title: string
  color: string
  cards: KanbanCard[]
}

const initialColumns: KanbanColumn[] = [
  {
    id: "yapilacak", title: "Yapılacak", color: "#94a3b8",
    cards: [
      { id: 1, title: "Yeni dashboard grafikleri", tag: "Tasarım", tagColor: "#8b5cf6", meta: "2 görev", avatars: ["E", "M"], colors: ["#2563eb", "#8b5cf6"] },
      { id: 2, title: "API hız optimizasyonu", tag: "Backend", tagColor: "#10b981", meta: "5 görev", avatars: ["Z"], colors: ["#ec4899"] },
      { id: 3, title: "Kullanıcı anketi analizi", tag: "Analiz", tagColor: "#f59e0b", meta: "1 görev", avatars: ["E"], colors: ["#2563eb"] },
    ],
  },
  {
    id: "devam", title: "Devam Ediyor", color: "#f59e0b",
    cards: [
      { id: 4, title: "Bileşen kütüphanesi v2", tag: "Frontend", tagColor: "#2563eb", meta: "12 görev", avatars: ["E", "M", "Z"], colors: ["#2563eb", "#8b5cf6", "#ec4899"] },
      { id: 5, title: "A/B test altyapısı", tag: "Backend", tagColor: "#10b981", meta: "3 görev", avatars: ["M"], colors: ["#8b5cf6"] },
    ],
  },
  {
    id: "tamam", title: "Tamamlandı", color: "#10b981",
    cards: [
      { id: 6, title: "Yeni logo ve marka", tag: "Tasarım", tagColor: "#8b5cf6", meta: "8 görev", avatars: ["E"], colors: ["#2563eb"] },
      { id: 7, title: "SSO entegrasyonu", tag: "Backend", tagColor: "#10b981", meta: "6 görev", avatars: ["E", "M"], colors: ["#2563eb", "#8b5cf6"] },
    ],
  },
]

function KanbanBoard({ columns, onMove, onAdd, onCancelAdd, addingCol, newCardTitle, onNewCardTitle, onSaveCard }: {
  columns: KanbanColumn[]
  onMove: (cardId: number, fromCol: string, toCol: string) => void
  onAdd: (colId: string) => void
  onCancelAdd: () => void
  addingCol: string | null
  newCardTitle: string
  onNewCardTitle: (v: string) => void
  onSaveCard: (colId: string) => void
}) {
  return (
    <div className="kanban-board">
      {columns.map((col, ci) => (
        <div key={col.id} className="kanban-col">
          <div className="kanban-col__head">
            <span className="kanban-col__dot" style={{ background: col.color }} />
            <span className="kanban-col__title">{col.title}</span>
            <span className="kanban-col__count">{col.cards.length}</span>
            <button type="button" className="kanban-col__add" title="Kart ekle" onClick={() => onAdd(col.id)}>
              <Plus style={{ width: 14, height: 14 }} />
            </button>
          </div>
          <div className="kanban-col__cards">
            {col.cards.map((card) => (
              <div key={card.id} className="kanban-card">
                <div className="kanban-card__top">
                  {card.tag && (
                    <span className="kanban-card__tag" style={{ background: card.tagColor + "1a", color: card.tagColor }}>
                      {card.tag}
                    </span>
                  )}
                </div>
                <div className="kanban-card__title">{card.title}</div>
                <div className="kanban-card__foot">
                  <span className="kanban-card__meta">⏱ {card.meta}</span>
                  <div className="kanban-card__avatars">
                    {card.avatars?.map((a, i) => (
                      <span key={i} className="kanban-card__av" style={{ background: card.colors?.[i] }}>
                        {a}
                      </span>
                    ))}
                  </div>
                  {ci < columns.length - 1 && (
                    <button
                      type="button"
                      className="kanban-card__move"
                      title="Sonraki kolona taşı"
                      onClick={() => onMove(card.id, col.id, columns[ci + 1].id)}
                    >
                      <ChevronRight style={{ width: 14, height: 14 }} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {addingCol === col.id && (
            <div className="kanban-col__addrow">
              <input
                className="kanban-col__input"
                placeholder="Kart başlığı…"
                autoFocus
                value={newCardTitle}
                onChange={(e) => onNewCardTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onSaveCard(col.id)
                  if (e.key === "Escape") onCancelAdd()
                }}
              />
              <div className="kanban-col__inputrow">
                <button type="button" className="kanban-col__save" onClick={() => onSaveCard(col.id)}>
                  Ekle
                </button>
                <button type="button" className="kanban-col__cancel" onClick={onCancelAdd}>
                  Vazgeç
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
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

const initialKanbanState = {
  collapsed: false,
  dark: false,
  openKey: "Tasarım" as string | null,
  pageName: "Genel",
}

function Tema5() {
  const [s, setS] = useState(initialKanbanState)
  const [cols, setCols] = useState<KanbanColumn[]>(initialColumns)
  const [addingCol, setAddingCol] = useState<string | null>(null)
  const [newCardTitle, setNewCardTitle] = useState("")
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<typeof s>) => setS((p) => ({ ...p, ...patchObj }))

  const moveCard = (cardId: number, fromCol: string, toCol: string) =>
    setCols((cs) => {
      const from = cs.find((c) => c.id === fromCol)!
      const card = from.cards.find((c) => c.id === cardId)!
      return cs.map((c) =>
        c.id === fromCol
          ? { ...c, cards: c.cards.filter((x) => x.id !== cardId) }
          : c.id === toCol
            ? { ...c, cards: [...c.cards, card] }
            : c
      )
    })

  const saveCard = (colId: string) => {
    if (!newCardTitle.trim()) return
    const card: KanbanCard = { id: Date.now(), title: newCardTitle.trim(), tag: "Yeni", tagColor: "#2563eb", meta: "1 görev" }
    setCols((cs) => cs.map((c) => (c.id === colId ? { ...c, cards: [...c.cards, card] } : c)))
    setNewCardTitle("")
    setAddingCol(null)
  }

  return (
    <div ref={rootRef} data-theme="light" className="tema5-root app">
      <GlobalHeader />
      <div className="app__body">
        <Sidebar
          collapsed={s.collapsed}
          onToggle={() => patch({ collapsed: !s.collapsed })}
          dark={s.dark}
          onToggleDark={() => patch({ dark: !s.dark })}
          openKey={s.openKey}
          onOpenSubmenu={(k) => patch({ openKey: k })}
          onNavigate={(name) => patch({ pageName: name })}
        />
        <div className="content-col">
          <main className="main">
            <KanbanBoard
              columns={cols}
              onMove={moveCard}
              onAdd={(id) => {
                setAddingCol(id)
                setNewCardTitle("")
              }}
              onCancelAdd={() => setAddingCol(null)}
              addingCol={addingCol}
              newCardTitle={newCardTitle}
              onNewCardTitle={setNewCardTitle}
              onSaveCard={saveCard}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema5 }
