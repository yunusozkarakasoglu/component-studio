/**
 * ShadcnAccordion familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Akordeon — Accordion + Item + Trigger + Content (tekli/çoklu açılır).
 *   <ShadcnAccordion type="single" defaultValue={["item-1"]}>
 *     <ShadcnAccordionItem value="item-1">
 *       <ShadcnAccordionTrigger>Title</ShadcnAccordionTrigger>
 *       <ShadcnAccordionContent>Content</ShadcnAccordionContent>
 *     </ShadcnAccordionItem>
 *   </ShadcnAccordion>
 * @id 863
 * @category Accordion
 * @subcategory ShadcnAccordion
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

interface AccordionContextValue {
  openItems: string[]
  toggle: (value: string) => void
  multiple: boolean
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useShadcnAccordion(): AccordionContextValue {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("ShadcnAccordion parçaları, ShadcnAccordion içinde kullanılmalı")
  return ctx
}

interface ShadcnAccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (values: string[]) => void
}

function ShadcnAccordion({ className, type = "single", defaultValue, value, onValueChange, children, ...props }: ShadcnAccordionProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
  const values = value !== undefined ? value : internal
  const multiple = type === "multiple"

  const toggle = (v: string) => {
    const next = multiple
      ? values.includes(v) ? values.filter((x) => x !== v) : [...values, v]
      : values.includes(v) ? [] : [v]
    if (value === undefined) setInternal(next)
    onValueChange?.(next)
  }

  return (
    <AccordionContext.Provider value={{ openItems: values, toggle, multiple }}>
      <div data-slot="shadcn-accordion" className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface ShadcnAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  isDisabled?: boolean
}

function ShadcnAccordionItem({ className, value, isDisabled, ...props }: ShadcnAccordionItemProps) {
  return (
    <div
      data-slot="shadcn-accordion-item"
      data-disabled={isDisabled ? "true" : undefined}
      className={cn("border-b border-border", isDisabled && "opacity-50", className)}
      {...props}
    />
  )
}

interface ShadcnAccordionTriggerProps extends Omit<HTMLAttributes<HTMLButtonElement>, "disabled"> {
  value: string
  disabled?: boolean
}

function ShadcnAccordionTrigger({ className, value, children, disabled, onClick, ...props }: ShadcnAccordionTriggerProps) {
  const ctx = useShadcnAccordion()
  const open = ctx.openItems.includes(value)
  return (
    <button
      type="button"
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      data-slot="shadcn-accordion-trigger"
      disabled={disabled}
      onClick={(e) => {
        if (!disabled) ctx.toggle(value)
        onClick?.(e)
      }}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground transition-colors outline-none select-none",
        "hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" data-state={open ? "open" : "closed"} />
    </button>
  )
}

interface ShadcnAccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function ShadcnAccordionContent({ className, value, children, ...props }: ShadcnAccordionContentProps) {
  const ctx = useShadcnAccordion()
  if (!ctx.openItems.includes(value)) return null
  return (
    <div
      data-slot="shadcn-accordion-content"
      className={cn("overflow-hidden pb-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnAccordion, ShadcnAccordionContent, ShadcnAccordionItem, ShadcnAccordionTrigger }
export type { ShadcnAccordionContentProps, ShadcnAccordionItemProps, ShadcnAccordionProps, ShadcnAccordionTriggerProps }
