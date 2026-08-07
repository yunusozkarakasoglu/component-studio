/**
 * MtMenubarCustomTrigger
 * Özel tetikleyici (saf React, Mantine kaynaklı).
 * @id 1113
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger } from "@/components/ui/mt-menubar"

function MtMenubarCustomTrigger() {
  return (
    <MtMenubar>
      <MtMenubarMenu id="actions">
        <MtMenubarTrigger id="actions" className="rounded-md px-2">
          <MtButton variant="light" size="compact-sm">Quick actions</MtButton>
        </MtMenubarTrigger>
        <MtMenubarDropdown id="actions">
          <MtMenubarItem>New project</MtMenubarItem>
          <MtMenubarItem>New task</MtMenubarItem>
          <MtMenubarItem>Invite member</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
    </MtMenubar>
  )
}

export { MtMenubarCustomTrigger }
