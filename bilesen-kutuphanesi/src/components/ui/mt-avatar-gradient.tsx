/**
 * MtAvatarGradient
 * Gradyan avatar (saf React, Mantine kaynaklı).
 * @id 1458
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"

function MtAvatarGradient() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtAvatar gradient={{ from: "blue", to: "cyan" }} radius="xl" size="lg">YO</MtAvatar>
      <MtAvatar gradient={{ from: "grape", to: "pink", deg: 135 }} radius="xl" size="lg">MS</MtAvatar>
      <MtAvatar gradient={{ from: "orange", to: "red" }} radius="xl" size="lg">AK</MtAvatar>
    </div>
  )
}

export { MtAvatarGradient }
