/**
 * ShadcnInput
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Temel metin girişi — Field compound ile birlikte kullanılır.
 *   <ShadcnInput placeholder="Enter text" />
 *   <ShadcnField>
 *     <ShadcnFieldLabel htmlFor="x">Username</ShadcnFieldLabel>
 *     <ShadcnInput id="x" placeholder="…" />
 *     <ShadcnFieldDescription>…</ShadcnFieldDescription>
 *   </ShadcnField>
 * Özellikler: native input attribute'ları · aria-invalid (data-invalid ile) ·
 * disabled/required/type=file.
 * @id 615
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ShadcnInput({ className, type, ...props }: ShadcnInputProps) {
  return (
    <input
      type={type}
      data-slot="shadcn-input"
      className={cn(
        "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors outline-none",
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:focus-visible:ring-red-500/30",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { ShadcnInput }
export type { ShadcnInputProps }
