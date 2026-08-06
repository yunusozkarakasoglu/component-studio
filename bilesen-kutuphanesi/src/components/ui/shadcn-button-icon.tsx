/**
 * ShadcnButtonIcon
 * Yalnız ikonlu buton (saf React, shadcn kaynaklı).
 * @id 750
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { CircleFadingArrowUp } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonIcon() {
  return (
    <ShadcnButton variant="outline" size="icon" aria-label="Submit">
      <CircleFadingArrowUp className="size-4" />
    </ShadcnButton>
  )
}

export { ShadcnButtonIcon }
