/**
 * AccordionSimple
 * HeroUI accordion'dan uyarlanmış — saf React implementasyonu (RAC bağımsız).
 * Compound API yerine sade API:
 *   <AccordionSimple>
 *     <AccordionSimpleItem title="Başlık" icon={<…/>} isDisabled>içerik</AccordionSimpleItem>
 *   </AccordionSimple>
 * Özellikler: allowsMultiple · isDisabled (kök + item) · kontrollü (value/onChange)
 * · özel ikon/gösterge · ayraçsız (divider={false}).
 * @id 090
 * @category Accordion
 */
import { createContext, useCallback, useContext, useId, useMemo, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

/* ---------- Tip tanımları ---------- */

interface AccordionSimpleProps {
  /** Açık item key'leri (kontrollü kullanım — itemKey prop'larıyla eşleşir) */
  value?: (string | number)[]
  /** Açık item'lar değişince (kontrollü kullanım) */
  onChange?: (keys: (string | number)[]) => void
  /** İlk açık item'lar (bağımsız kullanım) */
  defaultValue?: (string | number)[]
  /** Birden fazla item aynı anda açılabilir mi (varsayılan: false) */
  allowsMultiple?: boolean
  /** Tüm accordion'ı devre dışı bırakır */
  isDisabled?: boolean
  /** Item'lar arası ayraç çizgisi (varsayılan: true) */
  divider?: boolean
  /** Ayraç çizgilerini gizler (HeroUI hideSeparator karşılığı) */
  hideSeparator?: boolean
  /** Görünüm: default = çizgili liste · surface = kutulu (HeroUI surface) */
  variant?: "default" | "surface"
  className?: string
  children?: ReactNode
}

interface AccordionSimpleItemProps {
  /** Açık/kapalı durumu dışarıdan takip etmek için benzersiz key (kontrollü kullanım) */
  itemKey?: string | number
  title: ReactNode
  /** Başlık solundaki ikon (opsiyonel) */
  icon?: ReactNode
  /** Varsayılan chevron yerine özel gösterge (opsiyonel) — fonksiyon verilirse açık/kapalı durumunu alır */
  indicator?: ReactNode | ((open: boolean) => ReactNode)
  /** Tek item'ı devre dışı bırakır */
  isDisabled?: boolean
  className?: string
  children?: ReactNode
}

/* ---------- Context ---------- */

interface AccordionSimpleCtx {
  expanded: Set<string>
  toggle: (key: string) => void
  allowsMultiple: boolean
  rootDisabled: boolean
  divider: boolean
}

const AccordionSimpleContext = createContext<AccordionSimpleCtx | null>(null)

/* ---------- Kök bileşen ---------- */

function AccordionSimple({
  value,
  onChange,
  defaultValue = [],
  allowsMultiple = false,
  isDisabled = false,
  divider = true,
  hideSeparator = false,
  variant = "default",
  className,
  children,
}: AccordionSimpleProps) {
  const [internal, setInternal] = useState<(string | number)[]>(defaultValue)
  const controlled = value !== undefined
  const keys = controlled ? value : internal

  const expanded = useMemo(() => new Set(keys.map(String)), [keys])

  const toggle = useCallback(
    (key: string) => {
      if (isDisabled) return
      const next = new Set(expanded)
      if (next.has(key)) next.delete(key)
      else {
        if (!allowsMultiple) next.clear()
        next.add(key)
      }
      const arr = Array.from(next)
      if (controlled) onChange?.(arr)
      else setInternal(arr)
    },
    [expanded, allowsMultiple, isDisabled, controlled, onChange]
  )

  const effectiveDivider = divider && !hideSeparator
  const ctx = useMemo<AccordionSimpleCtx>(
    () => ({ expanded, toggle, allowsMultiple, rootDisabled: isDisabled, divider: effectiveDivider }),
    [expanded, toggle, allowsMultiple, isDisabled, effectiveDivider]
  )

  return (
    <AccordionSimpleContext.Provider value={ctx}>
      <div
        data-slot="accordion-simple"
        data-variant={variant}
        className={cn(
          "w-full",
          variant === "surface" && "rounded-xl border border-border/60 bg-muted/40 p-2 shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </AccordionSimpleContext.Provider>
  )
}

/* ---------- Item ---------- */

function AccordionSimpleItem({
  itemKey,
  title,
  icon,
  indicator,
  isDisabled,
  className,
  children,
}: AccordionSimpleItemProps) {
  const ctx = useContext(AccordionSimpleContext)
  const fallbackKey = useId()
  const key = String(itemKey ?? fallbackKey)
  const panelId = useId()
  const open = ctx?.expanded.has(key) ?? false
  const disabled = (ctx?.rootDisabled ?? false) || isDisabled

  return (
    <div data-slot="accordion-simple-item" className={cn((ctx?.divider ?? true) && "border-b last:border-b-0", className)}>
      <h3 className="flex">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          disabled={disabled}
          onClick={() => ctx?.toggle(key)}
          className="group/acc-simple flex flex-1 items-center justify-between gap-4 rounded-lg py-2.5 text-left text-sm font-medium outline-none transition-colors hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
        >
          <span className="flex min-w-0 items-center gap-2">
            {icon && <span className="shrink-0 text-muted-foreground">{icon}</span>}
            <span className="truncate">{title}</span>
          </span>
          {indicator ? (
            typeof indicator === "function" ? indicator(open) : indicator
          ) : (
            <ChevronDown
              data-slot="accordion-simple-indicator"
              className={cn("shrink-0 size-4 text-muted-foreground transition-transform duration-200", open && "rotate-180")}
            />
          )}
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={panelId}
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-2.5 text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export { AccordionSimple, AccordionSimpleItem }
export type { AccordionSimpleProps, AccordionSimpleItemProps }
