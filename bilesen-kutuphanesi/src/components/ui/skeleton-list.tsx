/**
 * SkeletonList
 * Liste iskeleti örneği (saf React).
 * @id 550
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonList() {
  return (
    <div className="w-[300px] space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-1/3 rounded-md" />
            <Skeleton className="h-3 w-1/2 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}

export { SkeletonList }
