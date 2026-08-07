/**
 * ShadcnSkeletonText
 * Metin yükleniyor (saf React, shadcn kaynaklı).
 * @id 947
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonText() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <ShadcnSkeleton className="h-5 w-1/2" />
      <div className="space-y-2">
        <ShadcnSkeleton className="h-3.5 w-full" />
        <ShadcnSkeleton className="h-3.5 w-full" />
        <ShadcnSkeleton className="h-3.5 w-4/5" />
      </div>
    </div>
  )
}

export { ShadcnSkeletonText }
