/**
 * MtAvatarUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1455
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { Star } from "@/components/ui/icons"
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarUsage() {
  return (
    <div className="flex items-center gap-3">
      <MtAvatar src="https://i.pravatar.cc/64?img=12" alt="Photo" radius="xl" />
      <MtAvatar radius="xl" />
      <MtAvatar color="cyan" radius="xl">MK</MtAvatar>
      <MtAvatar color="blue" radius="sm"><Star className="size-4" /></MtAvatar>
    </div>
  )
}

export { MtAvatarUsage }
