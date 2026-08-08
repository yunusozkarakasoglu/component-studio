/**
 * MtAvatarGroupDemo
 * Avatar grubu (saf React, Mantine kaynaklı).
 * @id 1460
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar, MtAvatarGroup } from "@/components/ui/mt-avatar"

function MtAvatarGroupDemo() {
  return (
    <MtAvatarGroup>
      <MtAvatar color="blue" radius="xl" className="-ml-2 first:ml-0 ring-2 ring-background">AY</MtAvatar>
      <MtAvatar color="pink" radius="xl" className="-ml-2 ring-2 ring-background">BK</MtAvatar>
      <MtAvatar color="teal" radius="xl" className="-ml-2 ring-2 ring-background">CM</MtAvatar>
      <MtAvatar color="orange" radius="xl" className="-ml-2 ring-2 ring-background">+4</MtAvatar>
    </MtAvatarGroup>
  )
}

export { MtAvatarGroupDemo }
