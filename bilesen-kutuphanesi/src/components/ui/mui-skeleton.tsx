/**
 * MuiSkeleton
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yer tutucu — yüklenirken görünen iskelet.
 *   <MuiSkeleton width={200} height={20} />
 * variant: text (varsayılan) | circular | rectangular
 * width · height · animation: pulse (varsayılan) | wave | false
 * @id 2021
 * @category Yükleme & İlerleme
 * @subcategory MuiSkeleton
 * @source mui
 */
import { cn } from "@/lib/utils"

interface MuiSkeletonProps {
  variant?: "text" | "circular" | "rectangular"
  width?: number | string
  height?: number | string
  animation?: "pulse" | "wave" | false
  className?: string
}

function MuiSkeleton({ variant = "text", width, height, animation = "pulse", className }: MuiSkeletonProps) {
  return (
    <div
      className={cn(
        "bg-gray-200",
        animation === "pulse" && "animate-pulse",
        animation === "wave" && "relative overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-pulse",
        variant === "text" && "rounded",
        variant === "circular" && "rounded-full",
        variant === "rectangular" && "rounded-md",
        className
      )}
      style={{ width: width ?? (variant === "text" ? "100%" : undefined), height: height ?? (variant === "text" ? "1em" : undefined) }}
      aria-hidden
    />
  )
}

export { MuiSkeleton }
export type { MuiSkeletonProps }
