/**
 * MtSkeleton
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İskelet yükleme — h, w, circle, animate.
 *   <MtSkeleton h={50} circle />
 * @id 1507
 * @category Yükleme & İlerleme
 * @subcategory MtSkeleton
 * @source mantine
 */
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface MtSkeletonProps {
  h?: number | string
  w?: number | string
  circle?: boolean
  animate?: boolean
  className?: string
  style?: CSSProperties
}

function MtSkeleton({ h = "auto", w = "100%", circle, animate = true, className, style }: MtSkeletonProps) {
  return (
    <div
      data-slot="mt-skeleton"
      className={cn(
        "bg-muted",
        animate && "animate-pulse",
        circle ? "rounded-full" : "rounded-md",
        className
      )}
      style={{ height: h, width: w, ...style }}
    />
  )
}

export { MtSkeleton }
export type { MtSkeletonProps }
