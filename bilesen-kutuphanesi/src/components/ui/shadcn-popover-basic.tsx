/**
 * ShadcnPopoverBasic
 * Temel popover (saf React, shadcn kaynaklı).
 * @id 791
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverTrigger,
} from "@/components/ui/shadcn-popover"

function ShadcnPopoverBasic() {
  return (
    <ShadcnPopover>
      <ShadcnPopoverTrigger>Open popover</ShadcnPopoverTrigger>
      <ShadcnPopoverContent className="w-64">
        <p className="text-sm">This is a basic popover with some content.</p>
      </ShadcnPopoverContent>
    </ShadcnPopover>
  )
}

export { ShadcnPopoverBasic }
