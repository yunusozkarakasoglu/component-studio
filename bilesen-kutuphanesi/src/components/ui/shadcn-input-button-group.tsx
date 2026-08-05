/**
 * ShadcnInputButtonGroup
 * Input + buton grubu — arama (saf React, shadcn kaynaklı).
 * @id 630
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-input"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputButtonGroup() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="input-button-group">Search</ShadcnFieldLabel>
      <ShadcnButtonGroup>
        <ShadcnInput id="input-button-group" placeholder="Type to search..." className="rounded-none border-0 shadow-none focus-visible:ring-0" />
        <Button variant="outline" className="rounded-none border-0">Search</Button>
      </ShadcnButtonGroup>
    </ShadcnField>
  )
}

export { ShadcnInputButtonGroup }
