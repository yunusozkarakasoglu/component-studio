/**
 * MtButtonGroupSection
 * Grup bölümü — ikon + metin (saf React, Mantine kaynaklı).
 * @id 1071
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { ChevronDown, Settings } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"

function MtButtonGroupSection() {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border">
      <MtButton className="rounded-none border-r border-border" leftSection={<Settings className="size-3.5" />}>
        Settings
      </MtButton>
      <MtButton variant="default" className="rounded-none px-2" aria-label="More options">
        <ChevronDown className="size-3.5" />
      </MtButton>
    </div>
  )
}

export { MtButtonGroupSection }
