/**
 * MuiAvatarBasic
 * @id 2014
 * @category Veri Gösterimi
 * @subcategory MuiAvatar
 * @source mui
 */
import { MuiAvatar } from "@/components/ui/mui-avatar"
import { MuiStack } from "@/components/ui/mui-stack"
import { CircleUser } from "@/components/ui/icons"

function MuiAvatarBasic() {
  return (
    <MuiStack direction="row" spacing={2} className="items-center">
      <MuiAvatar size="small">YK</MuiAvatar>
      <MuiAvatar size="medium">YK</MuiAvatar>
      <MuiAvatar size="large">YK</MuiAvatar>
      <MuiAvatar size="medium" variant="rounded">YK</MuiAvatar>
      <MuiAvatar size="medium"><CircleUser className="size-5" /></MuiAvatar>
    </MuiStack>
  )
}

export { MuiAvatarBasic }
