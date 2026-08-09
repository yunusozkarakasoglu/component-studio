/**
 * Tema8 (NovaPanel — Form Sihirbazı) — Sayfa layout şablonu (Tema 8)
 * Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts → App.jsx + styles.css)
 * Onboarding yapısı — adım göstergesi + form alanı + geri/ileri.
 * Tema 2 tasarım dili (NovaPanel) korunur.
 * İkonlar kendi setimizden; stil tema8.css'te (scoped).
 * @id 1846
 * @category Layout
 * @subcategory Tema8
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
import "./tema8.css"

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
  { icon: "user", label: "Hesap", active: true },
  { icon: "layers", label: "Profil" },
  { icon: "grid", label: "Plan" },
  { icon: "check", label: "Onay" },
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

/* ---------- Sihirbaz verileri ---------- */

const steps = ["Hesap", "Profil", "Plan", "Onay"]

const plans = [
  { id: "temel", name: "Temel", price: 0, per: "aylık" },
  { id: "pro", name: "Pro", price: 29, per: "aylık" },
  { id: "ekip", name: "Ekip", price: 99, per: "aylık" },
]

function WizardContent({ step, form, setForm, onNext, onBack, onDone }: {
  step: number
  form: { name: string; email: string; company: string; role: string; plan: string }
  setForm: (p: Partial<typeof form>) => void
  onNext: () => void
  onBack: () => void
  onDone: () => void
}) {
  const isLast = step === steps.length - 1

  return (
    <div className="wizard-main">
      <div className="wizard-step">
        {steps.map((s, i) => (
          <div key={s} className="wizard-step__node">
            {i > 0 && <div className={`wizard-step__line ${i <= step ? "wizard-step__line--done" : ""}`} />}
            <div className={`wizard-step__circle ${i === step ? "wizard-step__circle--active" : ""} ${i < step ? "wizard-step__circle--done" : ""}`}>
              {i < step ? <Check style={{ width: 14, height: 14 }} /> : i + 1}
            </div>
            <span className={`wizard-step__label ${i === step ? "wizard-step__label--active" : ""}`}>{s}</span>
          </div>
        ))}
      </div>

      <div className="wizard-card">
        {step === 0 && (
          <>
            <div className="wizard-card__title">Hesap oluştur</div>
            <div className="wizard-card__sub">NovaPanel'e katılmak için temel bilgileri girin.</div>
            <label className="wizard-field">
              <span className="wizard-field__label">Ad Soyad</span>
              <input className="wizard-input" value={form.name} onChange={(e) => setForm({ name: e.target.value })} placeholder="Elif Yılmaz" />
            </label>
            <label className="wizard-field">
              <span className="wizard-field__label">E-posta</span>
              <input className="wizard-input" value={form.email} onChange={(e) => setForm({ email: e.target.value })} placeholder="elif@ornek.com" />
            </label>
          </>
        )}
        {step === 1 && (
          <>
            <div className="wizard-card__title">Profil bilgileri</div>
            <div className="wizard-card__sub">Şirket ve rolünüzü belirtin.</div>
            <label className="wizard-field">
              <span className="wizard-field__label">Şirket</span>
              <input className="wizard-input" value={form.company} onChange={(e) => setForm({ company: e.target.value })} placeholder="Nova Yazılım" />
            </label>
            <label className="wizard-field">
              <span className="wizard-field__label">Rol</span>
              <input className="wizard-input" value={form.role} onChange={(e) => setForm({ role: e.target.value })} placeholder="Ürün Tasarımcısı" />
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <div className="wizard-card__title">Planını seç</div>
            <div className="wizard-card__sub">İstediğin zaman değiştirebilirsin.</div>
            <div className="wizard-plans">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={`wizard-plan ${form.plan === p.id ? "wizard-plan--active" : ""}`}
                  onClick={() => setForm({ plan: p.id })}
                >
                  <div className="wizard-plan__name">{p.name}</div>
                  <div className="wizard-plan__price">₺{p.price}</div>
                  <div className="wizard-plan__per">{p.per}</div>
                </div>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="wizard-card__title">Bilgilerini doğrula</div>
            <div className="wizard-card__sub">Her şey doğruysa devam et.</div>
            <div className="wizard-summary">
              <div className="wizard-summary__row"><span>Ad Soyad</span><b>{form.name || "—"}</b></div>
              <div className="wizard-summary__row"><span>E-posta</span><b>{form.email || "—"}</b></div>
              <div className="wizard-summary__row"><span>Şirket</span><b>{form.company || "—"}</b></div>
              <div className="wizard-summary__row"><span>Rol</span><b>{form.role || "—"}</b></div>
              <div className="wizard-summary__row"><span>Plan</span><b>{plans.find((p) => p.id === form.plan)?.name ?? "—"}</b></div>
            </div>
          </>
        )}
        {step === 4 && (
          <div className="wizard-done">
            <div className="wizard-done__icon">
              <Check style={{ width: 24, height: 24 }} />
            </div>
            <div className="wizard-done__title">Tebrikler, hazırsın! 🎉</div>
            <div className="wizard-done__sub">NovaPanel hesabın oluşturuldu. Giriş yaparak başla.</div>
          </div>
        )}
      </div>

      {step < 4 && (
        <div className="wizard-actions">
          <button type="button" className="wizard-btn wizard-btn--back" onClick={onBack} disabled={step === 0}>
            ← Geri
          </button>
          <button type="button" className="wizard-btn wizard-btn--next" onClick={isLast ? onDone : onNext}>
            {isLast ? "Onayla ve Bitir" : "İleri →"}
          </button>
        </div>
      )}
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

const initialWizardState = {
  collapsed: false,
  dark: false,
  openKey: "Hesap" as string | null,
  pageName: "Hesap",
  step: 0,
  form: { name: "", email: "", company: "", role: "", plan: "pro" },
}

function Tema8() {
  const [s, setS] = useState(initialWizardState)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.setAttribute("data-theme", s.dark ? "dark" : "light")
  }, [s.dark])

  const patch = (patchObj: Partial<typeof s>) => setS((p) => ({ ...p, ...patchObj }))

  return (
    <div ref={rootRef} data-theme="light" className="tema8-root app">
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
            <WizardContent
              step={s.step}
              form={s.form}
              setForm={(p) => patch({ form: { ...s.form, ...p } })}
              onNext={() => patch({ step: s.step + 1 })}
              onBack={() => patch({ step: s.step - 1 })}
              onDone={() => patch({ step: 4 })}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Tema8 }
