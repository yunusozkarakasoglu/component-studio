/**
 * ShadcnContextMenuShortcuts
 * Kısayolları olan menü (saf React, shadcn kaynaklı).
 * @id 816
 * @category Overlay
 * @subcategory ShadcnContextMenu
 * @source shadcn
 */
import {
  ShadcnContextMenu,
  ShadcnContextMenuContent,
  ShadcnContextMenuGroup,
  ShadcnContextMenuItem,
  ShadcnContextMenuShortcut,
  ShadcnContextMenuTrigger,
} from "@/components/ui/shadcn-context-menu"

function ShadcnContextMenuShortcuts() {
  return (
    <ShadcnContextMenu>
      <ShadcnContextMenuTrigger className="flex h-24 w-56 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        Right click here
      </ShadcnContextMenuTrigger>
      <ShadcnContextMenuContent className="w-48">
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuItem>
            Undo <ShadcnContextMenuShortcut>⌘Z</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem>
            Redo <ShadcnContextMenuShortcut>⇧⌘Z</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem>
            Cut <ShadcnContextMenuShortcut>⌘X</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem>
            Copy <ShadcnContextMenuShortcut>⌘C</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem>
            Paste <ShadcnContextMenuShortcut>⌘V</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
        </ShadcnContextMenuGroup>
      </ShadcnContextMenuContent>
    </ShadcnContextMenu>
  )
}

export { ShadcnContextMenuShortcuts }
