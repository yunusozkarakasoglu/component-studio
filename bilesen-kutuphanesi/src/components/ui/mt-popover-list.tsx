/**
 * MtPopoverList
 * Liste popover (saf React, Mantine kaynaklı).
 * @id 1377
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"

function MtPopoverList() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <MtButton variant="outline">Notifications</MtButton>
      </MtPopoverTarget>
      <MtPopoverDropdown className="w-64">
        {["New comment on your post", "You have 3 new followers", "Weekly report is ready"].map((n) => (
          <p key={n} className="cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-muted">{n}</p>
        ))}
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverList }
