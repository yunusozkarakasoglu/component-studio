/**
 * MtAvatarPlaceholders
 * Yer tutucular (saf React, Mantine kaynaklı).
 * @id 1456
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { User } from "@/components/ui/icons"
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarPlaceholders() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtAvatar color="gray"><User className="size-4" /></MtAvatar>
      <MtAvatar color="blue"><User className="size-4" /></MtAvatar>
      <MtAvatar color="pink"><User className="size-4" /></MtAvatar>
      <MtAvatar color="teal"><User className="size-4" /></MtAvatar>
      <MtAvatar variant="light" color="blue"><User className="size-4" /></MtAvatar>
      <MtAvatar variant="outline" color="blue"><User className="size-4" /></MtAvatar>
    </div>
  )
}

export { MtAvatarPlaceholders }
