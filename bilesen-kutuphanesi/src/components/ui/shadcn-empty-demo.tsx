/**
 * ShadcnEmptyDemo
 * Temel örnek — proje yok durumu (saf React, shadcn kaynaklı).
 * @id 926
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import { FolderOpen } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnEmpty,
  ShadcnEmptyContent,
  ShadcnEmptyDescription,
  ShadcnEmptyHeader,
  ShadcnEmptyMedia,
  ShadcnEmptyTitle,
} from "@/components/ui/shadcn-empty"

function ShadcnEmptyDemo() {
  return (
    <ShadcnEmpty className="rounded-lg border border-dashed">
      <ShadcnEmptyHeader>
        <ShadcnEmptyMedia variant="icon">
          <FolderOpen className="size-5" />
        </ShadcnEmptyMedia>
        <ShadcnEmptyTitle>No Projects Yet</ShadcnEmptyTitle>
        <ShadcnEmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </ShadcnEmptyDescription>
      </ShadcnEmptyHeader>
      <ShadcnEmptyContent className="flex-row justify-center gap-2">
        <ShadcnButton>Create Project</ShadcnButton>
        <ShadcnButton variant="outline">Import Project</ShadcnButton>
      </ShadcnEmptyContent>
    </ShadcnEmpty>
  )
}

export { ShadcnEmptyDemo }
