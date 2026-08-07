/**
 * ShadcnMenubarDemo
 * Temel örnek — Dosya + Düzen menüleri (saf React, shadcn kaynaklı).
 * @id 859
 * @category Navigasyon
 * @subcategory ShadcnMenubar
 * @source shadcn
 */
import {
  ShadcnMenubar,
  ShadcnMenubarContent,
  ShadcnMenubarGroup,
  ShadcnMenubarItem,
  ShadcnMenubarMenu,
  ShadcnMenubarSeparator,
  ShadcnMenubarShortcut,
  ShadcnMenubarSub,
  ShadcnMenubarSubContent,
  ShadcnMenubarSubTrigger,
  ShadcnMenubarTrigger,
} from "@/components/ui/shadcn-menubar"

function ShadcnMenubarDemo() {
  return (
    <ShadcnMenubar className="w-72">
      <ShadcnMenubarMenu id="file">
        <ShadcnMenubarTrigger id="file">File</ShadcnMenubarTrigger>
        <ShadcnMenubarContent id="file">
          <ShadcnMenubarGroup>
            <ShadcnMenubarItem>New Tab <ShadcnMenubarShortcut>⌘T</ShadcnMenubarShortcut></ShadcnMenubarItem>
            <ShadcnMenubarItem>New Window <ShadcnMenubarShortcut>⌘N</ShadcnMenubarShortcut></ShadcnMenubarItem>
            <ShadcnMenubarItem isDisabled>New Incognito Window</ShadcnMenubarItem>
          </ShadcnMenubarGroup>
          <ShadcnMenubarSeparator />
          <ShadcnMenubarGroup>
            <ShadcnMenubarSub>
              <ShadcnMenubarSubTrigger>Share</ShadcnMenubarSubTrigger>
              <ShadcnMenubarSubContent>
                <ShadcnMenubarItem>Email link</ShadcnMenubarItem>
                <ShadcnMenubarItem>Messages</ShadcnMenubarItem>
                <ShadcnMenubarItem>Notes</ShadcnMenubarItem>
              </ShadcnMenubarSubContent>
            </ShadcnMenubarSub>
            <ShadcnMenubarItem>Print… <ShadcnMenubarShortcut>⌘P</ShadcnMenubarShortcut></ShadcnMenubarItem>
          </ShadcnMenubarGroup>
          <ShadcnMenubarSeparator />
          <ShadcnMenubarItem>Close Window <ShadcnMenubarShortcut>⇧⌘W</ShadcnMenubarShortcut></ShadcnMenubarItem>
        </ShadcnMenubarContent>
      </ShadcnMenubarMenu>
      <ShadcnMenubarMenu id="edit">
        <ShadcnMenubarTrigger id="edit">Edit</ShadcnMenubarTrigger>
        <ShadcnMenubarContent id="edit">
          <ShadcnMenubarGroup>
            <ShadcnMenubarItem>Undo <ShadcnMenubarShortcut>⌘Z</ShadcnMenubarShortcut></ShadcnMenubarItem>
            <ShadcnMenubarItem>Redo <ShadcnMenubarShortcut>⇧⌘Z</ShadcnMenubarShortcut></ShadcnMenubarItem>
          </ShadcnMenubarGroup>
          <ShadcnMenubarSeparator />
          <ShadcnMenubarGroup>
            <ShadcnMenubarItem>Cut <ShadcnMenubarShortcut>⌘X</ShadcnMenubarShortcut></ShadcnMenubarItem>
            <ShadcnMenubarItem>Copy <ShadcnMenubarShortcut>⌘C</ShadcnMenubarShortcut></ShadcnMenubarItem>
            <ShadcnMenubarItem>Paste <ShadcnMenubarShortcut>⌘V</ShadcnMenubarShortcut></ShadcnMenubarItem>
          </ShadcnMenubarGroup>
        </ShadcnMenubarContent>
      </ShadcnMenubarMenu>
    </ShadcnMenubar>
  )
}

export { ShadcnMenubarDemo }
