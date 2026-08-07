/**
 * MtActionIconInputSize
 * Giriş boyutunda ikon butonu (saf React, Mantine kaynaklı).
 * @id 1090
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Eye } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"
import { MtGroup } from "@/components/ui/mt-group"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function MtActionIconInputSize() {
  return (
    <MtGroup gap="xs">
      <ShadcnInput placeholder="Enter password" type="password" className="flex-1" />
      <MtActionIcon variant="default" aria-label="Show password">
        <Eye className="size-4" />
      </MtActionIcon>
    </MtGroup>
  )
}

export { MtActionIconInputSize }
