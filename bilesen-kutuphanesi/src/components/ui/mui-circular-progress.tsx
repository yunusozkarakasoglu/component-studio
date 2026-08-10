/**
 * MuiCircularProgress
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Dairesel yükleme göstergesi.
 *   <MuiCircularProgress /> · <MuiCircularProgress value={70} variant="determinate" />
 * variant: indeterminate (dönen) | determinate (değerli)
 * color: primary/secondary/success/error/warning/info · size: small/medium/large
 * @id 2019
 * @category Yükleme & İlerleme
 * @subcategory MuiCircularProgress
 * @source mui
 */
import { cn } from "@/lib/utils"

interface MuiCircularProgressProps {
  variant?: "indeterminate" | "determinate"
  value?: number
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info"
  size?: "small" | "medium" | "large"
  className?: string
}

const SIZE: Record<string, string> = {
  small: "size-6",
  medium: "size-9",
  large: "size-14",
}

const COLOR: Record<string, string> = {
  primary: "text-blue-600",
  secondary: "text-purple-600",
  success: "text-green-600",
  error: "text-red-600",
  warning: "text-amber-500",
  info: "text-sky-600",
}

function MuiCircularProgress({
  variant = "indeterminate",
  value = 50,
  color = "primary",
  size = "medium",
  className,
}: MuiCircularProgressProps) {
  if (variant === "determinate") {
    return (
      <div className={cn("relative inline-flex", SIZE[size], className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <svg viewBox="0 0 36 36" className="size-full -rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" strokeWidth="3.5" className="stroke-gray-200" />
          <circle
            cx="18" cy="18" r="15.5" fill="none" strokeWidth="3.5" strokeLinecap="round"
            className={cn("stroke-current transition-all", COLOR[color])}
            strokeDasharray={`${(value / 100) * 97.4} 97.4`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-700">{Math.round(value)}%</span>
      </div>
    )
  }
  return (
    <div
      role="progressbar"
      className={cn("inline-block animate-spin rounded-full border-4 border-gray-200 border-t-current", SIZE[size], COLOR[color], className)}
    />
  )
}

export { MuiCircularProgress }
export type { MuiCircularProgressProps }
