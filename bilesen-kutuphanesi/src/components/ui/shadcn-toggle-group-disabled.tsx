/**
 * ShadcnToggleGroupDisabled
 * Devre dışı grup (saf React, shadcn kaynaklı).
 * @id 738
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupDisabled() {
  return (
    <ShadcnToggleGroup isDisabled>
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

export { ShadcnToggleGroupDisabled }
