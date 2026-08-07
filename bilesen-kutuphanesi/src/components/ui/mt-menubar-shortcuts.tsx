/**
 * MtMenubarShortcuts
 * Kısayollu menü çubuğu (saf React, Mantine kaynaklı).
 * @id 1111
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger } from "@/components/ui/mt-menubar"

function MtMenubarShortcuts() {
  return (
    <MtMenubar>
      <MtMenubarMenu id="format">
        <MtMenubarTrigger id="format">Format</MtMenubarTrigger>
        <MtMenubarDropdown id="format" className="w-48">
          <MtMenubarItem>
            Bold <span className="ml-auto text-xs text-muted-foreground">⌘B</span>
          </MtMenubarItem>
          <MtMenubarItem>
            Italic <span className="ml-auto text-xs text-muted-foreground">⌘I</span>
          </MtMenubarItem>
          <MtMenubarItem>
            Underline <span className="ml-auto text-xs text-muted-foreground">⌘U</span>
          </MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
    </MtMenubar>
  )
}

export { MtMenubarShortcuts }
