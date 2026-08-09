/**
 * Tema2 (NovaPanel — Sekmeli) — Sayfa layout şablonu (Tema 2)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Footer üstünde sekme çubuğu (TabBar) — her sekme KENDİ state'ine sahiptir
 * (collapsed/dark/filtre/arama/sayfa/sayfaAdı). Sekme ekle/kapat destekli.
 * İkonlar kendi setimizden; stil tema2.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema2
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
import "./tema2.css"

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

const rows = [
  { name: "Elif Yılmaz", email: "elif.yilmaz@nova.app", role: "Yazılım Mühendisi", status: "Aktif", active: "2 dk önce", color: "#2563eb" },
  { name: "Mert Kaya", email: "mert.kaya@nova.app", role: "Ürün Tasarımcısı", status: "Aktif", active: "15 dk önce", color: "#8b5cf6" },
  { name: "Zeynep Demir", email: "zeynep.demir@nova.app", role: "Veri Analisti", status: "Beklemede", active: "1 saat önce", color: "#ec4899" },
  { name: "Emre Şahin", email: "emre.sahin@nova.app", role: "Proje Yöneticisi", status: "Aktif", active: "3 saat önce", color: "#10b981" },
  { name: "Ayşe Çelik", email: "ayse.celik@nova.app", role: "DevOps Mühendisi", status: "Pasif", active: "1 gün önce", color: "#f59e0b" },
  { name: "Kerem Arslan", email: "kerem.arslan@nova.app", role: "Satış Temsilcisi", status: "Aktif", active: "4 saat önce", color: "#06b6d4" },
  { name: "Selin Koç", email: "selin.koc@nova.app", role: "İçerik Editörü", status: "Beklemede", active: "5 saat önce", color: "#6366f1" },
  { name: "Burak Öztürk", email: "burak.ozturk@nova.app", role: "İnsan Kaynakları", status: "Aktif", active: "6 saat önce", color: "#ef4444" },
]

const statusStyle: Record<string, string> = { Aktif: "ok", Beklemede: "warn", Pasif: "off" }

type IconName = keyof typeof I

const navItems: { icon: IconName; label: string; active?: boolean; children?: string[] }[] = [
  { icon: "grid", label: "Genel Bakış", active: true },
  { icon: "chart", label: "Analizler", children: ["Satış Raporları", "Trafik", "Performans"] },
  { icon: "users", label: "Ekip", children: ["Üyeler", "Roller", "Davetler"] },
]

const filterGroups = [
  { label: "Durum", options: ["Aktif", "Beklemede", "Pasif"] },
  { label: "Rol", options: ["Yazılım Mühendisi", "Ürün Tasarımcısı", "Veri Analisti", "Proje Yöneticisi", "DevOps Mühendisi"] },
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

/* ---------- Page Header (kontrollü) ---------- */

function PageHeader({
  search,
  onSearch,
  filters,
  onFilters,
  filterQuery,
  onFilterQuery,
}: {
  search: string
  onSearch: (v: string) => void
  filters: string[]
  onFilters: (v: string[]) => void
  filterQuery: string
  onFilterQuery: (v: string) => void
}) {
  const [filterOpen, setFilterOpen] = useState(false)

  const toggle = (value: string) => onFilters(filters.includes(value) ? filters.filter((x) => x !== value) : [...filters, value])

  const q = filterQuery.trim().toLowerCase()
  const groups = filterGroups
    .map((g) => ({ ...g, options: g.options.filter((o) => !q || o.toLowerCase().includes(q)) }))
    .filter((g) => g.options.length > 0)

  return (
    <div className="page-header">
      <div className="page-header__left">
        <div className="search-box">
          <Search style={{ width: 16, height: 16 }} />
          <input type="text" placeholder="Ara… (isim, e-posta, rol)" value={search} onChange={(e) => onSearch(e.target.value)} />
          <span className="search-kbd">⌘K</span>
        </div>

        <div className="filter-wrap">
          <div className={`filter-box ${filterOpen ? "filter-box--open" : ""}`} onClick={() => setFilterOpen((o) => !o)}>
            <Filter style={{ width: 15, height: 15 }} />
            <span>Filtrele</span>
            {filters.length > 0 && <span className="filter-count">{filters.length}</span>}
            <ChevronDown style={{ width: 13, height: 13 }} className="filter-chevron" />
          </div>

          {filterOpen && (
            <>
              <div className="filter-backdrop" onClick={() => setFilterOpen(false)} />
              <div className="filter-dropdown">
                <div className="filter-dropdown__search">
                  <Search style={{ width: 14, height: 14 }} />
                  <input autoFocus type="text" placeholder="Filtre ara…" value={filterQuery} onChange={(e) => onFilterQuery(e.target.value)} />
                </div>

                <div className="filter-dropdown__list">
                  {groups.map((g) => (
                    <div key={g.label} className="filter-group">
                      <div className="filter-group__label">{g.label}</div>
                      {g.options.map((opt) => (
                        <div
                          key={opt}
                          className={`filter-option ${filters.includes(opt) ? "filter-option--selected" : ""}`}
                          onClick={() => toggle(opt)}
                        >
                          <span className="filter-check">{filters.includes(opt) && <Check style={{ width: 12, height: 12 }} />}</span>
                          {opt}
                        </div>
                      ))}
                    </div>
                  ))}
                  {groups.length === 0 && <div className="filter-empty">Sonuç bulunamadı</div>}
                </div>

                <div className="filter-dropdown__foot">
                  <span>{filters.length} seçili</span>
                  <span className="filter-clear" onClick={() => onFilters([])}>
                    Temizle
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="page-header__right">
        <div className="btn btn--ghost">
          <Download style={{ width: 15, height: 15 }} />
          <span>Dışa Aktar</span>
        </div>
        <div className="btn btn--primary">
          <Plus style={{ width: 15, height: 15 }} />
          <span>Yeni Kayıt</span>
        </div>
      </div>
    </div>
  )
}

/* ---------- Data Table (sayfalama kontrollü) ---------- */

function DataTable({ page, onPage }: { page: number; onPage: (p: number) => void }) {
  const pages = [1, 2, 3]

  return (
    <div className="table-card">
      <div className="table-card__head">
        <div>
          <h2 className="table-card__title">Çalışanlar</h2>
          <p className="table-card__sub">Tüm ekip üyelerini tek yerden görüntüleyin.</p>
        </div>
        <div className="table-card__meta">
          <div className="chip">Toplam 8</div>
          <div className="icon-box icon-box--small" title="Sütunlar">
            <Layers style={{ width: 15, height: 15 }} />
          </div>
          <div className="icon-box icon-box--small" title="Yenile">
            <Menu style={{ width: 15, height: 15 }} />
          </div>
        </div>
      </div>

      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th className="col-user">
                <span>Kullanıcı</span>
                <ArrowUpDown style={{ width: 13, height: 13 }} className="th-sort" />
              </th>
              <th>E-posta</th>
              <th>Rol</th>
              <th>
                <span>Durum</span>
                <ArrowUpDown style={{ width: 13, height: 13 }} className="th-sort" />
              </th>
              <th>Son Aktif</th>
              <th className="col-actions" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.email}>
                <td>
                  <div className="cell-user">
                    <div className="avatar" style={{ background: row.color }}>
                      {row.name.charAt(0)}
                    </div>
                    <div>
                      <div className="cell-user__name">{row.name}</div>
                      <div className="cell-user__meta">ID #{String(1042 + rows.indexOf(row))}</div>
                    </div>
                  </div>
                </td>
                <td className="cell-muted">{row.email}</td>
                <td>
                  <span className="role-pill">{row.role}</span>
                </td>
                <td>
                  <span className={`status status--${statusStyle[row.status]}`}>
                    <span className="status__dot" />
                    {row.status}
                  </span>
                </td>
                <td className="cell-muted">{row.active}</td>
                <td>
                  <div className="row-actions">
                    <div className="icon-box icon-box--tiny" title="Görüntüle">
                      <Eye style={{ width: 15, height: 15 }} />
                    </div>
                    <div className="icon-box icon-box--tiny" title="Diğer">
                      <MoreHorizontal style={{ width: 15, height: 15 }} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-card__foot">
        <span className="foot-info">8 kayıttan 1–8 arası gösteriliyor</span>
        <div className="pagination">
          <div className="page-arrow" title="Önceki" onClick={() => page > 1 && onPage(page - 1)}>
            <ChevronLeft style={{ width: 15, height: 15 }} />
          </div>
          {pages.map((p) => (
            <div key={p} className={`page-num ${page === p ? "page-num--active" : ""}`} onClick={() => onPage(p)}>
              {p}
            </div>
          ))}
          <div className="page-arrow" title="Sonraki" onClick={() => page < pages.length && onPage(page + 1)}>
            <ChevronRight style={{ width: 15, height: 15 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Sekme Çubuğu (footer üstü) ---------- */

interface TabState {
  collapsed: boolean
  dark: boolean
  openKey: string | null
  filters: string[]
  filterQuery: string
  search: string
  page: number
  pageName: string
}

interface Tab {
  id: number
  state: TabState
}

function TabBar({
  tabs,
  activeId,
  onSelect,
  onAdd,
  onClose,
}: {
  tabs: Tab[]
  activeId: number
  onSelect: (id: number) => void
  onAdd: () => void
  onClose: (id: number) => void
}) {
  return (
    <div className="g-tabs">
      {tabs.map((t) => (
        <div key={t.id} className={`tab ${t.id === activeId ? "tab--active" : ""}`} onClick={() => onSelect(t.id)}>
          <span className="tab__icon">
            <LayoutGrid style={{ width: 13, height: 13 }} />
          </span>
          <span className="tab__name">{t.state.pageName}</span>
          {tabs.length > 1 && (
            <span
              className="tab__close"
              title="Sekmeyi kapat"
              onClick={(e) => {
                e.stopPropagation()
                onClose(t.id)
              }}
            >
              <X style={{ width: 13, height: 13 }} />
            </span>
          )}
        </div>
      ))}
      <div className="tab-add" onClick={onAdd} title="Yeni sekme">
        <Plus style={{ width: 15, height: 15 }} />
      </div>
      <div className="g-tabs__spacer" />
      <span className="g-tabs__info">{tabs.length} sekme</span>
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

/* ---------- Tema 2 (App — sekmeli workspace) ---------- */

const initialTabState: TabState = {
  collapsed: false,
  dark: false,
  openKey: "Analizler",
  filters: ["Aktif", "Yazılım Mühendisi", "Ürün Tasarımcısı"],
  filterQuery: "",
  search: "",
  page: 1,
  pageName: "Çalışanlar",
}

function Tema2() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, state: { ...initialTabState } }])
  const [activeId, setActiveId] = useState(1)
  const rootRef = useRef<HTMLDivElement>(null)

  const active = tabs.find((t) => t.id === activeId) || tabs[0]
  const s = active.state

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<TabState>) =>
    setTabs((ts) => ts.map((t) => (t.id === activeId ? { ...t, state: { ...t.state, ...patchObj } } : t)))

  const addTab = () => {
    const nextId = Math.max(...tabs.map((t) => t.id), 0) + 1
    const newTab: Tab = { id: nextId, state: { ...s } }
    setTabs([...tabs, newTab])
    setActiveId(nextId)
  }

  const closeTab = (id: number) => {
    if (tabs.length <= 1) return
    const remaining = tabs.filter((t) => t.id !== id)
    setTabs(remaining)
    if (id === activeId) {
      const idx = tabs.findIndex((t) => t.id === id)
      const next = remaining[Math.min(idx, remaining.length - 1)]
      setActiveId(next.id)
    }
  }

  return (
    <div ref={rootRef} data-theme="light" className="tema2-root app">
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
            <div className="main__inner">
              <Breadcrumb pageName={s.pageName} />
              <PageHeader
                search={s.search}
                onSearch={(v) => patch({ search: v })}
                filters={s.filters}
                onFilters={(v) => patch({ filters: v })}
                filterQuery={s.filterQuery}
                onFilterQuery={(v) => patch({ filterQuery: v })}
              />
              <DataTable page={s.page} onPage={(p) => patch({ page: p })} />
            </div>
          </main>
          <TabBar tabs={tabs} activeId={activeId} onSelect={setActiveId} onAdd={addTab} onClose={closeTab} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema2 }
