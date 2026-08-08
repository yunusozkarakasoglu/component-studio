/**
 * MtIndicatorUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1548
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorUsage() {
  return (
    <MtIndicator>
      <MtAvatar color="blue" radius="xl" size="lg">YO</MtAvatar>
    </MtIndicator>
  )
}

export { MtIndicatorUsage }
