/**
 * ShadcnSkeletonCard
 * Kart yükleniyor (saf React, shadcn kaynaklı).
 * @id 946
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl border border-border p-4">
      <ShadcnSkeleton className="h-40 w-full rounded-lg" />
      <div className="space-y-2">
        <ShadcnSkeleton className="h-4 w-3/4" />
        <ShadcnSkeleton className="h-4 w-full" />
        <ShadcnSkeleton className="h-4 w-2/3" />
      </div>
      <div className="flex gap-2">
        <ShadcnSkeleton className="h-8 w-20 rounded-md" />
        <ShadcnSkeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  )
}

export { ShadcnSkeletonCard }
