/**
 * ShadcnSkeletonDemo
 * Temel örnek — profil yükleniyor (saf React, shadcn kaynaklı).
 * @id 944
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSkeleton
 * @source shadcn
 */
import { ShadcnSkeleton } from "@/components/ui/shadcn-skeleton"

function ShadcnSkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <ShadcnSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <ShadcnSkeleton className="h-4 w-[250px]" />
        <ShadcnSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export { ShadcnSkeletonDemo }
