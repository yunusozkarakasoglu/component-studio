/**
 * MtMenuDanger
 * Tehlikeli eylem menüsü (saf React, Mantine kaynaklı).
 * @id 1106
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { Archive, LogOut, Trash } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDivider, MtMenuDropdown, MtMenuItem, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuDanger() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">Danger zone</MtButton></MtMenuTarget>
      <MtMenuDropdown>
        <MtMenuItem leftSection={<Archive className="size-4" />}>Archive project</MtMenuItem>
        <MtMenuDivider />
        <MtMenuItem variant="danger" leftSection={<Trash className="size-4" />}>Delete project</MtMenuItem>
        <MtMenuItem variant="danger" leftSection={<LogOut className="size-4" />}>Leave workspace</MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuDanger }
