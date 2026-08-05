/**
 * SkeletonUserProfile
 * Kullanıcı profili iskeleti örneği (saf React).
 * @id 549
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonUserProfile() {
  return (
    <div className="flex w-[300px] items-center gap-4 rounded-lg border border-border bg-background p-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-1/2 rounded-md" />
        <Skeleton className="h-3 w-2/3 rounded-md" />
      </div>
    </div>
  )
}

export { SkeletonUserProfile }
