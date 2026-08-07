/**
 * MtButtonSectionsJustify
 * Bölüm hizalama — space-between (saf React, Mantine kaynaklı).
 * @id 1070
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { ArrowRight, Heart } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"

function MtButtonSectionsJustify() {
  return (
    <div className="flex flex-wrap gap-3">
      <MtButton className="justify-between px-3" leftSection={<Heart className="size-3.5" />} rightSection={<ArrowRight className="size-3.5" />}>
        Spread sections
      </MtButton>
      <MtButton variant="light" className="justify-between px-3" leftSection={<Heart className="size-3.5" />} rightSection={<ArrowRight className="size-3.5" />}>
        Light variant
      </MtButton>
    </div>
  )
}

export { MtButtonSectionsJustify }
