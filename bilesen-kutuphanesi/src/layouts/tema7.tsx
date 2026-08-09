/**
 * Tema7 (NovaPanel — Mail/Inbox) — Sayfa layout şablonu (Tema 7)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * E-posta yapısı — sol klasörler + orta liste + sağ okuma paneli.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema7.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema7
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
import "./tema7.css"

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

type IconName = keyof typeof I

const navItems: { icon: IconName; label: string; active?: boolean; children?: string[] }[] = [
  { icon: "bell", label: "Gelen Kutusu", active: true },
  { icon: "check", label: "Yıldızlı" },
  { icon: "send", label: "Gönderilen" },
  { icon: "layers", label: "Taslaklar" },
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

/* ---------- E-posta verileri ---------- */

interface Mail {
  id: number
  from: string
  email: string
  subject: string
  preview: string
  body: string
  time: string
  read: boolean
  starred: boolean
}

const initialMails: Mail[] = [
  { id: 1, from: "Elif Yılmaz", email: "elif@nova.app", subject: "Q3 raporu hakkında", preview: "Raporu inceledim, birkaç önerim var…", body: "Merhaba,\n\nQ3 raporunu inceledim ve birkaç önerim var. Özellikle büyüme oranı bölümünde ek metrikler eklememizi öneriyorum.\n\nDetayları yarın toplantıda konuşabiliriz.\n\nİyi çalışmalar,\nElif", time: "09:41", read: false, starred: true },
  { id: 2, from: "Mert Kaya", email: "mert@nova.app", subject: "Yeni tasarım dosyaları", preview: "Dashboard tasarımları hazır, Figma linki…", body: "Merhaba,\n\nYeni dashboard tasarımları hazır. Figma bağlantısını paylaşıyorum, görüşlerini bekliyorum.\n\nSevgiler,\nMert", time: "08:55", read: false, starred: false },
  { id: 3, from: "NovaPanel Ekibi", email: "ekip@nova.app", subject: "Haftalık bülten #42", preview: "Bu haftanın gelişmeleri: v2.1 çıktı…", body: "Merhaba,\n\nBu hafta v2.1 sürümünü yayınladık. Yeni bileşenler, performans iyileştirmeleri ve çok daha fazlası.\n\nEkibi", time: "Dün", read: true, starred: false },
  { id: 4, from: "Zeynep Demir", email: "zeynep@nova.app", subject: "Veri seti güncellendi", preview: "12.000 yeni satır eklendi, kontrol…", body: "Merhaba,\n\nVeri setini güncelledim — 12.000 yeni satır eklendi. Lütfen kontrol edin.\n\nTeşekkürler,\nZeynep", time: "Dün", read: true, starred: true },
  { id: 5, from: "Kerem Arslan", email: "kerem@nova.app", subject: "Toplantı notları", preview: "Pazartesi toplantısının özeti…", body: "Merhaba,\n\nPazartesi toplantısının notlarını ekliyorum. Aksiyon maddelerini inceleyelim.\n\nKerem", time: "2 gün önce", read: true, starred: false },
]

function InboxContent({ mails, activeId, onSelect, onToggleRead, onToggleStar }: {
  mails: Mail[]
  activeId: number
  onSelect: (id: number) => void
  onToggleRead: (id: number) => void
  onToggleStar: (id: number) => void
}) {
  const active = mails.find((m) => m.id === activeId)

  return (
    <div className="inbox-main">
      <div className="inbox-list">
        <div className="inbox-list__head">
          <span className="inbox-list__title">Gelen Kutusu</span>
          <span className="inbox-list__count">{mails.length} mesaj</span>
        </div>
        <div className="inbox-list__items">
          {mails.map((m) => (
            <div
              key={m.id}
              className={`mail-item ${m.id === activeId ? "mail-item--active" : ""} ${m.read ? "mail-item--read" : ""}`}
              onClick={() => onSelect(m.id)}
            >
              <div className="mail-item__top">
                <span className="mail-item__from">{m.starred ? "★ " : ""}{m.from}</span>
                <span className="mail-item__time">{m.time}</span>
              </div>
              <div className="mail-item__subj">{m.subject}</div>
              <div className="mail-item__preview">{m.preview}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="inbox-read">
        {active ? (
          <>
            <div className="inbox-read__head">
              <div className="inbox-read__subj">{active.subject}</div>
              <div className="inbox-read__meta">
                <span className="inbox-read__from">{active.from}</span>
                <span className="inbox-read__mail">&lt;{active.email}&gt;</span>
                <div className="inbox-read__actions">
                  <button type="button" className="inbox-read__btn" onClick={() => onToggleStar(active.id)}>
                    {active.starred ? "★ Yıldızı kaldır" : "☆ Yıldızla"}
                  </button>
                  <button type="button" className="inbox-read__btn" onClick={() => onToggleRead(active.id)}>
                    {active.read ? "Okunmadı işaretle" : "Okundu işaretle"}
                  </button>
                </div>
              </div>
            </div>
            <div className="inbox-read__body">{active.body}</div>
          </>
        ) : (
          <div className="inbox-read__empty">Mesaj seçin</div>
        )}
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

const initialMailState = {
  collapsed: false,
  dark: false,
  openKey: "Gelen Kutusu" as string | null,
  pageName: "Gelen Kutusu",
  activeMail: 1,
}

function Tema7() {
  const [s, setS] = useState(initialMailState)
  const [mails, setMails] = useState<Mail[]>(initialMails)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<typeof s>) => setS((p) => ({ ...p, ...patchObj }))

  const toggleRead = (id: number) =>
    setMails((ms) => ms.map((m) => (m.id === id ? { ...m, read: !m.read } : m)))
  const toggleStar = (id: number) =>
    setMails((ms) => ms.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m)))

  return (
    <div ref={rootRef} data-theme="light" className="tema7-root app">
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
            <InboxContent
              mails={mails}
              activeId={s.activeMail}
              onSelect={(id) => patch({ activeMail: id })}
              onToggleRead={toggleRead}
              onToggleStar={toggleStar}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema7 }
