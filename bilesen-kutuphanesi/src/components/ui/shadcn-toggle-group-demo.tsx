/**
 * ShadcnToggleGroupDemo
 * Temel örnek — biçimlendirme araçları (saf React, shadcn kaynaklı).
 * @id 733
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupDemo() {
  return (
    <ShadcnToggleGroup variant="outline" multiple>
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

export { ShadcnToggleGroupDemo }
