/**
 * MtMenuUsage
 * Temel açılır menü (saf React, Mantine kaynaklı).
 * @id 1103
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { Settings, Trash, User } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDivider, MtMenuDropdown, MtMenuItem, MtMenuLabel, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuUsage() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="default">Toggle menu</MtButton></MtMenuTarget>
      <MtMenuDropdown>
        <MtMenuLabel>Application</MtMenuLabel>
        <MtMenuItem leftSection={<User className="size-4" />}>Profile</MtMenuItem>
        <MtMenuItem leftSection={<Settings className="size-4" />}>Settings</MtMenuItem>
        <MtMenuDivider />
        <MtMenuItem variant="danger" leftSection={<Trash className="size-4" />}>Delete account</MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuUsage }
