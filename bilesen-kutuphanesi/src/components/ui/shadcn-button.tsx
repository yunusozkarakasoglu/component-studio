/**
 * ShadcnButton
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Buton — variant + size çeşitleri.
 *   <ShadcnButton variant="outline" size="sm">Button</ShadcnButton>
 * variant: default | secondary | outline | ghost | destructive | link
 * size: xs | icon-xs | sm | icon-sm | default | icon | lg | icon-lg
 * @id 741
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "xs" | "icon-xs" | "sm" | "icon-sm" | "default" | "icon" | "lg" | "icon-lg"
}

const buttonVariants: Record<string, string> = {
  default: "bg-blue-600 text-white shadow-xs hover:bg-blue-700",
  secondary: "bg-muted text-foreground shadow-xs hover:bg-muted/80",
  outline: "border border-border bg-background text-foreground shadow-xs hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
  destructive: "bg-red-600 text-white shadow-xs hover:bg-red-700",
  link: "text-blue-600 underline-offset-4 hover:underline",
}

const buttonSizes: Record<string, string> = {
  xs: "h-7 gap-1.5 rounded-md px-2.5 text-xs",
  "icon-xs": "size-7 rounded-md",
  sm: "h-8 gap-2 rounded-md px-3 text-xs",
  "icon-sm": "size-8 rounded-md",
  default: "h-9 gap-2 rounded-md px-4 text-sm",
  icon: "size-9 rounded-md",
  lg: "h-10 gap-2 rounded-md px-6 text-sm",
  "icon-lg": "size-10 rounded-md",
}

function ShadcnButton({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ShadcnButtonProps) {
  return (
    <button
      type={type}
      data-slot="shadcn-button"
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center font-medium whitespace-nowrap transition-colors outline-none",
        "focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[icon=inline-start]:[&_svg]:mr-1.5 data-[icon=inline-end]:[&_svg]:ml-1.5",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  )
}

export { ShadcnButton }
export type { ShadcnButtonProps }
