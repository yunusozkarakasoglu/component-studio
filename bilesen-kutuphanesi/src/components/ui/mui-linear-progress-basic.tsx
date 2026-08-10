/**
 * MuiLinearProgressBasic
 * @id 2023
 * @category Yükleme & İlerleme
 * @subcategory MuiLinearProgress
 * @source mui
 */
import { MuiLinearProgress } from "@/components/ui/mui-linear-progress"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiLinearProgressBasic() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiLinearProgress />
      <MuiLinearProgress variant="determinate" value={70} />
      <MuiLinearProgress variant="determinate" value={45} color="secondary" />
      <MuiLinearProgress variant="determinate" value={90} color="success" />
      <MuiLinearProgress variant="determinate" value={25} color="error" />
    </MuiStack>
  )
}

export { MuiLinearProgressBasic }
