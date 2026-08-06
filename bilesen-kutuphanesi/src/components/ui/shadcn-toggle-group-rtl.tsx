/**
 * ShadcnToggleGroupRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 740
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupRtl() {
  return (
    <div dir="rtl">
      <ShadcnToggleGroup variant="outline" multiple>
        <ShadcnToggleGroupItem value="bold" aria-label="عريض">
          <Bold className="size-4" />
        </ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="italic" aria-label="مائل">
          <Italic className="size-4" />
        </ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="underline" aria-label="تسطير">
          <Underline className="size-4" />
        </ShadcnToggleGroupItem>
      </ShadcnToggleGroup>
    </div>
  )
}

export { ShadcnToggleGroupRtl }
