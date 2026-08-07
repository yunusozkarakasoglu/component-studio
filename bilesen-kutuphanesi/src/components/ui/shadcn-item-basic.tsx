/**
 * ShadcnItemBasic
 * Temel öğe (saf React, shadcn kaynaklı).
 * @id 998
 * @category Genel
 * @subcategory ShadcnItem
 * @source shadcn
 */
import {
  ShadcnItem,
  ShadcnItemActions,
  ShadcnItemContent,
  ShadcnItemDescription,
  ShadcnItemTitle,
} from "@/components/ui/shadcn-item"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnItemBasic() {
  return (
    <ShadcnItem variant="muted" className="max-w-md">
      <ShadcnItemContent>
        <ShadcnItemTitle>Update available</ShadcnItemTitle>
        <ShadcnItemDescription>Version 2.0 is ready to install.</ShadcnItemDescription>
      </ShadcnItemContent>
      <ShadcnItemActions>
        <ShadcnButton size="sm">Update</ShadcnButton>
      </ShadcnItemActions>
    </ShadcnItem>
  )
}

export { ShadcnItemBasic }
