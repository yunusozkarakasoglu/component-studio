/**
 * MtPopoverNested
 * İç içe popover (saf React, Mantine kaynaklı).
 * @id 1376
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"

function MtPopoverNested() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <MtButton variant="default">Account</MtButton>
      </MtPopoverTarget>
      <MtPopoverDropdown className="w-56">
        <p className="mb-1.5 text-xs font-medium text-muted-foreground">Signed in as</p>
        <p className="text-sm font-medium">pedro@example.com</p>
        <div className="mt-2 border-t border-border pt-2">
          <p className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-muted">Profile</p>
          <p className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-muted">Settings</p>
          <p className="cursor-pointer rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50">Log out</p>
        </div>
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverNested }
