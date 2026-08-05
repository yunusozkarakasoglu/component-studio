/**
 * SkeletonTextContent
 * Metin içeriği iskeleti örneği (saf React).
 * @id 548
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonTextContent() {
  return (
    <div className="w-[320px] space-y-2.5">
      <Skeleton className="h-4 w-1/2 rounded-md" />
      <Skeleton className="h-3 w-full rounded-md" />
      <Skeleton className="h-3 w-full rounded-md" />
      <Skeleton className="h-3 w-4/5 rounded-md" />
      <Skeleton className="h-3 w-3/5 rounded-md" />
    </div>
  )
}

export { SkeletonTextContent }
