/**
 * ShadcnScrollArea
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Kaydırılabilir alan — ince scrollbar'lı.
 *   <ShadcnScrollArea className="h-72 w-48 rounded-md border">…</ShadcnScrollArea>
 * Not: kaynak base-ui kullanır; burada native scroll + ince scrollbar stili kullanıldı.
 * @id 989
 * @category Genel
 * @subcategory ShadcnScrollArea
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnScrollAreaProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnScrollArea({ className, children, ...props }: ShadcnScrollAreaProps) {
  return (
    <div
      data-slot="shadcn-scroll-area"
      className={cn(
        "relative overflow-auto",
        "scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnScrollArea }
export type { ShadcnScrollAreaProps }
