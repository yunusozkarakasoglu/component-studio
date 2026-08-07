/**
 * ShadcnEmptyOutline
 * Dış çizgili boş durum (saf React, shadcn kaynaklı).
 * @id 927
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import { FileText } from "@/components/ui/icons"
import {
  ShadcnEmpty,
  ShadcnEmptyDescription,
  ShadcnEmptyHeader,
  ShadcnEmptyMedia,
  ShadcnEmptyTitle,
} from "@/components/ui/shadcn-empty"

function ShadcnEmptyOutline() {
  return (
    <ShadcnEmpty className="rounded-lg border">
      <ShadcnEmptyHeader>
        <ShadcnEmptyMedia variant="icon">
          <FileText className="size-5" />
        </ShadcnEmptyMedia>
        <ShadcnEmptyTitle>No Documents</ShadcnEmptyTitle>
        <ShadcnEmptyDescription>
          There are no documents in this folder yet.
        </ShadcnEmptyDescription>
      </ShadcnEmptyHeader>
    </ShadcnEmpty>
  )
}

export { ShadcnEmptyOutline }
