/**
 * MtButtonDemo
 * Varyantlar (saf React, Mantine kaynaklı).
 * @id 1059
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtButton variant="filled">Filled</MtButton>
      <MtButton variant="default">Default</MtButton>
      <MtButton variant="light">Light</MtButton>
      <MtButton variant="outline">Outline</MtButton>
      <MtButton variant="transparent">Transparent</MtButton>
    </div>
  )
}

export { MtButtonDemo }
