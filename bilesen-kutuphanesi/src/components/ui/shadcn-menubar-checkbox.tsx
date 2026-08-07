/**
 * ShadcnMenubarCheckbox
 * Onay işaretli menü öğeleri (saf React, shadcn kaynaklı).
 * @id 860
 * @category Navigasyon
 * @subcategory ShadcnMenubar
 * @source shadcn
 */
import {
  ShadcnMenubar,
  ShadcnMenubarCheckboxItem,
  ShadcnMenubarContent,
  ShadcnMenubarMenu,
  ShadcnMenubarTrigger,
} from "@/components/ui/shadcn-menubar"

function ShadcnMenubarCheckbox() {
  return (
    <ShadcnMenubar>
      <ShadcnMenubarMenu id="view">
        <ShadcnMenubarTrigger id="view">View</ShadcnMenubarTrigger>
        <ShadcnMenubarContent id="view" className="w-56">
          <ShadcnMenubarCheckboxItem defaultChecked>Always Show Bookmarks Bar</ShadcnMenubarCheckboxItem>
          <ShadcnMenubarCheckboxItem>Always Show Full URLs</ShadcnMenubarCheckboxItem>
        </ShadcnMenubarContent>
      </ShadcnMenubarMenu>
    </ShadcnMenubar>
  )
}

export { ShadcnMenubarCheckbox }
