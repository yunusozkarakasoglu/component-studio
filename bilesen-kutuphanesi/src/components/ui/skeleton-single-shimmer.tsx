/**
 * SkeletonSingleShimmer
 * Tek satır shimmer örneği (saf React).
 * @id 552
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonSingleShimmer() {
  return (
    <div className="flex w-[300px] flex-col gap-3">
      <Skeleton className="h-24 rounded-lg" animation="wave" />
      <Skeleton className="h-3 w-2/3 rounded-md" animation="wave" />
    </div>
  )
}

export { SkeletonSingleShimmer }
