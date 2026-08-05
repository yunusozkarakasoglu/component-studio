/**
 * SkeletonAnimationTypes
 * Animasyon türleri örneği: pulse/wave/none (saf React).
 * @id 553
 * @category Yükleme & İlerleme
 * @subcategory Skeleton
 */
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonAnimationTypes() {
  return (
    <div className="flex w-[300px] flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-muted-foreground">Pulse (varsayılan)</p>
        <Skeleton className="h-8 rounded-md" animation="pulse" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-muted-foreground">Wave</p>
        <Skeleton className="h-8 rounded-md" animation="wave" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-muted-foreground">None</p>
        <Skeleton className="h-8 rounded-md" animation="none" />
      </div>
    </div>
  )
}

export { SkeletonAnimationTypes }
