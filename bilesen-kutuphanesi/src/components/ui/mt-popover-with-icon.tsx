/**
 * MtPopoverWithIcon
 * İkonlu popover (saf React, Mantine kaynaklı).
 * @id 1375
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"

function MtPopoverWithIcon() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <button type="button" aria-label="Settings" className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-border transition-colors hover:bg-muted">
          <Settings className="size-4" />
        </button>
      </MtPopoverTarget>
      <MtPopoverDropdown>
        <p className="text-sm">Settings popover content.</p>
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverWithIcon }
