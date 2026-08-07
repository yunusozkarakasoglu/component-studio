/**
 * MtMenuWithLabel
 * Ok işaretli menü (saf React, Mantine kaynaklı).
 * @id 1107
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDropdown, MtMenuItem, MtMenuLabel, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuWithLabel() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="light">With label</MtButton></MtMenuTarget>
      <MtMenuDropdown className="w-56">
        <MtMenuLabel>Account</MtMenuLabel>
        <MtMenuItem>Change email</MtMenuItem>
        <MtMenuItem>Change password</MtMenuItem>
        <MtMenuItem>Two-factor auth</MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuWithLabel }
