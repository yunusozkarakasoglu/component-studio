/**
 * ShadcnToggleOutline
 * Outline varyant — italik/kalın (saf React, shadcn kaynaklı).
 * @id 727
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { Bold, Italic } from "@/components/ui/icons"
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ShadcnToggle variant="outline" aria-label="Toggle italic">
        <Italic className="size-4" />
        Italic
      </ShadcnToggle>
      <ShadcnToggle variant="outline" aria-label="Toggle bold">
        <Bold className="size-4" />
        Bold
      </ShadcnToggle>
    </div>
  )
}

export { ShadcnToggleOutline }
