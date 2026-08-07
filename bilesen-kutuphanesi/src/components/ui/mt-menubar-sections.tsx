/**
 * MtMenubarSections
 * Bölümlü menü çubuğu (saf React, Mantine kaynaklı).
 * @id 1112
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger } from "@/components/ui/mt-menubar"

function MtMenubarSections() {
  return (
    <MtMenubar>
      <MtMenubarMenu id="insert">
        <MtMenubarTrigger id="insert">Insert</MtMenubarTrigger>
        <MtMenubarDropdown id="insert" className="w-48">
          <div className="px-2.5 pt-1.5 pb-1 text-xs font-medium text-muted-foreground">Blocks</div>
          <MtMenubarItem>Paragraph</MtMenubarItem>
          <MtMenubarItem>Heading</MtMenubarItem>
          <div className="px-2.5 pt-2 pb-1 text-xs font-medium text-muted-foreground">Media</div>
          <MtMenubarItem>Image</MtMenubarItem>
          <MtMenubarItem>Video</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
      <MtMenubarMenu id="tools">
        <MtMenubarTrigger id="tools">Tools</MtMenubarTrigger>
        <MtMenubarDropdown id="tools">
          <MtMenubarItem>Spell check</MtMenubarItem>
          <MtMenubarItem>Word count</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
    </MtMenubar>
  )
}

export { MtMenubarSections }
