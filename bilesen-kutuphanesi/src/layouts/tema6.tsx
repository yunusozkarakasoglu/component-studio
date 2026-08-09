/**
 * Tema6 (NovaPanel — E-ticaret) — Sayfa layout şablonu (Tema 6)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Mağaza yapısı — kategori seçimi + ürün grid + sepet çubuğu.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema6.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema6
 * @source ozel
 */
import { useEffect, useRef, useState } from "react"
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  CalendarDays,
  ShoppingCart,
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
import "./tema6.css"

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
  cart: (s: number) => <ShoppingCart style={{ width: s, height: s }} />,
  x: (s: number) => <X style={{ width: s, height: s }} />,
  home: (s: number) => <Home style={{ width: s, height: s }} />,
}

/* ---------- Örnek veri ---------- */

type IconName = keyof typeof I

const navItems: { icon: IconName; label: string; active?: boolean; children?: string[] }[] = [
  { icon: "home", label: "Mağaza", active: true },
  { icon: "grid", label: "Kategoriler", children: ["Elektronik", "Moda", "Ev"] },
  { icon: "chart", label: "Satışlar" },
  { icon: "users", label: "Müşteriler" },
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

/* ---------- Mağaza verileri ---------- */

interface Product {
  id: number
  name: string
  cat: string
  price: number
  stars: number
  emoji: string
}

const products: Product[] = [
  { id: 1, name: "Kablosuz Kulaklık", cat: "Elektronik", price: 129, stars: 4.8, emoji: "🎧" },
  { id: 2, name: "Akıllı Saat", cat: "Elektronik", price: 249, stars: 4.6, emoji: "⌚" },
  { id: 3, name: "Bluetooth Hoparlör", cat: "Elektronik", price: 89, stars: 4.4, emoji: "🔊" },
  { id: 4, name: "Deri Cüzdan", cat: "Moda", price: 59, stars: 4.7, emoji: "👝" },
  { id: 5, name: "Spor Ayakkabı", cat: "Moda", price: 189, stars: 4.5, emoji: "👟" },
  { id: 6, name: "Örgü Kazak", cat: "Moda", price: 79, stars: 4.3, emoji: "🧶" },
  { id: 7, name: "Masa Lambası", cat: "Ev", price: 45, stars: 4.6, emoji: "💡" },
  { id: 8, name: "Seramik Vazo", cat: "Ev", price: 34, stars: 4.2, emoji: "🏺" },
]

const categories = ["Tümü", "Elektronik", "Moda", "Ev"]

function ShopContent({ cat, onCat, cartCount, cartTotal, onAdd, onCart }: {
  cat: string
  onCat: (c: string) => void
  cartCount: number
  cartTotal: number
  onAdd: (p: Product) => void
  onCart: () => void
}) {
  const list = cat === "Tümü" ? products : products.filter((p) => p.cat === cat)

  return (
    <div className="shop-main">
      <div className="shop-cats">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`shop-cat ${cat === c ? "shop-cat--active" : ""}`}
            onClick={() => onCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="shop-grid">
        {list.map((p) => (
          <div key={p.id} className="shop-card" onClick={() => onAdd(p)}>
            <div className="shop-card__img">{p.emoji}</div>
            <div className="shop-card__body">
              <div className="shop-card__name">{p.name}</div>
              <div className="shop-card__cat">{p.cat}</div>
              <div className="shop-card__foot">
                <span className="shop-card__price">₺{p.price}</span>
                <span className="shop-card__stars">★ {p.stars}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-cartbar">
        <span className="shop-cartbar__label">
          <ShoppingCart style={{ width: 16, height: 16 }} /> Sepet
        </span>
        <span className="shop-cartbar__count">{cartCount} ürün</span>
        <span className="shop-cartbar__total">₺{cartTotal}</span>
        <button type="button" className="shop-cartbar__btn" onClick={onCart}>
          Sepeti Gör
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

const initialShopState = {
  collapsed: false,
  dark: false,
  openKey: "Kategoriler" as string | null,
  pageName: "Mağaza",
  cat: "Tümü",
}

function Tema6() {
  const [s, setS] = useState(initialShopState)
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([])
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<typeof s>) => setS((p) => ({ ...p, ...patchObj }))

  const addToCart = (p: Product) =>
    setCart((c) => {
      const ex = c.find((x) => x.id === p.id)
      return ex ? c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x)) : [...c, { id: p.id, qty: 1 }]
    })

  const count = cart.reduce((a, c) => a + c.qty, 0)
  const total = cart.reduce((a, c) => a + c.qty * (products.find((p) => p.id === c.id)?.price ?? 0), 0)

  return (
    <div ref={rootRef} data-theme="light" className="tema6-root app">
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
            <ShopContent
              cat={s.cat}
              onCat={(c) => patch({ cat: c })}
              cartCount={count}
              cartTotal={total}
              onAdd={addToCart}
              onCart={() => window.alert(`Sepette ${count} ürün — toplam ₺${total}`)}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema6 }
