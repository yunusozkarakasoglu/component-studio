/**
 * ShadcnInputFile
 * Dosya input'u (saf React, shadcn kaynaklı).
 * @id 624
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputFile() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="picture">Picture</ShadcnFieldLabel>
      <ShadcnInput id="picture" type="file" />
      <ShadcnFieldDescription>Select a picture to upload.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputFile }
