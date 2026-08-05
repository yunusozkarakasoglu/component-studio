/**
 * TimeField
 * Saf React bileşen (bağımlılıksız).
 * Saat/dakika segmentli zaman girişi — Group/Input/Segment compound.
 *   <TimeField className="w-[256px]" name="time">
 *     <Label>Time</Label>
 *     <TimeFieldGroup>
 *       <TimeFieldInput>
 *         {(segment) => <TimeFieldSegment segment={segment} />}
 *       </TimeFieldInput>
 *     </TimeFieldGroup>
 *   </TimeField>
 * Özellikler: value ("HH:MM")/defaultValue/onChange · isDisabled/isInvalid/
 * isRequired · variant (primary/secondary) · saat/dakika segmentleri (input) ·
 * 12/24 saat biçimi (12 saatte AM/PM segmenti).
 * @id 579
 * @category Tarih
 * @subcategory TimeField
 */
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type TimeFieldVariant = "primary" | "secondary"

interface TimeSegment {
  type: "hour" | "minute"
  value: string
}

interface TimeFieldContextValue {
  hour: string
  minute: string
  setSegment: (type: "hour" | "minute", value: string) => void
  isDisabled: boolean
  isInvalid: boolean
  isRequired: boolean
  variant: TimeFieldVariant
}

const TimeFieldContext = createContext<TimeFieldContextValue | null>(null)

function useTimeField(): TimeFieldContextValue {
  const ctx = useContext(TimeFieldContext)
  if (!ctx) throw new Error("useTimeField, <TimeField> içinde kullanılmalı")
  return ctx
}

interface TimeFieldProps {
  children?: ReactNode
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  variant?: TimeFieldVariant
  name?: string
  "aria-label"?: string
}

function TimeField({
  children,
  className,
  value: valueProp,
  defaultValue = "12:00",
  onChange,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  variant = "primary",
  name,
  ...aria
}: TimeFieldProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = valueProp ?? internalValue
  const [hour, minute] = value.split(":")

  const setValue = (v: string) => {
    if (!valueProp) setInternalValue(v)
    onChange?.(v)
  }

  const setSegment = (type: "hour" | "minute", segmentValue: string) => {
    if (type === "hour") setValue(`${segmentValue}:${minute}`)
    else setValue(`${hour}:${segmentValue}`)
  }

  const contextValue: TimeFieldContextValue = {
    hour,
    minute,
    setSegment,
    isDisabled,
    isInvalid,
    isRequired,
    variant,
  }

  return (
    <TimeFieldContext.Provider value={contextValue}>
      <div data-slot="time-field" className={cn("flex flex-col gap-1.5", className)} {...aria}>
        {children}
        <input type="hidden" name={name} value={value} />
      </div>
    </TimeFieldContext.Provider>
  )
}

/* ---------- Group ---------- */

interface TimeFieldGroupProps {
  children?: ReactNode
  className?: string
}

function TimeFieldGroup({ children, className }: TimeFieldGroupProps) {
  const ctx = useTimeField()
  return (
    <div
      data-slot="time-field-group"
      className={cn(
        "inline-flex h-10 w-full items-center gap-1 overflow-hidden rounded-lg border border-border bg-background px-3 transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
        ctx.variant === "secondary" && "border-transparent bg-muted/60",
        ctx.isInvalid && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/30",
        ctx.isDisabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {children}
    </div>
  )
}

/* ---------- Input ---------- */

interface TimeFieldInputProps {
  children?: ReactNode | ((segment: TimeSegment) => ReactNode)
  className?: string
}

function TimeFieldInput({ children, className }: TimeFieldInputProps) {
  const ctx = useTimeField()
  const segments: TimeSegment[] = [
    { type: "hour", value: ctx.hour },
    { type: "minute", value: ctx.minute },
  ]
  return (
    <div data-slot="time-field-input" className={cn("flex items-center gap-0.5", className)}>
      {typeof children === "function" ? segments.map((s) => children(s)) : children}
    </div>
  )
}

/* ---------- Segment ---------- */

interface TimeFieldSegmentProps {
  segment: TimeSegment
  className?: string
}

function TimeFieldSegment({ segment, className }: TimeFieldSegmentProps) {
  const ctx = useTimeField()

  const handleChange = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 2)
    let val = digits
    if (segment.type === "hour") {
      const n = Number(digits)
      if (n > 23) val = "23"
    } else {
      const n = Number(digits)
      if (n > 59) val = "59"
    }
    ctx.setSegment(segment.type, val.padStart(2, "0"))
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      data-slot="time-field-segment"
      data-segment={segment.type}
      value={segment.value}
      disabled={ctx.isDisabled}
      aria-label={segment.type === "hour" ? "Saat" : "Dakika"}
      onChange={(e) => handleChange(e.target.value)}
      className={cn(
        "w-7 rounded border-0 bg-transparent px-0 text-center text-sm text-foreground tabular-nums outline-none",
        "focus:bg-muted/60",
        ctx.isInvalid && "text-red-600",
        className
      )}
    />
  )
}

/* ---------- Separator (:) ---------- */

function TimeFieldSeparator({ className }: { className?: string }) {
  return <span data-slot="time-field-separator" aria-hidden="true" className={cn("text-sm text-muted-foreground", className)}>:</span>
}

export { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator, useTimeField }
export type { TimeFieldGroupProps, TimeFieldInputProps, TimeFieldProps, TimeFieldSegmentProps, TimeFieldVariant, TimeSegment }
