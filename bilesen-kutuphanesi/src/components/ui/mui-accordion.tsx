/**
 * MuiAccordion
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Akordeon — genişletilebilir bölümler.
 *   <MuiAccordion items={[{title, content}]} />
 * items · defaultExpanded (ilk açık) · multiple (çoklu açık)
 * @id 2013
 * @category Veri Gösterimi
 * @subcategory MuiAccordion
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

interface MuiAccordionItem {
  title: ReactNode
  content: ReactNode
}

interface MuiAccordionProps {
  items?: MuiAccordionItem[]
  defaultExpanded?: number | number[] | false
  multiple?: boolean
  className?: string
}

function MuiAccordion({ items = [], defaultExpanded = 0, multiple = false, className }: MuiAccordionProps) {
  const initial: number[] = defaultExpanded === false ? [] : Array.isArray(defaultExpanded) ? defaultExpanded : [defaultExpanded]
  const [open, setOpen] = useState<number[]>(initial)

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (multiple) return prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      return prev.includes(i) ? [] : [i]
    })
  }

  return (
    <div className={cn("w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 bg-white", className)}>
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        return (
          <div key={i} className={cn("border-b border-gray-100 last:border-0")}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              <span>{item.title}</span>
              <ChevronDown className={cn("size-4 shrink-0 text-gray-400 transition-transform", isOpen && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-[max-height]", isOpen ? "max-h-96" : "max-h-0")}>
              <div className="px-4 pb-3 text-sm text-gray-600">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { MuiAccordion }
export type { MuiAccordionProps, MuiAccordionItem }
