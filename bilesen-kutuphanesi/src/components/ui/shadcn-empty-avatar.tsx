/**
 * ShadcnEmptyAvatar
 * Avatarlı boş durum (saf React, shadcn kaynaklı).
 * @id 929
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import { User } from "@/components/ui/icons"
import {
  ShadcnEmpty,
  ShadcnEmptyDescription,
  ShadcnEmptyHeader,
  ShadcnEmptyMedia,
  ShadcnEmptyTitle,
} from "@/components/ui/shadcn-empty"

function ShadcnEmptyAvatar() {
  return (
    <ShadcnEmpty className="rounded-lg border border-dashed">
      <ShadcnEmptyHeader>
        <ShadcnEmptyMedia variant="avatar">
          <User className="size-5" />
        </ShadcnEmptyMedia>
        <ShadcnEmptyTitle>No Team Members</ShadcnEmptyTitle>
        <ShadcnEmptyDescription>
          Invite your team members to start collaborating.
        </ShadcnEmptyDescription>
      </ShadcnEmptyHeader>
    </ShadcnEmpty>
  )
}

export { ShadcnEmptyAvatar }
