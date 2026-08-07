/**
 * ShadcnMenubarRadio
 * Radyo seçimli menü (saf React, shadcn kaynaklı).
 * @id 861
 * @category Navigasyon
 * @subcategory ShadcnMenubar
 * @source shadcn
 */
import {
  ShadcnMenubar,
  ShadcnMenubarContent,
  ShadcnMenubarMenu,
  ShadcnMenubarRadioGroup,
  ShadcnMenubarRadioItem,
  ShadcnMenubarTrigger,
} from "@/components/ui/shadcn-menubar"

function ShadcnMenubarRadio() {
  return (
    <ShadcnMenubar>
      <ShadcnMenubarMenu id="people">
        <ShadcnMenubarTrigger id="people">People</ShadcnMenubarTrigger>
        <ShadcnMenubarContent id="people" className="w-48">
          <ShadcnMenubarRadioGroup defaultValue="pedro">
            <ShadcnMenubarRadioItem value="pedro">Pedro Duarte</ShadcnMenubarRadioItem>
            <ShadcnMenubarRadioItem value="colm">Colm Tuite</ShadcnMenubarRadioItem>
            <ShadcnMenubarRadioItem value="toni">Toni Castillo</ShadcnMenubarRadioItem>
          </ShadcnMenubarRadioGroup>
        </ShadcnMenubarContent>
      </ShadcnMenubarMenu>
    </ShadcnMenubar>
  )
}

export { ShadcnMenubarRadio }
