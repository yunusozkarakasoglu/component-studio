/**
 * ShadcnScrollAreaHorizontalDemo
 * Yatay kaydırma (saf React, shadcn kaynaklı).
 * @id 991
 * @category Genel
 * @subcategory ShadcnScrollArea
 * @source shadcn
 */
import { ShadcnScrollArea } from "@/components/ui/shadcn-scroll-area"

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

function ShadcnScrollAreaHorizontalDemo() {
  return (
    <ShadcnScrollArea className="h-20 w-full max-w-sm whitespace-nowrap rounded-md border">
      <div className="flex h-full w-max gap-2 p-3">
        {items.map((item) => (
          <div key={item} className="flex h-full min-w-28 items-center justify-center rounded-md border border-border px-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </ShadcnScrollArea>
  )
}

export { ShadcnScrollAreaHorizontalDemo }
