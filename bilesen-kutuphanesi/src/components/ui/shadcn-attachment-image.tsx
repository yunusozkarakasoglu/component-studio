/**
 * ShadcnAttachmentImage
 * Görselli ek — yerel placeholder (saf React, shadcn kaynaklı).
 * Not: kaynaktaki uzak görseller offline ilkesi gereği gradient ile değiştirildi.
 * @id 1003
 * @category Genel
 * @subcategory ShadcnAttachment
 * @source shadcn
 */
import {
  ShadcnAttachment,
  ShadcnAttachmentContent,
  ShadcnAttachmentDescription,
  ShadcnAttachmentMedia,
  ShadcnAttachmentTitle,
} from "@/components/ui/shadcn-attachment"

function ShadcnAttachmentImage() {
  return (
    <ShadcnAttachment className="mx-auto max-w-sm">
      <ShadcnAttachmentMedia variant="image">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-sm text-white">🏔️</div>
      </ShadcnAttachmentMedia>
      <ShadcnAttachmentContent>
        <ShadcnAttachmentTitle>mountain-view.jpg</ShadcnAttachmentTitle>
        <ShadcnAttachmentDescription>Image · 2.4 MB</ShadcnAttachmentDescription>
      </ShadcnAttachmentContent>
    </ShadcnAttachment>
  )
}

export { ShadcnAttachmentImage }
