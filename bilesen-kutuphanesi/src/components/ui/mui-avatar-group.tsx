/**
 * MuiAvatarGroup
 * @id 2074
 * @category Veri Gösterimi
 * @subcategory MuiAvatar
 * @source mui
 */
import { MuiAvatar } from "@/components/ui/mui-avatar"

function MuiAvatarGroup() {
  return (
    <div className="flex -space-x-2">
      <MuiAvatar size="medium" className="ring-2 ring-white">YK</MuiAvatar>
      <MuiAvatar size="medium" className="bg-green-600 ring-2 ring-white">AT</MuiAvatar>
      <MuiAvatar size="medium" className="bg-purple-600 ring-2 ring-white">MA</MuiAvatar>
      <MuiAvatar size="medium" className="bg-amber-600 ring-2 ring-white">+3</MuiAvatar>
    </div>
  )
}

export { MuiAvatarGroup }
