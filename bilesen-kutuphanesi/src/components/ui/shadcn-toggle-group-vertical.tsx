/**
 * ShadcnToggleGroupVertical
 * Dikey grup (saf React, shadcn kaynaklı).
 * @id 737
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupVertical() {
  return (
    <ShadcnToggleGroup multiple orientation="vertical" spacing={1} defaultValue={["bold", "italic"]}>
      <ShadcnToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ShadcnToggleGroupItem>
    </ShadcnToggleGroup>
  )
}

export { ShadcnToggleGroupVertical }
