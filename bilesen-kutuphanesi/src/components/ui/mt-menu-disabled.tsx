/**
 * MtMenuDisabled
 * Devre dışı öğeler (saf React, Mantine kaynaklı).
 * @id 1105
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDropdown, MtMenuItem, MtMenuLabel, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuDisabled() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="default">Open menu</MtButton></MtMenuTarget>
      <MtMenuDropdown>
        <MtMenuLabel>Options</MtMenuLabel>
        <MtMenuItem>Available option</MtMenuItem>
        <MtMenuItem isDisabled>Disabled option</MtMenuItem>
        <MtMenuItem isDisabled>Another disabled option</MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuDisabled }
