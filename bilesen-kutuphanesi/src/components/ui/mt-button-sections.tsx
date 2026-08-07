/**
 * MtButtonSections
 * Sol/sa bölümler — ikonlar (saf React, Mantine kaynaklı).
 * @id 1063
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { ArrowRight, Download, Image as ImageIcon } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"

function MtButtonSections() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtButton leftSection={<ImageIcon className="size-3.5" />} variant="default">
        Gallery
      </MtButton>
      <MtButton rightSection={<Download className="size-3.5" />}>Download</MtButton>
      <MtButton
        variant="light"
        leftSection={<ImageIcon className="size-3.5" />}
        rightSection={<ArrowRight className="size-3.5" />}
      >
        Visit gallery
      </MtButton>
    </div>
  )
}

export { MtButtonSections }
