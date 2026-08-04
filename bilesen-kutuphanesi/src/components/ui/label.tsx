/**
 * Label
 * Form elemanları için etiket (saf React).
 * @id 136
 * @category Form Elemanları
 */
import type { LabelHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("block text-sm font-medium text-foreground", className)} {...props} />
}

export { Label }
