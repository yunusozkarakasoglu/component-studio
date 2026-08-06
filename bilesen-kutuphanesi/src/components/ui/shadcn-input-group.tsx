/**
 * ShadcnInputGroup familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * InputGroup + Addon (align) + Input + Text + Button + Textarea compound.
 *   <ShadcnInputGroup>
 *     <ShadcnInputGroupInput placeholder="Search..." />
 *     <ShadcnInputGroupAddon><Search /></ShadcnInputGroupAddon>
 *     <ShadcnInputGroupAddon align="inline-end"><ShadcnKbd>⌘K</ShadcnKbd></ShadcnInputGroupAddon>
 *   </ShadcnInputGroup>
 * align: inline-start (varsayılan) · inline-end · block-start (üst) · block-end (alt).
 * @id 662
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type AddonAlign = "inline-start" | "inline-end" | "block-start" | "block-end"

interface ShadcnInputGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnInputGroup({ className, ...props }: ShadcnInputGroupProps) {
  return (
    <div
      data-slot="shadcn-input-group"
      className={cn("group relative flex w-full flex-col gap-1.5", className)}
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
        "pointer-events-none absolute top-0 z-10 flex h-full items-center gap-1.5 px-3 text-sm text-muted-foreground",
        align === "inline-start" && "left-0",
        align === "inline-end" && "right-0",
        align === "block-start" && "static mb-1.5 h-auto px-0",
        align === "block-end" && "static mt-1.5 h-auto px-0",
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
        "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors outline-none",
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "group-focus-within:border-ring group-focus-within:ring-3 group-focus-within:ring-ring/40",
        "group-has-[[data-align=inline-start]]:pl-10 group-has-[[data-align=inline-end]]:pr-10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnInputGroupTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function ShadcnInputGroupTextarea({ className, ...props }: ShadcnInputGroupTextareaProps) {
  return (
    <textarea
      data-slot="shadcn-input-group-textarea"
      className={cn(
        "flex min-h-16 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors outline-none",
        "placeholder:text-muted-foreground group-focus-within:border-ring group-focus-within:ring-3 group-focus-within:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnInputGroupTextProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnInputGroupText({ className, ...props }: ShadcnInputGroupTextProps) {
  return (
    <span
      data-slot="shadcn-input-group-text"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

interface ShadcnInputGroupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost"
  size?: "default" | "sm" | "icon-xs"
}

function ShadcnInputGroupButton({ className, variant = "default", size = "default", ...props }: ShadcnInputGroupButtonProps) {
  return (
    <button
      data-slot="shadcn-input-group-button"
      className={cn(
        "pointer-events-auto inline-flex items-center justify-center gap-1 rounded-md border font-medium transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40",
        variant === "default" && "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" && "border-border bg-background text-foreground hover:bg-muted",
        variant === "ghost" && "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
        size === "default" && "h-7 px-2.5 text-xs",
        size === "sm" && "h-6 px-2 text-xs",
        size === "icon-xs" && "size-6 p-0",
        className
      )}
      {...props}
    />
  )
}

export {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupInput,
  ShadcnInputGroupText,
  ShadcnInputGroupTextarea,
}
export type {
  AddonAlign,
  ShadcnInputGroupAddonProps,
  ShadcnInputGroupButtonProps,
  ShadcnInputGroupInputProps,
  ShadcnInputGroupProps,
  ShadcnInputGroupTextareaProps,
  ShadcnInputGroupTextProps,
}
