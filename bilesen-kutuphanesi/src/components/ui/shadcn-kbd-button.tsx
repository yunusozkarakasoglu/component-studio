/**
 * ShadcnKbdButton
 * Buton içinde tuş (saf React, shadcn kaynaklı).
 * Buton: kütüphanenin mevcut Button'ı (Heroui — saf React).
 * @id 646
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"

function ShadcnKbdButton() {
  return (
    <Button variant="outline">
      Accept{" "}
      <ShadcnKbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </ShadcnKbd>
    </Button>
  )
}

export { ShadcnKbdButton }
