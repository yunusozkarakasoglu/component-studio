/**
 * MuiLinearProgress
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Çizgisel yükleme göstergesi.
 *   <MuiLinearProgress /> · <MuiLinearProgress value={70} variant="determinate" />
 * variant: indeterminate (akış) | determinate (değerli)
 * color · value · className
 * @id 2020
 * @category Yükleme & İlerleme
 * @subcategory MuiLinearProgress
 * @source mui
 */
import { cn } from "@/lib/utils"

interface MuiLinearProgressProps {
  variant?: "indeterminate" | "determinate"
  value?: number
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info"
  className?: string
}

const COLOR: Record<string, string> = {
  primary: "bg-blue-600",
  secondary: "bg-purple-600",
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-sky-600",
}

function MuiLinearProgress({ variant = "indeterminate", value = 50, color = "primary", className }: MuiLinearProgressProps) {
  if (variant === "determinate") {
    return (
      <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} className={cn("h-1.5 w-full overflow-hidden rounded-full bg-gray-200", className)}>
        <div className={cn("h-full rounded-full transition-all", COLOR[color])} style={{ width: `${value}%` }} />
      </div>
    )
  }
  return (
    <div role="progressbar" className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200", className)}>
      <div className={cn("absolute inset-y-0 left-0 w-1/3 animate-[indeterminate_1.5s_ease-in-out_infinite] rounded-full", COLOR[color])} />
    </div>
  )
}

export { MuiLinearProgress }
export type { MuiLinearProgressProps }
