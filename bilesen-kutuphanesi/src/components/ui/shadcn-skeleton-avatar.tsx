/**
 * ShadcnSkeletonAvatar
 * Avatar yükleniyor (saf React, shadcn kaynaklı).
 * @id 945
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonAvatar() {
  return (
    <div className="flex items-center gap-4">
      <ShadcnSkeleton className="size-12 rounded-full" />
      <div className="space-y-3">
        <ShadcnSkeleton className="h-4 w-[180px]" />
        <ShadcnSkeleton className="h-3 w-[120px]" />
      </div>
    </div>
  )
}

export { ShadcnSkeletonAvatar }
