/**
 * ProgressBar
 * Saf React bileşen (bağımlılıksız).
 * Yatay ilerleme çubuğu — Label/Output/Track/Fill compound.
 *   <ProgressBar aria-label="Loading" className="w-64" value={60}>
 *     <Label>Loading</Label>
 *     <ProgressBarOutput />
 *     <ProgressBarTrack>
 *       <ProgressBarFill />
 *     </ProgressBarTrack>
 *   </ProgressBar>
 * Özellikler: value/min/max · isIndeterminate (belirsiz) · size (sm/md/lg) ·
 * color (default/accent/success/warning/danger) · role=progressbar +
 * aria-valuenow.
 * @id 530
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type ProgressBarSize = "sm" | "md" | "lg"
type ProgressColor = "default" | "accent" | "success" | "warning" | "danger"

interface ProgressBarContextValue {
  value: number
  min: number
  max: number
  isIndeterminate: boolean
  size: ProgressBarSize
  color: ProgressColor
}

const ProgressBarContext = createContext<ProgressBarContextValue | null>(null)

function useProgressBar(): ProgressBarContextValue {
  const ctx = useContext(ProgressBarContext)
  if (!ctx) throw new Error("useProgressBar, <ProgressBar> içinde kullanılmalı")
  return ctx
}

interface ProgressBarProps {
  children?: ReactNode
  className?: string
  value: number
  min?: number
  max?: number
  isIndeterminate?: boolean
  size?: ProgressBarSize
  color?: ProgressColor
  "aria-label"?: string
}

const trackSizeClass: Record<ProgressBarSize, string> = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
}

const fillColorClass: Record<ProgressColor, string> = {
  default: "bg-foreground",
  accent: "bg-blue-600",
  success: "bg-emerald-600",
  warning: "bg-amber-500",
  danger: "bg-red-600",
}

function ProgressBar({
  children,
  className,
  value,
  min = 0,
  max = 100,
  isIndeterminate = false,
  size = "md",
  color = "default",
  ...aria
}: ProgressBarProps) {
  const contextValue: ProgressBarContextValue = { value, min, max, isIndeterminate, size, color }
  return (
    <ProgressBarContext.Provider value={contextValue}>
      <div
        data-slot="progress-bar"
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : value}
        aria-valuemin={min}
        aria-valuemax={max}
        className={cn("flex flex-col gap-1.5", className)}
        {...aria}
      >
        {children}
      </div>
    </ProgressBarContext.Provider>
  )
}

/* ---------- Output ---------- */

interface ProgressBarOutputProps {
  className?: string
}

function ProgressBarOutput({ className }: ProgressBarOutputProps) {
  const ctx = useProgressBar()
  const pct = Math.round(((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100)
  return <output data-slot="progress-bar-output" className={cn("text-sm text-muted-foreground", className)}>{ctx.isIndeterminate ? "…" : `${pct}%`}</output>
}

/* ---------- Track ---------- */

interface ProgressBarTrackProps {
  children?: ReactNode
  className?: string
}

function ProgressBarTrack({ children, className }: ProgressBarTrackProps) {
  const ctx = useProgressBar()
  return (
    <div
      data-slot="progress-bar-track"
      className={cn("w-full overflow-hidden rounded-full bg-muted", trackSizeClass[ctx.size], className)}
    >
      {children}
    </div>
  )
}

/* ---------- Fill ---------- */

interface ProgressBarFillProps {
  className?: string
}

function ProgressBarFill({ className }: ProgressBarFillProps) {
  const ctx = useProgressBar()
  const pct = Math.max(0, Math.min(100, ((ctx.value - ctx.min) / (ctx.max - ctx.min)) * 100))
  return (
    <div
      data-slot="progress-bar-fill"
      data-indeterminate={ctx.isIndeterminate ? "true" : undefined}
      className={cn(
        "h-full rounded-full transition-[width] duration-300",
        fillColorClass[ctx.color],
        ctx.isIndeterminate && "w-1/3 animate-pulse",
        className
      )}
      style={ctx.isIndeterminate ? undefined : { width: `${pct}%` }}
    />
  )
}

export { ProgressBar, ProgressBarFill, ProgressBarOutput, ProgressBarTrack, useProgressBar }
export type { ProgressBarFillProps, ProgressBarOutputProps, ProgressBarProps, ProgressBarSize, ProgressColor }
