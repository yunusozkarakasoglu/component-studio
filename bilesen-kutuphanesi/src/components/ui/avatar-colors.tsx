/**
 * AvatarColors
 * Colors örneği — 5 renk (saf React).
 * @id 159
 * @category Genel
 */
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

function AvatarColors() {
  return (
    <div className="flex items-center gap-4">
      <Avatar color="default"><AvatarFallback>DF</AvatarFallback></Avatar>
      <Avatar color="accent"><AvatarFallback>AC</AvatarFallback></Avatar>
      <Avatar color="success"><AvatarFallback>SC</AvatarFallback></Avatar>
      <Avatar color="warning"><AvatarFallback>WR</AvatarFallback></Avatar>
      <Avatar color="danger"><AvatarFallback>DG</AvatarFallback></Avatar>
    </div>
  )
}

export { AvatarColors }
