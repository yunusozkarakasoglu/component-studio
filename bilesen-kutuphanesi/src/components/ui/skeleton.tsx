/**
 * Skeleton
 * Saf React bileşen (bağımlılıksız).
 * Yüklenen içerik için iskelet yer tutucu.
 *   <Skeleton className="h-32 rounded-lg" />
 *   <Skeleton className="h-3 w-3/5 rounded-lg" />
 * Özellikler: animation (pulse/wave/none) · className ile boyut/şekil.
 * @id 546
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SkeletonAnimation = "pulse" | "wave" | "none"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation
}

const animationClass: Record<SkeletonAnimation, string> = {
  pulse: "animate-pulse",
  wave: "relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer after:bg-linear-to-r after:from-transparent after:via-white/40 after:to-transparent",
  none: "",
}

function Skeleton({ className, animation = "pulse", ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-animation={animation}
      aria-hidden="true"
      className={cn("bg-muted", animationClass[animation], className)}
      {...props}
    />
  )
}

export { Skeleton }
export type { SkeletonAnimation, SkeletonProps }
