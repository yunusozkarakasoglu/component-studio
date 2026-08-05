/**
 * ProgressCircle
 * Saf React bileşen (bağımlılıksız).
 * Dairesel ilerleme göstergesi — SVG stroke-dasharray.
 *   <ProgressCircle aria-label="Loading" value={60} />
 * Özellikler: value/min/max · isIndeterminate (dönen) · size (sm/md/lg) ·
 * color (default/accent/success/warning/danger) · children (içerik/label) ·
 * role=progressbar + aria-valuenow.
 * @id 538
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type ProgressCircleSize = "sm" | "md" | "lg"
type ProgressCircleColor = "default" | "accent" | "success" | "warning" | "danger"

interface ProgressCircleContextValue {
  value: number
  min: number
  max: number
  isIndeterminate: boolean
  size: ProgressCircleSize
  color: ProgressCircleColor
}

const ProgressCircleContext = createContext<ProgressCircleContextValue | null>(null)

function useProgressCircle(): ProgressCircleContextValue {
  const ctx = useContext(ProgressCircleContext)
  if (!ctx) throw new Error("useProgressCircle, <ProgressCircle> içinde kullanılmalı")
  return ctx
}

interface ProgressCircleProps {
  children?: ReactNode
  className?: string
  value: number
  min?: number
  max?: number
  isIndeterminate?: boolean
  size?: ProgressCircleSize
  color?: ProgressCircleColor
  "aria-label"?: string
}

const circleSizeClass: Record<ProgressCircleSize, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
}

const circleColorClass: Record<ProgressCircleColor, string> = {
  default: "text-foreground",
  accent: "text-blue-600",
  success: "text-emerald-600",
  warning: "text-amber-500",
  danger: "text-red-600",
}

function ProgressCircle({
  children,
  className,
  value,
  min = 0,
  max = 100,
  isIndeterminate = false,
  size = "md",
  color = "default",
  ...aria
}: ProgressCircleProps) {
  const contextValue: ProgressCircleContextValue = { value, min, max, isIndeterminate, size, color }
  return (
    <ProgressCircleContext.Provider value={contextValue}>
      <div
        data-slot="progress-circle"
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : value}
        aria-valuemin={min}
        aria-valuemax={max}
        className={cn("relative inline-flex items-center justify-center", circleSizeClass[size], className)}
        {...aria}
      >
        {children}
      </div>
    </ProgressCircleContext.Provider>
  )
}

/* ---------- Svg (görsel halka) ---------- */

interface ProgressCircleSvgProps {
  className?: string
}

function ProgressCircleSvg({ className }: ProgressCircleSvgProps) {
  const ctx = useProgressCircle()
  const R = 15.9155 // çevre 100 birim (dasharray yüzdeyi doğrudan verir)
  const pct = Math.max(0, Math.min(100, ((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100))

  return (
    <svg
      data-slot="progress-circle-svg"
      viewBox="0 0 36 36"
      className={cn("size-full -rotate-90", ctx.isIndeterminate && "animate-spin", circleColorClass[ctx.color], className)}
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r={R} fill="none" strokeWidth="3.5" className="stroke-muted" />
      <circle
        cx="18"
        cy="18"
        r={R}
        fill="none"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="stroke-current"
        strokeDasharray={ctx.isIndeterminate ? "30 70" : `${pct} ${100 - pct}`}
      />
    </svg>
  )
}

/* ---------- Label (içerik) ---------- */

interface ProgressCircleLabelProps {
  className?: string
}

function ProgressCircleLabel({ className }: ProgressCircleLabelProps) {
  const ctx = useProgressCircle()
  const pct = Math.round(((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100)
  return (
    <span data-slot="progress-circle-label" className={cn("absolute text-[10px] font-semibold", className)}>
      {ctx.isIndeterminate ? "…" : `${pct}%`}
    </span>
  )
}

export { ProgressCircle, ProgressCircleLabel, ProgressCircleSvg, useProgressCircle }
export type { ProgressCircleColor, ProgressCircleLabelProps, ProgressCircleProps, ProgressCircleSize }
