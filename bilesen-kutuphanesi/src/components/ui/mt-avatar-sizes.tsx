/**
 * MtAvatarSizes
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1459
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarSizes() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <MtAvatar size="xs" color="blue">X</MtAvatar>
      <MtAvatar size="sm" color="blue">S</MtAvatar>
      <MtAvatar size="md" color="blue">M</MtAvatar>
      <MtAvatar size="lg" color="blue">L</MtAvatar>
      <MtAvatar size="xl" color="blue">XL</MtAvatar>
    </div>
  )
}

export { MtAvatarSizes }
