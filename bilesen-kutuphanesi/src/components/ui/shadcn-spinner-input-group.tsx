/**
 * ShadcnSpinnerInputGroup
 * Giriş grubunda spinner (saf React, shadcn kaynaklı).
 * @id 956
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnSpinnerInputGroup() {
  return (
    <ShadcnInputGroup className="max-w-sm">
      <ShadcnInputGroupInput placeholder="Searching..." />
      <ShadcnInputGroupAddon align="inline-end">
        <ShadcnSpinner />
      </ShadcnInputGroupAddon>
    </ShadcnInputGroup>
  )
}

export { ShadcnSpinnerInputGroup }
