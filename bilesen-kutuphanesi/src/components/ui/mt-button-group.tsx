/**
 * MtButtonGroup
 * Buton grubu — bağlı butonlar (saf React, Mantine kaynaklı).
 * @id 1060
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonGroup() {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border">
      <MtButton variant="default" className="rounded-none border-r border-border">First</MtButton>
      <MtButton variant="default" className="rounded-none border-r border-border">Second</MtButton>
      <MtButton variant="default" className="rounded-none">Third</MtButton>
    </div>
  )
}

export { MtButtonGroup }
