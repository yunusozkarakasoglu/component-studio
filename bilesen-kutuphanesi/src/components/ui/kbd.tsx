/**
 * Kbd
 * Saf React bileşen (bağımlılıksız).
 * Klavye kısayolu göstergesi — kbd elementi.
 *   <Kbd>⌘K</Kbd>
 *   <Kbd size="lg"><KbdAbbr>⌘</KbdAbbr><KbdContent>Shift</KbdContent></Kbd>
 * Özellikler: size (sm/md/lg) · variant (default/outline/light) · KbdAbbr
 * (modifier işareti) · KbdContent.
 * @id 608
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Kbd ---------- */

type KbdSize = "sm" | "md" | "lg"
type KbdVariant = "default" | "outline" | "light"

interface KbdProps extends HTMLAttributes<HTMLElement> {
  size?: KbdSize
  variant?: KbdVariant
  children?: ReactNode
}

const kbdSizeClass: Record<KbdSize, string> = {
  sm: "h-5 px-1.5 text-[10px]",
  md: "h-6 px-2 text-xs",
  lg: "h-8 px-2.5 text-sm",
}

const kbdVariantClass: Record<KbdVariant, string> = {
  default: "border-border bg-muted/50 text-foreground shadow-sm",
  outline: "border-border bg-background text-foreground",
  light: "border-transparent bg-muted text-foreground",
}

function Kbd({ className, size = "md", variant = "default", children, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      data-size={size}
      data-variant={variant}
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-md border font-mono font-medium",
        kbdSizeClass[size],
        kbdVariantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}

/* ---------- Abbr (modifier) ---------- */

interface KbdAbbrProps {
  children?: ReactNode
  className?: string
}

function KbdAbbr({ children, className }: KbdAbbrProps) {
  return <abbr data-slot="kbd-abbr" className={cn("no-underline", className)}>{children}</abbr>
}

/* ---------- Content ---------- */

interface KbdContentProps {
  children?: ReactNode
  className?: string
}

function KbdContent({ children, className }: KbdContentProps) {
  return <span data-slot="kbd-content" className={className}>{children}</span>
}

export { Kbd, KbdAbbr, KbdContent }
export type { KbdAbbrProps, KbdContentProps, KbdProps, KbdSize, KbdVariant }
