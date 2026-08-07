/**
 * MtMenuNested
 * İç içe menü (saf React, Mantine kaynaklı).
 * @id 1108
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { ChevronRight, FileText, Folder } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDivider, MtMenuDropdown, MtMenuItem, MtMenuLabel, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuNested() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="default">Nested menu</MtButton></MtMenuTarget>
      <MtMenuDropdown>
        <MtMenuLabel>Workspace</MtMenuLabel>
        <MtMenuItem leftSection={<Folder className="size-4" />}>Projects</MtMenuItem>
        <MtMenuItem leftSection={<FileText className="size-4" />}>Documents</MtMenuItem>
        <MtMenuDivider />
        <MtMenuItem>
          More
          <ChevronRight className="ml-auto size-4 text-muted-foreground" />
        </MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuNested }
