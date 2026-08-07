/**
 * ShadcnScrollAreaDemo
 * Temel örnek — sürüm etiketleri (saf React, shadcn kaynaklı).
 * @id 990
 * @category Genel
 * @subcategory ShadcnScrollArea
 * @source shadcn
 */
import { ShadcnScrollArea } from "@/components/ui/shadcn-scroll-area"
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

function ShadcnScrollAreaDemo() {
  return (
    <ShadcnScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <ShadcnSeparator className="my-2" />
          </div>
        ))}
      </div>
    </ShadcnScrollArea>
  )
}

export { ShadcnScrollAreaDemo }
