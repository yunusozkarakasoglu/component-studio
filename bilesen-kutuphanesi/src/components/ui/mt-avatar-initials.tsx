/**
 * MtAvatarInitials
 * Baş harfler (saf React, Mantine kaynaklı).
 * @id 1457
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarInitials() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtAvatar color="blue" radius="xl">YO</MtAvatar>
      <MtAvatar color="grape" radius="md">MS</MtAvatar>
      <MtAvatar color="orange" radius="sm">AK</MtAvatar>
      <MtAvatar color="teal" variant="light">EC</MtAvatar>
      <MtAvatar color="pink" variant="light">RN</MtAvatar>
    </div>
  )
}

export { MtAvatarInitials }
