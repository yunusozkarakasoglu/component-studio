/**
 * MtAvatarLink
 * Bağlantılı avatar (saf React, Mantine kaynaklı).
 * @id 1462
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarLink() {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="inline-block rounded-full transition-opacity hover:opacity-80">
      <MtAvatar color="grape" radius="xl" size="lg">Profile</MtAvatar>
    </a>
  )
}

export { MtAvatarLink }
