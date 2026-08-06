/**
 * ShadcnContextMenuGroups
 * Gruplu menü — onay kutuları (saf React, shadcn kaynaklı).
 * @id 817
 * @category Overlay
 * @subcategory ShadcnContextMenu
 * @source shadcn
 */
import {
  ShadcnContextMenu,
  ShadcnContextMenuCheckboxItem,
  ShadcnContextMenuContent,
  ShadcnContextMenuGroup,
  ShadcnContextMenuSeparator,
  ShadcnContextMenuTrigger,
} from "@/components/ui/shadcn-context-menu"

function ShadcnContextMenuGroups() {
  return (
    <ShadcnContextMenu>
      <ShadcnContextMenuTrigger className="flex h-24 w-56 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        Right click here
      </ShadcnContextMenuTrigger>
      <ShadcnContextMenuContent className="w-48">
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuCheckboxItem checked>Show Bookmarks</ShadcnContextMenuCheckboxItem>
          <ShadcnContextMenuCheckboxItem>Show Full URLs</ShadcnContextMenuCheckboxItem>
        </ShadcnContextMenuGroup>
        <ShadcnContextMenuSeparator />
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuCheckboxItem>New Window</ShadcnContextMenuCheckboxItem>
          <ShadcnContextMenuCheckboxItem checked>Incognito Window</ShadcnContextMenuCheckboxItem>
        </ShadcnContextMenuGroup>
      </ShadcnContextMenuContent>
    </ShadcnContextMenu>
  )
}

export { ShadcnContextMenuGroups }
