/**
 * ShadcnSkeletonRtl
 * RTL örneği — Arapça yükleniyor (saf React, shadcn kaynaklı).
 * @id 949
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonRtl() {
  return (
    <div className="flex items-center gap-4" dir="rtl">
      <ShadcnSkeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <ShadcnSkeleton className="h-4 w-[250px]" />
        <ShadcnSkeleton className="h-4 w-[180px]" />
      </div>
    </div>
  )
}

export { ShadcnSkeletonRtl }
