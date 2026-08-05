/**
 * ShadcnInputGroup
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Input içine ikon/metin/buton ekleyen grup — Input/Addon/Text compound.
 *   <ShadcnInputGroup>
 *     <ShadcnInputGroupInput placeholder="example.com" />
 *     <ShadcnInputGroupAddon><ShadcnInputGroupText>https://</ShadcnInputGroupText></ShadcnInputGroupAddon>
 *     <ShadcnInputGroupAddon align="inline-end"><InfoIcon /></ShadcnInputGroupAddon>
 *   </ShadcnInputGroup>
 * Özellikler: align (inline-start/inline-end/block-start/block-end) · bölünmüş
 * kenarlıklar · focus-within vurgusu.
 * @id 617
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import type { HTMLAttributes, InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type AddonAlign = "inline-start" | "inline-end" | "block-start" | "block-end"

interface ShadcnInputGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnInputGroup({ className, ...props }: ShadcnInputGroupProps) {
  return (
    <div
      data-slot="shadcn-input-group"
      className={cn(
        "flex w-full items-stretch overflow-hidden rounded-md border border-border bg-background shadow-xs transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnInputGroupInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ShadcnInputGroupInput({ className, ...props }: ShadcnInputGroupInputProps) {
  return (
    <input
      data-slot="shadcn-input-group-input"
      className={cn(
        "h-9 w-full min-w-0 flex-1 rounded-none border-0 bg-transparent px-3 py-1 text-sm text-foreground outline-none",
        "placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnInputGroupAddonProps extends HTMLAttributes<HTMLDivElement> {
  align?: AddonAlign
}

function ShadcnInputGroupAddon({ className, align = "inline-start", ...props }: ShadcnInputGroupAddonProps) {
  return (
    <div
      data-slot="shadcn-input-group-addon"
      data-align={align}
      className={cn(
        "flex shrink-0 items-center bg-muted/50 text-muted-foreground",
        align === "inline-start" && "border-r border-border",
        align === "inline-end" && "border-l border-border",
        align === "block-start" && "border-b border-border",
        align === "block-end" && "border-t border-border",
        "px-3",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnInputGroupTextProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnInputGroupText({ className, ...props }: ShadcnInputGroupTextProps) {
  return <span data-slot="shadcn-input-group-text" className={cn("text-sm", className)} {...props} />
}

export { ShadcnInputGroup, ShadcnInputGroupAddon, ShadcnInputGroupInput, ShadcnInputGroupText }
export type { AddonAlign, ShadcnInputGroupAddonProps, ShadcnInputGroupInputProps, ShadcnInputGroupProps, ShadcnInputGroupTextProps }
