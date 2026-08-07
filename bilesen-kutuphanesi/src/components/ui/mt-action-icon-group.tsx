/**
 * MtActionIconGroup
 * İkon buton grubu (saf React, Mantine kaynaklı).
 * @id 1088
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconGroup() {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border">
      <MtActionIcon variant="default" className="rounded-none border-r border-border" aria-label="Bold">
        <Bold className="size-4" />
      </MtActionIcon>
      <MtActionIcon variant="default" className="rounded-none border-r border-border" aria-label="Italic">
        <Italic className="size-4" />
      </MtActionIcon>
      <MtActionIcon variant="default" className="rounded-none" aria-label="Underline">
        <Underline className="size-4" />
      </MtActionIcon>
    </div>
  )
}

export { MtActionIconGroup }
