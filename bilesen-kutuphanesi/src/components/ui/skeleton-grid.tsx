/**
 * SkeletonGrid
 * Izgara iskeleti örneği (saf React).
 * @id 551
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2.5 rounded-lg border border-border p-3">
          <Skeleton className="h-20 rounded-md" />
          <Skeleton className="h-3 w-3/4 rounded-md" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
        </div>
      ))}
    </div>
  )
}

export { SkeletonGrid }
