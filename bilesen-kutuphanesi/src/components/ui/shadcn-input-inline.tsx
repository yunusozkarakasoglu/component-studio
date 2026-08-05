/**
 * ShadcnInputInline
 * Yatay field + arama butonu (saf React, shadcn kaynaklı).
 * @id 625
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnField } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputInline() {
  return (
    <ShadcnField orientation="horizontal" className="w-full max-w-sm">
      <ShadcnInput type="search" placeholder="Search..." />
      <Button>Search</Button>
    </ShadcnField>
  )
}

export { ShadcnInputInline }
