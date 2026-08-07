/**
 * MtPopoverWithForm
 * Formlu popover (saf React, Mantine kaynaklı).
 * @id 1374
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtPopover, MtPopoverDropdown, MtPopoverTarget } from "@/components/ui/mt-popover"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtPopoverWithForm() {
  return (
    <MtPopover>
      <MtPopoverTarget>
        <MtButton variant="light">Edit dimensions</MtButton>
      </MtPopoverTarget>
      <MtPopoverDropdown className="w-72">
        <p className="mb-2 text-sm font-medium">Dimensions</p>
        <div className="flex flex-col gap-3">
          <MtTextInput label="Width" defaultValue="100%" />
          <MtTextInput label="Height" defaultValue="25px" />
        </div>
      </MtPopoverDropdown>
    </MtPopover>
  )
}

export { MtPopoverWithForm }
