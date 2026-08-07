/**
 * MtPopoverControlled
 * Kontrollü popover (saf React, Mantine kaynaklı).
 * @id 1378
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"

function MtPopoverControlled() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <MtButton variant="light">Hover to open</MtButton>
      </MtPopoverTarget>
      <MtPopoverDropdown>
        <p className="text-sm">Popover content with custom styling.</p>
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverControlled }
