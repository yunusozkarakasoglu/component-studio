/**
 * ShadcnSkeleton
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Yükleme yer tutucusu — shimmer animasyonlu.
 *   <ShadcnSkeleton className="h-12 w-12 rounded-full" />
 * @id 943
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnSkeletonProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSkeleton({ className, ...props }: ShadcnSkeletonProps) {
  return <div data-slot="shadcn-skeleton" className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
}

export { ShadcnSkeleton }
export type { ShadcnSkeletonProps }
