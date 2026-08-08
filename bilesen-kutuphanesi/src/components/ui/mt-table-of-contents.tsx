/**
 * MtTableOfContents
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İçindekiler — belgedeki h1-h6 başlıklarını tarar, tıklayınca kaydırır.
 *   <MtTableOfContents contentRef={ref} />
 * @id 1772
 * @category Özel Komponentler
 * @subcategory MtTableOfContents
 * @source mantine
 */
import { useEffect, useState, type RefObject } from "react"
import { cn } from "@/lib/utils"

interface MtTocItem {
  id: string
  label: string
  depth: number
}

interface MtTableOfContentsProps {
  contentRef?: RefObject<HTMLElement | null> | null
  depth?: number
  className?: string
}

function MtTableOfContents({ contentRef, depth = 6, className }: MtTableOfContentsProps) {
  const [items, setItems] = useState<MtTocItem[]>([])
  const [active, setActive] = useState("")

  useEffect(() => {
    const el = contentRef?.current
    if (!el) return
    const headings = Array.from(el.querySelectorAll<HTMLElement>(`h1, h2, h3, h4, h5, h6`)).filter(
      (h) => parseInt(h.tagName[1], 10) <= depth
    )
    const toc = headings.map((h, i) => {
      const id = h.id || `toc-${i}`
      if (!h.id) h.id = id
      return { id, label: h.textContent ?? "", depth: parseInt(h.tagName[1], 10) }
    })
    setItems(toc)

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    )
    headings.forEach((h) => obs.observe(h))
    return () => obs.disconnect()
  }, [contentRef, depth])

  if (items.length === 0) {
    return <p className="px-2 text-xs text-muted-foreground">Başlık bulunamadı — belgede h1-h6 kullanın.</p>
  }

  return (
    <nav data-slot="mt-table-of-contents" className={cn("flex flex-col gap-0.5", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => contentRef?.current?.querySelector(`#${item.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className={cn(
            "cursor-pointer rounded-md px-2 py-1 text-left text-xs transition-colors",
            active === item.id ? "bg-blue-50 font-medium text-blue-700" : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
          style={{ paddingLeft: 8 + (item.depth - 1) * 10 }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export { MtTableOfContents }
export type { MtTableOfContentsProps, MtTocItem }
