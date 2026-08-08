/**
 * MtRingProgress
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Halka ilerleme — SVG segments, size, thickness, roundCaps, label.
 *   <MtRingProgress sections={[{ value: 70, color: "blue" }]} label="70%" />
 * @id 1505
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtRingSection {
  value: number
  color: string
}

interface MtRingProgressProps {
  sections?: MtRingSection[]
  size?: number
  thickness?: number
  roundCaps?: boolean
  label?: ReactNode
  className?: string
}

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

function arcPath(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, radius, endAngle)
  const end = polarToCartesian(cx, cy, radius, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1"
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

function MtRingProgress({ sections = [], size = 120, thickness = 12, roundCaps, label, className }: MtRingProgressProps) {
  const radius = (size - thickness) / 2
  const total = Math.min(100, sections.reduce((a, s) => a + s.value, 0))

  let startAngle = 0

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--border, #e5e7eb)" strokeWidth={thickness} />
        {sections.map((s, i) => {
          const sweep = (s.value / 100) * 360
          const path = arcPath(size / 2, size / 2, radius, startAngle, startAngle + sweep)
          startAngle += sweep
          return <path key={i} d={path} stroke={s.color} strokeWidth={thickness} fill="none" strokeLinecap={roundCaps ? "round" : "butt"} />
        })}
      </svg>
      {label && <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground">{label}</div>}
      <span className="sr-only">{total}%</span>
    </div>
  )
}

export { MtRingProgress }
export type { MtRingProgressProps, MtRingSection }
