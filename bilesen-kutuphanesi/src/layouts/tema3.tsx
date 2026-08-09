/**
 * Tema3 (NovaPanel — Dokümantasyon) — Sayfa layout şablonu (Tema 3)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Dokümantasyon yapısı — sol konular + içerik (başlıklar/kod) + sağ TOC.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema3.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema3
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
import "./tema3.css"

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
  { icon: "home", label: "Başlarken", active: true },
  { icon: "layers", label: "Kurulum", children: ["Vite Kurulumu", "Yol Eşleme"] },
  { icon: "settings", label: "API" },
  { icon: "chart", label: "Temalar" },
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

/* ---------- Breadcrumb ---------- */

function Breadcrumb({ pageName }: { pageName: string }) {
  return (
    <div className="breadcrumb">
      <span className="crumb crumb--link" title="Ana Sayfa">
        <Home style={{ width: 13, height: 13 }} />
        Ana Sayfa
      </span>
      <span className="crumb-sep">
        <ChevronRight style={{ width: 12, height: 12 }} />
      </span>
      <span className="crumb crumb--link" title="Ekip">
        Ekip
      </span>
      <span className="crumb-sep">
        <ChevronRight style={{ width: 12, height: 12 }} />
      </span>
      <span className="crumb crumb--current">{pageName}</span>
    </div>
  )
}

/* ---------- Dokümantasyon içerikleri ---------- */

interface DocItem {
  id: string
  title: string
  body: string
  code?: string
  callout?: string
}

const docSections: Record<string, DocItem[]> = {
  "Başlarken": [
    { id: "giris", title: "Giriş", body: "NovaPanel bileşen kütüphanesi saf React + Tailwind ile yazılmıştır; üçüncü parti UI bağımlılığı yoktur. Bileşenler JSDoc etiketleriyle kayıtlıdır ve tek dosya halinde projenize kopyalanabilir." },
    { id: "kurulum", title: "Kurulum", body: "Paketi yükleyip ilk bileşeni kullanın:", code: "npm i @novapanel/ui\n\nimport { MtButton } from \"@novapanel/ui\"\n\nfunction Demo() {\n  return <MtButton>Başla</MtButton>\n}", callout: "Tailwind v4 + şablon tema değişkenleri varsayılır." },
    { id: "ilk-bilesen", title: "İlk Bileşen", body: "Her bileşen bağımsız bir dosyadır. İkonlar kendi setimizden gelir — ikon bağımlılığı kurmanıza gerek yoktur." },
  ],
  "Kurulum": [
    { id: "vite", title: "Vite Kurulumu", body: "Vite projesine entegrasyon için yalnızca dosyayı kopyalayıp import etmeniz yeterlidir.", code: "import { MtCard } from \"./components/ui/mt-card\"" },
    { id: "yollar", title: "Yol Eşleme", body: "@/components/ui yolu src/components/ui klasörüne işaret eder. cn() yardımcısı clsx + tailwind-merge ile birleştirir." },
  ],
  "API": [
    { id: "props", title: "Props", body: "Bileşenler TS interface ile tiplenmiştir; HTML prop'ları desteklenir, çakışanlar Omit ile ayrılır (ör. size, value)." },
    { id: "olaylar", title: "Olaylar", body: "onChange/onSelect gibi olaylar standart React imzalarıyla çalışır.", code: "<MtSelect\n  data={[...]}\n  value={value}\n  onChange={setValue}\n/>" },
  ],
  "Temalar": [
    { id: "renkler", title: "Renk Paleti", body: "Mavi tonlu palet + açık kenarlıklar. Koyu tema data-theme ile kök öğede etkinleştirilir." },
    { id: "dark", title: "Koyu Tema", body: "data-theme=\"dark\" özniteliği tüm bileşen stillerini koyu moda çevirir." },
  ],
}

const tocItems = ["Giriş", "Kurulum", "İlk Bileşen", "Vite Kurulumu", "Yol Eşleme", "Props", "Olaylar", "Renk Paleti", "Koyu Tema"]

function DocContent({ pageName, tocActive, onToc }: { pageName: string; tocActive: string; onToc: (id: string) => void }) {
  const sections = docSections[pageName] ?? docSections["Başlarken"]

  return (
    <div className="doc-body">
      <div className="doc-content">
        {sections.map((s) => (
          <div key={s.id} className="doc-section" id={s.id}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
            {s.code && <pre className="doc-code">{s.code}</pre>}
            {s.callout && <div className="doc-callout">💡 {s.callout}</div>}
          </div>
        ))}
      </div>
      <aside className="doc-toc">
        <div className="doc-toc__title">Bu sayfada</div>
        {tocItems.map((item) => {
          const sec = Object.values(docSections).flat().find((s) => s.title === item)
          return (
            <div
              key={item}
              className={`doc-toc__item ${tocActive === (sec?.id ?? item) ? "doc-toc__item--active" : ""}`}
              onClick={() => onToc(sec?.id ?? item)}
            >
              {item}
            </div>
          )
        })}
      </aside>
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

/* ---------- Tema 3 (App — Dokümantasyon) ---------- */

const initialDocState = {
  collapsed: false,
  dark: false,
  openKey: "Kurulum" as string | null,
  pageName: "Başlarken",
  tocActive: "giris",
}

function Tema3() {
  const [s, setS] = useState(initialDocState)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<typeof s>) => setS((p) => ({ ...p, ...patchObj }))

  return (
    <div ref={rootRef} data-theme="light" className="tema3-root app">
      <GlobalHeader />
      <div className="app__body">
        <Sidebar
          collapsed={s.collapsed}
          onToggle={() => patch({ collapsed: !s.collapsed })}
          dark={s.dark}
          onToggleDark={() => patch({ dark: !s.dark })}
          openKey={s.openKey}
          onOpenSubmenu={(k) => patch({ openKey: k })}
          onNavigate={(name) => patch({ pageName: name, tocActive: docSections[name]?.[0]?.id ?? "giris" })}
        />
        <div className="content-col">
          <main className="main">
            <div className="main__inner">
              <Breadcrumb pageName={s.pageName} />
              <DocContent pageName={s.pageName} tocActive={s.tocActive} onToc={(id) => patch({ tocActive: id })} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema3 }
