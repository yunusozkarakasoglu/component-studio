/**
 * MuiDividerVertical
 * @id 1862
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiDividerVertical() {
  return (
    <MuiStack direction="row" spacing={2} className="items-center">
      <span className="text-sm">İlk</span>
      <MuiDivider orientation="vertical" className="h-6" />
      <span className="text-sm">İkinci</span>
      <MuiDivider orientation="vertical" className="h-6" />
      <span className="text-sm">Üçüncü</span>
    </MuiStack>
  )
}

export { MuiDividerVertical }
