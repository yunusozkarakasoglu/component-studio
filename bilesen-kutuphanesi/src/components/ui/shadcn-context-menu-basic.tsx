/**
 * ShadcnContextMenuBasic
 * Temel sağ tıklama menüsü (saf React, shadcn kaynaklı).
 * @id 815
 * @category Overlay
 * @subcategory ShadcnContextMenu
 * @source shadcn
 */
import {
  ShadcnContextMenu,
  ShadcnContextMenuContent,
  ShadcnContextMenuGroup,
  ShadcnContextMenuItem,
  ShadcnContextMenuSeparator,
  ShadcnContextMenuTrigger,
} from "@/components/ui/shadcn-context-menu"

function ShadcnContextMenuBasic() {
  return (
    <ShadcnContextMenu>
      <ShadcnContextMenuTrigger className="flex h-24 w-56 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        Right click here
      </ShadcnContextMenuTrigger>
      <ShadcnContextMenuContent className="w-40">
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuItem>Profile</ShadcnContextMenuItem>
          <ShadcnContextMenuItem>Billing</ShadcnContextMenuItem>
          <ShadcnContextMenuItem>Settings</ShadcnContextMenuItem>
        </ShadcnContextMenuGroup>
        <ShadcnContextMenuSeparator />
        <ShadcnContextMenuItem>GitHub</ShadcnContextMenuItem>
        <ShadcnContextMenuItem>Support</ShadcnContextMenuItem>
      </ShadcnContextMenuContent>
    </ShadcnContextMenu>
  )
}

export { ShadcnContextMenuBasic }
