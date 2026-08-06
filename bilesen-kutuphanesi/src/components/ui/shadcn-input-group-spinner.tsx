/**
 * ShadcnInputGroupSpinner
 * Yükleniyor durumu — Spinner ekleri (saf React, shadcn kaynaklı).
 * Spinner: kütüphanenin mevcut bileşeni.
 * @id 673
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Spinner } from "@/components/ui/spinner"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
  ShadcnInputGroupText,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Searching..." />
        <ShadcnInputGroupAddon align="inline-end">
          <Spinner />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Processing..." />
        <ShadcnInputGroupAddon>
          <Spinner />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Saving changes..." />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupText>Saving...</ShadcnInputGroupText>
          <Spinner />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Refreshing data..." />
        <ShadcnInputGroupAddon>
          <Spinner />
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupText className="text-muted-foreground">
            Please wait...
          </ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupSpinner }
