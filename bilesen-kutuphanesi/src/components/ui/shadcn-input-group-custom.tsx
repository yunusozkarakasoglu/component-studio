/**
 * ShadcnInputGroupCustom
 * Özel kontrollü grup — data-slot ile fokus yönetimi (saf React, shadcn kaynaklı).
 * Not: kaynaktaki TextareaAutosize üçüncü parti olduğundan saf React textarea ile çevrildi.
 * @id 675
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupCustom() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ShadcnInputGroup>
        <textarea
          data-slot="shadcn-input-group-control"
          className="min-h-16 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors group-focus-within:border-ring group-focus-within:ring-3 group-focus-within:ring-ring/40"
          placeholder="Autoresize textarea..."
        />
        <ShadcnInputGroupAddon align="block-end">
          <ShadcnInputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupCustom }
