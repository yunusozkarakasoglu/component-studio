/**
 * MtSkeletonProfileCard
 * Profil kartı iskeleti (saf React, Mantine kaynaklı).
 * @id 1547
 * @category Yükleme & İlerleme
 * @subcategory MtSkeleton
 * @source mantine
 */
import { MtCard } from "@/components/ui/mt-card"
import { MtSkeleton } from "@/components/ui/mt-skeleton"

function MtSkeletonProfileCard() {
  return (
    <MtCard padding="lg" withBorder className="w-full max-w-sm">
      <div className="flex items-center gap-4">
        <MtSkeleton h={56} circle />
        <div className="flex-1 space-y-2">
          <MtSkeleton h={14} w="70%" />
          <MtSkeleton h={12} w="40%" />
        </div>
      </div>
      <MtSkeleton h={10} className="mt-5" />
      <MtSkeleton h={10} className="mt-2" />
      <MtSkeleton h={10} w="70%" className="mt-2" />
      <MtSkeleton h={32} className="mt-5" />
    </MtCard>
  )
}

export { MtSkeletonProfileCard }
