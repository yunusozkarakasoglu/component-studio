/**
 * NumberField
 * Saf React bileşen (bağımlılıksız).
 * Artır/azalt butonlu sayı girişi — uluslararası biçimlendirme + doğrulama.
 *   <NumberField defaultValue={1024} minValue={0} step={10} formatOptions={{style: "currency", currency: "EUR"}}>
 *     <Label>Width</Label>
 *     <NumberFieldGroup>
 *       <NumberFieldDecrementButton />
 *       <NumberFieldInput className="w-[120px]" />
 *       <NumberFieldIncrementButton />
 *     </NumberFieldGroup>
 *     <Description>…</Description>
 *     <FieldError>…</FieldError>
 *   </NumberField>
 * Özellikler: value/defaultValue/onChange (kontrollü) · minValue/maxValue/step ·
 * formatOptions (currency/percent/decimal/unit, Intl.NumberFormat) · isRequired ·
 * isInvalid · isDisabled · isReadOnly · variant (primary/secondary) · fullWidth ·
 * render prop · children render prop · data-invalid/disabled/focus-within.
 * @id 309
 * @category Form Elemanları
 * @subcategory NumberField
 */
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "@/components/ui/icons"

/* ---------- Types ---------- */

type NumberFieldVariant = "primary" | "secondary"

interface NumberFieldRenderProps {
  isDisabled: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isRequired: boolean
  isFocused: boolean
  isFocusWithin: boolean
  isFocusVisible: boolean
  value: number | undefined
  minValue: number | undefined
  maxValue: number | undefined
  step: number
}

interface NumberFieldContextValue extends NumberFieldRenderProps {
  setValue: (v: number | undefined) => void
  name?: string
  variant: NumberFieldVariant
  fullWidth: boolean
  autoFocus?: boolean
  formatOptions?: Intl.NumberFormatOptions
  locale?: string
  isDisabled: boolean
  isReadOnly: boolean
  isRequired: boolean
  isInvalid: boolean
  setFocusWithin: (v: boolean) => void
  increment: () => void
  decrement: () => void
  formatValue: (v: number) => string
  parseValue: (raw: string) => number | undefined
}

const NumberFieldContext = createContext<NumberFieldContextValue | null>(null)

/** Compound parçalarından state erişimi */
function useNumberField(): NumberFieldContextValue | null {
  return useContext(NumberFieldContext)
}

interface NumberFieldProps {
  children?: ReactNode | ((values: NumberFieldRenderProps) => ReactNode)
  className?: string
  style?: CSSProperties
  fullWidth?: boolean
  id?: string
  /** Kök DOM elementini override eder */
  render?: (props: Record<string, unknown>) => ReactNode
  isRequired?: boolean
  isInvalid?: boolean
  validate?: (value: number) => string | true | null | undefined
  value?: number
  defaultValue?: number
  onChange?: (value: number | undefined) => void
  minValue?: number
  maxValue?: number
  step?: number
  formatOptions?: Intl.NumberFormatOptions
  locale?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  name?: string
  autoFocus?: boolean
  variant?: NumberFieldVariant
}

function NumberField({
  children,
  className,
  style,
  fullWidth = false,
  id,
  render,
  isRequired = false,
  isInvalid,
  validate,
  value: valueProp,
  defaultValue,
  onChange,
  minValue,
  maxValue,
  step = 1,
  formatOptions,
  locale = "tr-TR",
  isDisabled = false,
  isReadOnly = false,
  name,
  autoFocus,
  variant = "primary",
}: NumberFieldProps) {
  const [internalValue, setInternalValue] = useState<number | undefined>(defaultValue)
  const [focusWithin, setFocusWithin] = useState(false)

  const value = valueProp ?? internalValue
  const setValue = useCallback(
    (v: number | undefined) => {
      setInternalValue(v)
      onChange?.(v)
    },
    [onChange]
  )

  // validate fonksiyonu
  const vError = validate ? validate(value ?? 0) : null
  const resolvedInvalid = isInvalid ?? (validate != null && vError !== true && vError != null)

  const clamp = (n: number) => {
    if (minValue != null && n < minValue) return minValue
    if (maxValue != null && n > maxValue) return maxValue
    return n
  }

  const increment = useCallback(() => {
    if (isDisabled || isReadOnly) return
    setValue(clamp((value ?? 0) + step))
  }, [isDisabled, isReadOnly, value, step, setValue])
  const decrement = useCallback(() => {
    if (isDisabled || isReadOnly) return
    setValue(clamp((value ?? 0) - step))
  }, [isDisabled, isReadOnly, value, step, setValue])

  const formatValue = useCallback(
    (v: number) => {
      if (!formatOptions) return String(v)
      try {
        return new Intl.NumberFormat(locale, formatOptions).format(v)
      } catch {
        return String(v)
      }
    },
    [formatOptions, locale]
  )

  const parseValue = useCallback(
    (raw: string): number | undefined => {
      const cleaned = raw.replace(/[^\d.,-]/g, "").replace(",", ".")
      if (cleaned === "" || cleaned === "-" || cleaned === ".") return undefined
      const n = Number(cleaned)
      if (isNaN(n)) return undefined
      return formatOptions?.style === "percent" ? n / 100 : n
    },
    [formatOptions]
  )

  const renderProps: NumberFieldRenderProps = {
    isDisabled,
    isInvalid: resolvedInvalid,
    isReadOnly,
    isRequired,
    isFocused: focusWithin,
    isFocusWithin: focusWithin,
    isFocusVisible: false,
    value,
    minValue,
    maxValue,
    step,
  }

  const contextValue: NumberFieldContextValue = {
    ...renderProps,
    setValue,
    name,
    variant,
    fullWidth,
    autoFocus,
    formatOptions,
    locale,
    setFocusWithin,
    increment,
    decrement,
    formatValue,
    parseValue,
  }

  const rootProps: Record<string, unknown> = {
    "data-slot": "number-field",
    "data-invalid": resolvedInvalid ? "true" : undefined,
    "data-disabled": isDisabled ? "true" : undefined,
    "data-focus-within": focusWithin ? "true" : undefined,
    id,
    style,
    className: cn("flex flex-col gap-1.5", fullWidth && "w-full", className),
  }

  const content = typeof children === "function" ? children(renderProps) : children

  return (
    <NumberFieldContext.Provider value={contextValue}>
      {render ? render({ ...rootProps, children: content }) : <div {...rootProps}>{content}</div>}
    </NumberFieldContext.Provider>
  )
}

/* ---------- Group ---------- */

interface NumberFieldGroupProps {
  children?: ReactNode
  className?: string
}

function NumberFieldGroup({ children, className }: NumberFieldGroupProps) {
  const ctx = useNumberField()
  const variant = ctx?.variant ?? "primary"
  const invalid = ctx?.isInvalid ?? false
  const disabled = ctx?.isDisabled ?? false
  return (
    <div
      data-slot="number-field-group"
      className={cn(
        "inline-flex h-10 w-full items-center overflow-hidden rounded-lg border border-border bg-background transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
        variant === "secondary" && "border-transparent bg-muted/60",
        invalid && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/30",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {children}
    </div>
  )
}

/* ---------- Input ---------- */

interface NumberFieldInputProps {
  className?: string
  placeholder?: string
}

function NumberFieldInput({ className, placeholder }: NumberFieldInputProps) {
  const ctx = useNumberField()
  const [isFocused, setIsFocused] = useState(false)
  const [raw, setRaw] = useState("")

  if (!ctx) return null
  const { value, setValue, isDisabled, isReadOnly, isRequired, name, autoFocus } = ctx

  const display = isFocused ? raw : value != null ? ctx.formatValue(value) : ""

  return (
    <input
      type="text"
      inputMode="decimal"
      autoComplete="off"
      data-slot="number-field-input"
      value={display}
      placeholder={placeholder}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      name={name}
      autoFocus={autoFocus}
      aria-invalid={ctx.isInvalid || undefined}
      onChange={(e) => {
        const s = e.target.value
        setRaw(s)
        setValue(ctx.parseValue(s))
      }}
      onFocus={(e) => {
        setIsFocused(true)
        setRaw(value != null ? String(value) : "")
        ctx.setFocusWithin(true)
        e.target.select()
      }}
      onBlur={() => {
        setIsFocused(false)
        setRaw("")
        ctx.setFocusWithin(false)
      }}
      className={cn(
        "w-full min-w-0 flex-1 rounded-none border-0 bg-transparent px-3 py-2 text-sm text-foreground tabular-nums outline-none placeholder:text-muted-foreground",
        className
      )}
    />
  )
}

/* ---------- Artır/Azalt butonları ---------- */

interface NumberFieldButtonProps {
  className?: string
  children?: ReactNode
}

function NumberFieldIncrementButton({ className, children }: NumberFieldButtonProps) {
  const ctx = useNumberField()
  if (!ctx) return null
  return (
    <button
      type="button"
      data-slot="number-field-increment"
      aria-label="Artır"
      tabIndex={-1}
      disabled={ctx.isDisabled || ctx.isReadOnly}
      onClick={ctx.increment}
      className={cn(
        "flex h-full w-10 shrink-0 items-center justify-center rounded-none border-0 border-l border-border bg-transparent text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children ?? <Plus className="size-4" aria-hidden="true" />}
    </button>
  )
}

function NumberFieldDecrementButton({ className, children }: NumberFieldButtonProps) {
  const ctx = useNumberField()
  if (!ctx) return null
  return (
    <button
      type="button"
      data-slot="number-field-decrement"
      aria-label="Azalt"
      tabIndex={-1}
      disabled={ctx.isDisabled || ctx.isReadOnly}
      onClick={ctx.decrement}
      className={cn(
        "flex h-full w-10 shrink-0 items-center justify-center rounded-none border-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children ?? <Minus className="size-4" aria-hidden="true" />}
    </button>
  )
}

export {
  NumberField,
  NumberFieldDecrementButton,
  NumberFieldGroup,
  NumberFieldIncrementButton,
  NumberFieldInput,
  useNumberField,
}
export type { NumberFieldGroupProps, NumberFieldProps, NumberFieldRenderProps, NumberFieldVariant }
