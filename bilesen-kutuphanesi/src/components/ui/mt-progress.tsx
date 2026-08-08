/**
 * MtProgress
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İlerleme çubuğu — value, color, size, striped, animated, label, sections.
 *   <MtProgress value={70} color="blue" />
 * @id 1504
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { cn } from "@/lib/utils"

interface MtProgressSection {
  value: number
  color: string
  label?: string
}

interface MtProgressProps {
  value?: number
  color?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number
  striped?: boolean
  animated?: boolean
  label?: string
  sections?: MtProgressSection[]
  radius?: "sm" | "md" | "lg" | "full"
  className?: string
}

const progressColors: Record<string, string> = {
  blue: "bg-blue-600", red: "bg-red-600", green: "bg-green-600", teal: "bg-teal-600",
  grape: "bg-purple-600", pink: "bg-pink-600", gray: "bg-gray-500", yellow: "bg-yellow-500",
  orange: "bg-orange-600", cyan: "bg-cyan-600", indigo: "bg-indigo-600", violet: "bg-violet-600",
  lime: "bg-lime-500", dark: "bg-gray-900",
}
const progressSizes: Record<string, string> = { xs: "h-1", sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" }

function MtProgress({ value = 0, color = "blue", size = "md", striped, animated, label, sections, radius = "full", className }: MtProgressProps) {
  const h = typeof size === "number" ? size : progressSizes[size]
  const rad = radius === "full" ? "rounded-full" : `rounded-${radius}`

  if (sections) {
    return (
      <div className={cn("flex w-full gap-0.5 overflow-hidden bg-muted", rad, className)} style={{ height: h }}>
        {sections.map((s, i) => (
          <div key={i} className={cn(progressColors[s.color] ?? progressColors.blue, "h-full", rad)} style={{ width: `${s.value}%` }} title={s.label} />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("relative w-full overflow-hidden bg-muted", rad, className)} style={{ height: h }} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div
        className={cn("h-full transition-all duration-300", progressColors[color] ?? progressColors.blue, rad, striped && "bg-striped bg-[length:14px_14px]", animated && "animate-stripes")}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white drop-shadow">{label}</span>
      )}
    </div>
  )
}

export { MtProgress }
export type { MtProgressProps, MtProgressSection }
