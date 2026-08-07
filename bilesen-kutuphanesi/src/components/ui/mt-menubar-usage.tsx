/**
 * MtMenubarUsage
 * Temel menü çubuğu (saf React, Mantine kaynaklı).
 * @id 1109
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger } from "@/components/ui/mt-menubar"

function MtMenubarUsage() {
  return (
    <MtMenubar>
      <MtMenubarMenu id="file">
        <MtMenubarTrigger id="file">File</MtMenubarTrigger>
        <MtMenubarDropdown id="file">
          <MtMenubarItem>New file</MtMenubarItem>
          <MtMenubarItem>Open...</MtMenubarItem>
          <MtMenubarItem>Save</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
      <MtMenubarMenu id="edit">
        <MtMenubarTrigger id="edit">Edit</MtMenubarTrigger>
        <MtMenubarDropdown id="edit">
          <MtMenubarItem>Undo</MtMenubarItem>
          <MtMenubarItem>Redo</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
      <MtMenubarMenu id="view">
        <MtMenubarTrigger id="view">View</MtMenubarTrigger>
        <MtMenubarDropdown id="view">
          <MtMenubarItem>Zoom in</MtMenubarItem>
          <MtMenubarItem>Zoom out</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
    </MtMenubar>
  )
}

export { MtMenubarUsage }
