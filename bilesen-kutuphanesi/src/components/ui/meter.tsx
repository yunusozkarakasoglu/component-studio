/**
 * Meter
 * Saf React bileşen (bağımlılıksız).
 * Eşik değerli ilerleme ölçer — Label/Output/Track/Fill compound.
 *   <Meter aria-label="Storage" className="w-64" value={60}>
 *     <Label>Storage</Label>
 *     <MeterOutput />
 *     <MeterTrack><MeterFill /></MeterTrack>
 *   </Meter>
 * Özellikler: value/min/max · size (sm/md/lg) · color · role=meter +
 * aria-valuenow · output yüzde gösterimi.
 * @id 554
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type MeterSize = "sm" | "md" | "lg"
type MeterColor = "default" | "accent" | "success" | "warning" | "danger"

interface MeterContextValue {
  value: number
  min: number
  max: number
  size: MeterSize
  color: MeterColor
}

const MeterContext = createContext<MeterContextValue | null>(null)

function useMeter(): MeterContextValue {
  const ctx = useContext(MeterContext)
  if (!ctx) throw new Error("useMeter, <Meter> içinde kullanılmalı")
  return ctx
}

interface MeterProps {
  children?: ReactNode
  className?: string
  value: number
  min?: number
  max?: number
  size?: MeterSize
  color?: MeterColor
  "aria-label"?: string
}

const meterSizeClass: Record<MeterSize, string> = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
}

const meterColorClass: Record<MeterColor, string> = {
  default: "bg-foreground",
  accent: "bg-blue-600",
  success: "bg-emerald-600",
  warning: "bg-amber-500",
  danger: "bg-red-600",
}

function Meter({ children, className, value, min = 0, max = 100, size = "md", color = "default", ...aria }: MeterProps) {
  const contextValue: MeterContextValue = { value, min, max, size, color }
  return (
    <MeterContext.Provider value={contextValue}>
      <div
        data-slot="meter"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        className={cn("flex flex-col gap-1.5", className)}
        {...aria}
      >
        {children}
      </div>
    </MeterContext.Provider>
  )
}

/* ---------- Output ---------- */

function MeterOutput({ className }: { className?: string }) {
  const ctx = useMeter()
  const pct = Math.round(((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100)
  return <output data-slot="meter-output" className={cn("text-sm text-muted-foreground", className)}>{pct}%</output>
}

/* ---------- Track ---------- */

function MeterTrack({ children, className }: { children?: ReactNode; className?: string }) {
  const ctx = useMeter()
  return (
    <div data-slot="meter-track" className={cn("w-full overflow-hidden rounded-full bg-muted", meterSizeClass[ctx.size], className)}>
      {children}
    </div>
  )
}

/* ---------- Fill ---------- */

function MeterFill({ className }: { className?: string }) {
  const ctx = useMeter()
  const pct = Math.max(0, Math.min(100, ((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100))
  return (
    <div
      data-slot="meter-fill"
      className={cn("h-full rounded-full transition-[width] duration-300", meterColorClass[ctx.color], className)}
      style={{ width: `${pct}%` }}
    />
  )
}

export { Meter, MeterFill, MeterOutput, MeterTrack, useMeter }
export type { MeterColor, MeterProps, MeterSize }
