/**
 * ShadcnTextarea
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Çok satırlı metin alanı.
 *   <ShadcnTextarea placeholder="Type your message here." />
 * @id 636
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import type { TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function ShadcnTextarea({ className, ...props }: ShadcnTextareaProps) {
  return (
    <textarea
      data-slot="shadcn-textarea"
      className={cn(
        "flex min-h-16 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors outline-none",
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:focus-visible:ring-red-500/30",
        className
      )}
      {...props}
    />
  )
}

export { ShadcnTextarea }
export type { ShadcnTextareaProps }
