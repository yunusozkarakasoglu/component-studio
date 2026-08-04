/**
 * Description
 * Form alanı açıklaması (saf React).
 * @id 141
 * @category Form Elemanları
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Description({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="description" className={cn("mt-1 text-xs text-muted-foreground", className)} {...props} />
}

export { Description }
