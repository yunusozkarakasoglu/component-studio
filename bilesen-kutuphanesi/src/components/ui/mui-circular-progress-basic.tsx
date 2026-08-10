/**
 * MuiCircularProgressBasic
 * @id 2022
 * @category Yükleme & İlerleme
 * @subcategory MuiCircularProgress
 * @source mui
 */
import { MuiCircularProgress } from "@/components/ui/mui-circular-progress"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiCircularProgressBasic() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiCircularProgress size="small" />
      <MuiCircularProgress size="medium" />
      <MuiCircularProgress size="large" />
      <MuiCircularProgress variant="determinate" value={70} size="medium" />
      <MuiCircularProgress variant="determinate" value={35} color="error" size="medium" />
    </MuiStack>
  )
}

export { MuiCircularProgressBasic }
