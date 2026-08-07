/**
 * ShadcnSkeletonForm
 * Form yükleniyor (saf React, shadcn kaynaklı).
 * @id 948
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonForm() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <ShadcnSkeleton className="h-3.5 w-16" />
        <ShadcnSkeleton className="h-9 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <ShadcnSkeleton className="h-3.5 w-16" />
        <ShadcnSkeleton className="h-9 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <ShadcnSkeleton className="h-3.5 w-20" />
        <ShadcnSkeleton className="h-20 w-full rounded-md" />
      </div>
      <ShadcnSkeleton className="h-9 w-24 rounded-md" />
    </div>
  )
}

export { ShadcnSkeletonForm }
