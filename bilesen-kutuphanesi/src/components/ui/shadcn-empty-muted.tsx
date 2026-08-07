/**
 * ShadcnEmptyMuted
 * Soluk arka planlı boş durum (saf React, shadcn kaynaklı).
 * @id 928
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import { Inbox } from "@/components/ui/icons"
import {
  ShadcnEmpty,
  ShadcnEmptyDescription,
  ShadcnEmptyHeader,
  ShadcnEmptyMedia,
  ShadcnEmptyTitle,
} from "@/components/ui/shadcn-empty"

function ShadcnEmptyMuted() {
  return (
    <ShadcnEmpty className="rounded-lg bg-muted/40">
      <ShadcnEmptyHeader>
        <ShadcnEmptyMedia variant="icon">
          <Inbox className="size-5" />
        </ShadcnEmptyMedia>
        <ShadcnEmptyTitle>Inbox Zero</ShadcnEmptyTitle>
        <ShadcnEmptyDescription>
          You&apos;re all caught up. No new messages.
        </ShadcnEmptyDescription>
      </ShadcnEmptyHeader>
    </ShadcnEmpty>
  )
}

export { ShadcnEmptyMuted }
