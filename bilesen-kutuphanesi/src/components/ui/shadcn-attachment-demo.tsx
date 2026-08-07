/**
 * ShadcnAttachmentDemo
 * Temel örnek — dosya ekleri (saf React, shadcn kaynaklı).
 * @id 1002
 * @category Genel
 * @subcategory ShadcnAttachment
 * @source shadcn
 */
import { FileCode, X } from "@/components/ui/icons"
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"
import {
  ShadcnAttachment,
  ShadcnAttachmentAction,
  ShadcnAttachmentActions,
  ShadcnAttachmentContent,
  ShadcnAttachmentDescription,
  ShadcnAttachmentGroup,
  ShadcnAttachmentMedia,
  ShadcnAttachmentTitle,
} from "@/components/ui/shadcn-attachment"

function ShadcnAttachmentDemo() {
  return (
    <ShadcnAttachmentGroup className="mx-auto max-w-sm">
      <ShadcnAttachment state="uploading" className="w-full">
        <ShadcnAttachmentMedia>
          <ShadcnSpinner />
        </ShadcnAttachmentMedia>
        <ShadcnAttachmentContent>
          <ShadcnAttachmentTitle>sales-dashboard.pdf</ShadcnAttachmentTitle>
          <ShadcnAttachmentDescription>Uploading · 64%</ShadcnAttachmentDescription>
        </ShadcnAttachmentContent>
        <ShadcnAttachmentActions>
          <ShadcnAttachmentAction aria-label="Cancel upload">
            <X className="size-4" />
          </ShadcnAttachmentAction>
        </ShadcnAttachmentActions>
      </ShadcnAttachment>
      <ShadcnAttachment className="w-full">
        <ShadcnAttachmentMedia>
          <FileCode className="size-4" />
        </ShadcnAttachmentMedia>
        <ShadcnAttachmentContent>
          <ShadcnAttachmentTitle>message-renderer.tsx</ShadcnAttachmentTitle>
          <ShadcnAttachmentDescription>TypeScript · 12 KB</ShadcnAttachmentDescription>
        </ShadcnAttachmentContent>
        <ShadcnAttachmentActions>
          <ShadcnAttachmentAction aria-label="Remove file">
            <X className="size-4" />
          </ShadcnAttachmentAction>
        </ShadcnAttachmentActions>
      </ShadcnAttachment>
    </ShadcnAttachmentGroup>
  )
}

export { ShadcnAttachmentDemo }
