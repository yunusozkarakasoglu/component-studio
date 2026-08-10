/**
 * MuiSkeletonBasic
 * @id 2024
 * @category Yükleme & İlerleme
 * @subcategory MuiSkeleton
 * @source mui
 */
import { MuiSkeleton } from "@/components/ui/mui-skeleton"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSkeletonBasic() {
  return (
    <MuiStack spacing={2} className="w-full max-w-sm">
      <div className="flex items-center gap-3">
        <MuiSkeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <MuiSkeleton height={16} width="70%" />
          <MuiSkeleton height={12} width="40%" />
        </div>
      </div>
      <MuiSkeleton variant="rectangular" height={120} />
      <MuiSkeleton height={14} />
      <MuiSkeleton height={14} width="80%" />
    </MuiStack>
  )
}

export { MuiSkeletonBasic }
