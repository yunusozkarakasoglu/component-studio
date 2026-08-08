/**
 * MtSemiCircleProgress
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yarım daire ilerleme — value, fillDirection, label.
 *   <MtSemiCircleProgress value={70} label="70%" />
 * @id 1506
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSemiCircleProgressProps {
  value?: number
  label?: ReactNode
  size?: number
  thickness?: number
  fillDirection?: "left-to-right" | "right-to-left"
  color?: string
  className?: string
}

function MtSemiCircleProgress({ value = 0, label, size = 200, thickness = 10, fillDirection = "left-to-right", color = "#3b82f6", className }: MtSemiCircleProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const radius = (size - thickness) / 2
  const circumference = Math.PI * radius
  const filled = (clamped / 100) * circumference

  return (
    <div className={cn("relative inline-flex flex-col items-center", className)}>
      <svg width={size} height={size / 2 + thickness}>
        <path
          d={`M ${thickness / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={thickness}
          strokeLinecap="round"
        />
        <path
          d={`M ${thickness / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference}`}
          strokeDashoffset={fillDirection === "right-to-left" ? -filled : 0}
          transform={fillDirection === "left-to-right" ? "scale(-1, 1) translate(-200, 0)" : undefined}
          style={fillDirection === "left-to-right" ? undefined : undefined}
        />
      </svg>
      {label && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center text-sm font-semibold text-foreground">{label}</div>
      )}
    </div>
  )
}

export { MtSemiCircleProgress }
export type { MtSemiCircleProgressProps }
