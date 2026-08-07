/**
 * MtMenuItems
 * Menü öğeleri — ikon + kısayol (saf React, Mantine kaynaklı).
 * @id 1104
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { Copy, Edit, ExternalLink } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtMenu, MtMenuDivider, MtMenuDropdown, MtMenuItem, MtMenuTarget } from "@/components/ui/mt-menu"

function MtMenuItems() {
  return (
    <MtMenu>
      <MtMenuTarget><MtButton variant="outline">Actions</MtButton></MtMenuTarget>
      <MtMenuDropdown className="w-44">
        <MtMenuItem leftSection={<Copy className="size-4" />}>
          Copy link
          <span className="ml-auto text-xs text-muted-foreground">⌘C</span>
        </MtMenuItem>
        <MtMenuItem leftSection={<Edit className="size-4" />}>
          Edit
          <span className="ml-auto text-xs text-muted-foreground">⌘E</span>
        </MtMenuItem>
        <MtMenuDivider />
        <MtMenuItem leftSection={<ExternalLink className="size-4" />}>Open in new tab</MtMenuItem>
      </MtMenuDropdown>
    </MtMenu>
  )
}

export { MtMenuItems }
