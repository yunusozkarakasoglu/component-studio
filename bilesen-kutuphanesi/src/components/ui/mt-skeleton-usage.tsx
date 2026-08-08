/**
 * MtSkeletonUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1546
 * @category Yükleme & İlerleme
 * @subcategory MtSkeleton
 * @source mantine
 */
import { MtSkeleton } from "@/components/ui/mt-skeleton"

function MtSkeletonUsage() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <MtSkeleton h={40} circle />
      <MtSkeleton h={14} />
      <MtSkeleton h={14} w="80%" />
      <MtSkeleton h={14} w="60%" />
    </div>
  )
}

export { MtSkeletonUsage }
