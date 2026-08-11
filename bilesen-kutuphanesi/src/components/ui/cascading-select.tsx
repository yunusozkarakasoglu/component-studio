/**
 * CascadingSelect
 * Saf React bileşen (bağımlılıksız).
 * Koşullu / bağımlı seçim: üst seçenek seçilince alt seçenekler ikinci select'te belirir.
 * Örnek: İl seçince o ile bağlı ilçeler ikinci alanda listelenir (İstanbul, İzmir, Ankara).
 *   <CascadingSelect />
 *   <CascadingSelect data={VERI} label="Ülke" childLabel="Şehir" />
 * @id 2079
 * @category Özel Komponentler
 * @subcategory CascadingSelect
 * @source ozel
 * @tags seçim, koşullu, dropdown, il-ilçe, dropdown2
 */
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CascadingSelectOption {
  value: string
  label: string
  children?: CascadingSelectOption[]
}

interface CascadingSelectProps {
  /** Hiyerarşik veri: her seçeneğin kendi alt seçenekleri (varsayılan: İl → İlçe) */
  data?: CascadingSelectOption[]
  /** Üst seçim etiketi */
  label?: string
  /** Alt seçim etiketi */
  childLabel?: string
  placeholder?: string
  childPlaceholder?: string
  /** Kontrollü üst değer */
  value?: string
  /** Kontrollü alt değer */
  childValue?: string
  onValueChange?: (value: string) => void
  onChildValueChange?: (value: string) => void
  disabled?: boolean
  className?: string
}

/** Örnek veri: İstanbul, İzmir, Ankara ve ilçeleri */
const TURKIYE_IL_ILCE_VERISI: CascadingSelectOption[] = [
  {
    value: "istanbul",
    label: "İstanbul",
    children: [
      "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler",
      "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü",
      "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
      "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane",
      "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
      "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla",
      "Ümraniye", "Üsküdar", "Zeytinburnu",
    ].map((ad) => ({ value: ad.toLocaleLowerCase("tr"), label: ad })),
  },
  {
    value: "izmir",
    label: "İzmir",
    children: [
      "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ",
      "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça",
      "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa",
      "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere",
      "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla",
    ].map((ad) => ({ value: ad.toLocaleLowerCase("tr"), label: ad })),
  },
  {
    value: "ankara",
    label: "Ankara",
    children: [
      "Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere",
      "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı",
      "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam",
      "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar",
      "Yenimahalle",
    ].map((ad) => ({ value: ad.toLocaleLowerCase("tr"), label: ad })),
  },
]

const SELECT_BASE = cn(
  "h-9 w-full cursor-pointer appearance-none rounded-md border border-border bg-background px-3 pr-8 text-sm text-foreground shadow-xs transition-colors outline-none",
  "bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]",
  "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
  "disabled:cursor-not-allowed disabled:opacity-50"
)

const CHEVRON = "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"

function CascadingSelect({
  data = TURKIYE_IL_ILCE_VERISI,
  label = "İl",
  childLabel = "İlçe",
  placeholder = "İl seçin",
  childPlaceholder = "Önce il seçin",
  value,
  childValue,
  onValueChange,
  onChildValueChange,
  disabled,
  className,
}: CascadingSelectProps) {
  const [il, setIl] = useState("")
  const [ilce, setIlce] = useState("")
  const seciliIl = data.find((d) => d.value === (value ?? il))
  const altlar = seciliIl?.children ?? []
  const ilceDeger = childValue ?? ilce
  const seciliIlce = altlar.find((a) => a.value === ilceDeger)

  function ilDegisti(v: string) {
    setIl(v)
    setIlce("")
    onValueChange?.(v)
    onChildValueChange?.("")
  }

  return (
    <div data-slot="cascading-select" className={cn("flex w-full flex-col gap-3", className)}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cs-il" className="text-sm font-medium text-foreground">{label}</label>
        <select
          id="cs-il"
          aria-label={label}
          value={value ?? il}
          onChange={(e) => ilDegisti(e.target.value)}
          disabled={disabled}
          className={cn(SELECT_BASE, value !== undefined && ilce && "border-blue-500")}
          style={{ backgroundImage: CHEVRON }}
        >
          <option value="" disabled>{placeholder}</option>
          {data.map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cs-ilce" className="text-sm font-medium text-foreground">{childLabel}</label>
        <select
          id="cs-ilce"
          aria-label={childLabel}
          value={ilceDeger}
          onChange={(e) => { setIlce(e.target.value); onChildValueChange?.(e.target.value) }}
          disabled={disabled || !seciliIl}
          className={cn(SELECT_BASE, seciliIl && "cursor-pointer")}
          style={{ backgroundImage: CHEVRON }}
        >
          {!seciliIl && <option value="">{childPlaceholder}</option>}
          {seciliIl && altlar.length === 0 && <option value="" disabled>{childLabel} yok</option>}
          {seciliIl && altlar.length > 0 && (
            <>
              <option value="" disabled>{childLabel} seçin</option>
              {altlar.map((a) => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </>
          )}
        </select>
        {!seciliIl && <p className="text-xs text-muted-foreground">Önce {label.toLowerCase()} seçin; {childLabel.toLowerCase()}ler burada listelenir.</p>}
      </div>

      {seciliIlce && (
        <p className="text-xs text-emerald-600">
          Seçim: <span className="font-medium">{seciliIl?.label}</span> / <span className="font-medium">{seciliIlce.label}</span>
        </p>
      )}
    </div>
  )
}

export { CascadingSelect, TURKIYE_IL_ILCE_VERISI }
export type { CascadingSelectOption, CascadingSelectProps }
