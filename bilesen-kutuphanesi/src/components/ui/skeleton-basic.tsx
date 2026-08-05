/**
 * SkeletonBasic
 * Temel örnek: kart iskeleti (saf React).
 * @id 547
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonBasic() {
  return (
    <div className="w-[250px] space-y-5 rounded-lg bg-background p-4 shadow-sm">
      <Skeleton className="h-32 rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-3 w-2/5 rounded-lg" />
      </div>
    </div>
  )
}

export { SkeletonBasic }
