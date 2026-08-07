/**
 * ShadcnScrollAreaRtl
 * RTL örneği — Arapça kaydırma (saf React, shadcn kaynaklı).
 * @id 992
 * @category Genel
 * @subcategory ShadcnScrollArea
 * @source shadcn
 */
import { ShadcnScrollArea } from "@/components/ui/shadcn-scroll-area"

const items = Array.from({ length: 30 }, (_, i) => `عنصر ${i + 1}`)

function ShadcnScrollAreaRtl() {
  return (
    <ShadcnScrollArea className="h-48 w-48 rounded-md border" dir="rtl">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">العناصر</h4>
        {items.map((item) => (
          <div key={item} className="py-1.5 text-sm">{item}</div>
        ))}
      </div>
    </ShadcnScrollArea>
  )
}

export { ShadcnScrollAreaRtl }
