/**
 * MtPopoverUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1373
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"

function MtPopoverUsage() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <MtButton variant="default">Toggle popover</MtButton>
      </MtPopoverTarget>
      <MtPopoverDropdown>
        <p className="text-sm font-medium">Popover content</p>
        <p className="mt-1 text-sm text-muted-foreground">This popover is opened by clicking the target.</p>
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverUsage }
