/**
 * ShadcnCollapsible familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Açılır/kapanır panel — Collapsible + Trigger + Content.
 *   <ShadcnCollapsible>
 *     <ShadcnCollapsibleTrigger>Toggle</ShadcnCollapsibleTrigger>
 *     <ShadcnCollapsibleContent>…</ShadcnCollapsibleContent>
 *   </ShadcnCollapsible>
 * open/onOpenChange (kontrollü) desteklenir.
 * @id 931
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface CollapsibleContextValue {
  open: boolean
  toggle: () => void
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null)

function useShadcnCollapsible(): CollapsibleContextValue {
  const ctx = useContext(CollapsibleContext)
  if (!ctx) throw new Error("ShadcnCollapsible parçaları, ShadcnCollapsible içinde kullanılmalı")
  return ctx
}

interface ShadcnCollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnCollapsible({ className, open, defaultOpen, onOpenChange, children, ...props }: ShadcnCollapsibleProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const toggle = () => {
    const next = !isOpen
    if (open === undefined) setInternal(next)
    onOpenChange?.(next)
  }
  return (
    <CollapsibleContext.Provider value={{ open: isOpen, toggle }}>
      <div data-slot="shadcn-collapsible" data-state={isOpen ? "open" : "closed"} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

interface ShadcnCollapsibleTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnCollapsibleTrigger({ className, children, onClick, ...props }: ShadcnCollapsibleTriggerProps) {
  const ctx = useShadcnCollapsible()
  return (
    <button
      type="button"
      aria-expanded={ctx.open}
      data-slot="shadcn-collapsible-trigger"
      onClick={(e) => {
        ctx.toggle()
        onClick?.(e)
      }}
      className={cn("inline-flex cursor-pointer items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring/40", className)}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnCollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCollapsibleContent({ className, children, ...props }: ShadcnCollapsibleContentProps) {
  const ctx = useShadcnCollapsible()
  if (!ctx.open) return null
  return (
    <div data-slot="shadcn-collapsible-content" className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
}

export { ShadcnCollapsible, ShadcnCollapsibleContent, ShadcnCollapsibleTrigger }
export type { ShadcnCollapsibleContentProps, ShadcnCollapsibleProps, ShadcnCollapsibleTriggerProps }
