/**
 * ShadcnPopoverAlignments
 * Hizalama — start, center, end (saf React, shadcn kaynaklı).
 * @id 792
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverTrigger,
} from "@/components/ui/shadcn-popover"

function ShadcnPopoverAlignments() {
  return (
    <div className="flex gap-6">
      <ShadcnPopover>
        <ShadcnPopoverTrigger>Start</ShadcnPopoverTrigger>
        <ShadcnPopoverContent align="start" className="w-40">
          Aligned to start
        </ShadcnPopoverContent>
      </ShadcnPopover>
      <ShadcnPopover>
        <ShadcnPopoverTrigger>Center</ShadcnPopoverTrigger>
        <ShadcnPopoverContent align="center" className="w-40">
          Aligned to center
        </ShadcnPopoverContent>
      </ShadcnPopover>
      <ShadcnPopover>
        <ShadcnPopoverTrigger>End</ShadcnPopoverTrigger>
        <ShadcnPopoverContent align="end" className="w-40">
          Aligned to end
        </ShadcnPopoverContent>
      </ShadcnPopover>
    </div>
  )
}

export { ShadcnPopoverAlignments }
