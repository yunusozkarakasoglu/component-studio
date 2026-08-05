/**
 * InputOTP
 * Saf React bileşen (bağımlılıksız).
 * Tek seferlik doğrulama kodu girişi — gizli input + görsel slotlar.
 *   <InputOTP maxLength={6} onComplete={(code) => ...}>
 *     <InputOTPGroup>
 *       <InputOTPSlot index={0} />
 *       <InputOTPSlot index={1} />
 *       <InputOTPSlot index={2} />
 *     </InputOTPGroup>
 *     <InputOTPSeparator />
 *     <InputOTPGroup>
 *       <InputOTPSlot index={3} />
 *       <InputOTPSlot index={4} />
 *       <InputOTPSlot index={5} />
 *     </InputOTPGroup>
 *   </InputOTP>
 * Özellikler: value/defaultValue/onChange (kontrollü) · onComplete · maxLength ·
 * pattern (REGEXP_ONLY_*) · isDisabled · isInvalid · name · variant
 * (primary/secondary) · data-active/filled/disabled/invalid.
 * @id 355
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Pattern'ler ---------- */

const REGEXP_ONLY_DIGITS = /^\d+$/
const REGEXP_ONLY_CHARS = /^[a-zA-Z]+$/
const REGEXP_ONLY_DIGITS_AND_CHARS = /^[a-zA-Z0-9]+$/

/* ---------- Types ---------- */

type InputOTPVariant = "primary" | "secondary"

interface InputOTPContextValue {
  value: string
  maxLength: number
  isDisabled: boolean
  isInvalid: boolean
  variant: InputOTPVariant
  focused: boolean
  setFocused: (v: boolean) => void
}

const InputOTPContext = createContext<InputOTPContextValue | null>(null)

function useInputOTP(): InputOTPContextValue {
  const ctx = useContext(InputOTPContext)
  if (!ctx) throw new Error("useInputOTP, <InputOTP> içinde kullanılmalı")
  return ctx
}

interface InputOTPProps {
  children?: ReactNode
  className?: string
  /** Zorunlu: slot sayısı */
  maxLength: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
  pattern?: RegExp
  name?: string
  autoFocus?: boolean
  variant?: InputOTPVariant
  placeholder?: string
}

function InputOTP({
  children,
  className,
  maxLength,
  value: valueProp,
  defaultValue = "",
  onChange,
  onComplete,
  isDisabled = false,
  isInvalid = false,
  pattern,
  name,
  autoFocus,
  variant = "primary",
}: InputOTPProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const value = valueProp ?? internalValue

  const handleChange = (raw: string) => {
    let next = raw
    if (pattern && !pattern.test(next)) {
      // pattern'e uymuyorsa: eski değerden uyumlu parçayı koru (sadece kabul edilebilirleri al)
      next = raw.split("").filter((c) => pattern.test(c)).join("")
    }
    next = next.slice(0, maxLength)
    setInternalValue(next)
    onChange?.(next)
    if (next.length === maxLength) onComplete?.(next)
  }

  const contextValue: InputOTPContextValue = {
    value,
    maxLength,
    isDisabled,
    isInvalid,
    variant,
    focused,
    setFocused,
  }

  return (
    <InputOTPContext.Provider value={contextValue}>
      <div
        data-slot="input-otp"
        data-disabled={isDisabled ? "true" : undefined}
        data-invalid={isInvalid ? "true" : undefined}
        className={cn("flex flex-col gap-3", className)}
      >
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isDisabled}
          name={name}
          autoFocus={autoFocus}
          aria-invalid={isInvalid || undefined}
          className="sr-only"
          tabIndex={0}
        />
        <div
          className="flex items-center gap-2"
          onClick={() => !isDisabled && inputRef.current?.focus()}
          role="group"
          aria-label="Doğrulama kodu"
        >
          {children}
        </div>
      </div>
    </InputOTPContext.Provider>
  )
}

/* ---------- Group ---------- */

interface InputOTPGroupProps {
  children?: ReactNode
  className?: string
}

function InputOTPGroup({ children, className }: InputOTPGroupProps) {
  return <div data-slot="input-otp-group" className={cn("flex items-center gap-2", className)}>{children}</div>
}

/* ---------- Slot ---------- */

interface InputOTPSlotProps {
  /** Sıfır tabanlı slot indeksi */
  index: number
  className?: string
}

function InputOTPSlot({ index, className }: InputOTPSlotProps) {
  const ctx = useInputOTP()
  const char = ctx.value[index] ?? ""
  const isActive = ctx.focused && index === ctx.value.length
  const isFilled = ctx.value.length > index

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive ? "true" : undefined}
      data-filled={isFilled ? "true" : undefined}
      data-disabled={ctx.isDisabled ? "true" : undefined}
      data-invalid={ctx.isInvalid ? "true" : undefined}
      className={cn(
        "flex size-11 items-center justify-center rounded-lg border border-border bg-background text-base font-semibold text-foreground tabular-nums",
        "transition-colors",
        variantClass[ctx.variant],
        isActive && "border-ring ring-3 ring-ring/40",
        ctx.isInvalid && "border-red-500 ring-3 ring-red-500/20",
        ctx.isDisabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {isActive ? <span className="animate-pulse">|</span> : char}
    </div>
  )
}

const variantClass: Record<InputOTPVariant, string> = {
  primary: "",
  secondary: "border-transparent bg-muted/60",
}

/* ---------- Separator ---------- */

interface InputOTPSeparatorProps {
  className?: string
}

function InputOTPSeparator({ className }: InputOTPSeparatorProps) {
  return <div data-slot="input-otp-separator" aria-hidden="true" className={cn("h-1 w-2 rounded-full bg-border", className)} />
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
  useInputOTP,
}
export type { InputOTPGroupProps, InputOTPProps, InputOTPSlotProps }
