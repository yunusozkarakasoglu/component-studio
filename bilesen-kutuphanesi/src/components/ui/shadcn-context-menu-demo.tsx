/**
 * ShadcnContextMenuDemo
 * Temel örnek — tarayıcı menüsü (saf React, shadcn kaynaklı).
 * @id 814
 * @category Overlay
 * @subcategory ShadcnContextMenu
 * @source shadcn
 */
import {
  ShadcnContextMenu,
  ShadcnContextMenuCheckboxItem,
  ShadcnContextMenuContent,
  ShadcnContextMenuGroup,
  ShadcnContextMenuItem,
  ShadcnContextMenuRadioGroup,
  ShadcnContextMenuRadioItem,
  ShadcnContextMenuSeparator,
  ShadcnContextMenuShortcut,
  ShadcnContextMenuTrigger,
} from "@/components/ui/shadcn-context-menu"

function ShadcnContextMenuDemo() {
  return (
    <ShadcnContextMenu>
      <ShadcnContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
        Right click here
      </ShadcnContextMenuTrigger>
      <ShadcnContextMenuContent className="w-48">
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuItem>
            Back <ShadcnContextMenuShortcut>⌘[</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem isDisabled>
            Forward <ShadcnContextMenuShortcut>⌘]</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
          <ShadcnContextMenuItem>
            Reload <ShadcnContextMenuShortcut>⌘R</ShadcnContextMenuShortcut>
          </ShadcnContextMenuItem>
        </ShadcnContextMenuGroup>
        <ShadcnContextMenuSeparator />
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuCheckboxItem checked>Show Bookmarks</ShadcnContextMenuCheckboxItem>
          <ShadcnContextMenuCheckboxItem>Show Full URLs</ShadcnContextMenuCheckboxItem>
        </ShadcnContextMenuGroup>
        <ShadcnContextMenuSeparator />
        <ShadcnContextMenuGroup>
          <ShadcnContextMenuRadioGroup defaultValue="pedro">
            <ShadcnContextMenuRadioItem value="pedro">Pedro Duarte</ShadcnContextMenuRadioItem>
            <ShadcnContextMenuRadioItem value="colm">Colm Tuite</ShadcnContextMenuRadioItem>
          </ShadcnContextMenuRadioGroup>
        </ShadcnContextMenuGroup>
        <ShadcnContextMenuSeparator />
        <ShadcnContextMenuItem variant="destructive">Delete</ShadcnContextMenuItem>
      </ShadcnContextMenuContent>
    </ShadcnContextMenu>
  )
}

export { ShadcnContextMenuDemo }
