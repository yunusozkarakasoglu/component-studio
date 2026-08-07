/**
 * ShadcnMenubarSubmenu
 * Alt menülü menü çubuğu (saf React, shadcn kaynaklı).
 * @id 862
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
  ShadcnMenubarSub,
  ShadcnMenubarSubContent,
  ShadcnMenubarSubTrigger,
  ShadcnMenubarTrigger,
} from "@/components/ui/shadcn-menubar"

function ShadcnMenubarSubmenu() {
  return (
    <ShadcnMenubar>
      <ShadcnMenubarMenu id="format">
        <ShadcnMenubarTrigger id="format">Format</ShadcnMenubarTrigger>
        <ShadcnMenubarContent id="format" className="w-48">
          <ShadcnMenubarGroup>
            <ShadcnMenubarSub>
              <ShadcnMenubarSubTrigger>Text Styles</ShadcnMenubarSubTrigger>
              <ShadcnMenubarSubContent>
                <ShadcnMenubarItem>Bold</ShadcnMenubarItem>
                <ShadcnMenubarItem>Italic</ShadcnMenubarItem>
                <ShadcnMenubarItem>Underline</ShadcnMenubarItem>
              </ShadcnMenubarSubContent>
            </ShadcnMenubarSub>
            <ShadcnMenubarSub>
              <ShadcnMenubarSubTrigger>Alignment</ShadcnMenubarSubTrigger>
              <ShadcnMenubarSubContent>
                <ShadcnMenubarItem>Left</ShadcnMenubarItem>
                <ShadcnMenubarItem>Center</ShadcnMenubarItem>
                <ShadcnMenubarItem>Right</ShadcnMenubarItem>
              </ShadcnMenubarSubContent>
            </ShadcnMenubarSub>
          </ShadcnMenubarGroup>
          <ShadcnMenubarSeparator />
          <ShadcnMenubarItem>Clear Formatting</ShadcnMenubarItem>
        </ShadcnMenubarContent>
      </ShadcnMenubarMenu>
    </ShadcnMenubar>
  )
}

export { ShadcnMenubarSubmenu }
