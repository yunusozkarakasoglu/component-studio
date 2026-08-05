/**
 * Tooltip
 * Saf React bileşen (bağımlılıksız).
 * Üzerine gelindiğinde/foküslandığında bilgilendirici metin gösterir.
 *   <Tooltip delay={0}>
 *     <Button>Hover me</Button>
 *     <TooltipContent placement="top" showArrow>
 *       <TooltipArrow />
 *       <p>Bu bir tooltip</p>
 *     </TooltipContent>
 *   </Tooltip>
 * Özellikler: delay/closeDelay · trigger (hover/focus) · isDisabled · placement
 * (top/bottom/left/right) · offset · showArrow · Content render prop.
 * @id 454
 * @category Overlay
 * @subcategory Tooltip
 */
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type TooltipPlacement = "top" | "bottom" | "left" | "right"

interface TooltipContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

function useTooltip(): TooltipContextValue {
  const ctx = useContext(TooltipContext)
  if (!ctx) throw new Error("useTooltip, <Tooltip> içinde kullanılmalı")
  return ctx
}

interface TooltipProps {
  children?: ReactNode
  /** Gösterim gecikmesi (ms) */
  delay?: number
  closeDelay?: number
  trigger?: "hover" | "focus"
  isDisabled?: boolean
}

function Tooltip({ children, delay = 700, closeDelay = 0, trigger = "hover", isDisabled = false }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (isDisabled) return
    if (hideTimer.current) clearTimeout(hideTimer.current)
    showTimer.current = setTimeout(() => setIsOpen(true), delay)
  }

  const close = () => {
    if (showTimer.current) clearTimeout(showTimer.current)
    hideTimer.current = setTimeout(() => setIsOpen(false), closeDelay)
  }

  const contextValue: TooltipContextValue = { isOpen, open, close }

  const kids = Children.toArray(children)
  const triggerEl = kids[0] as ReactElement | undefined
  const content = kids[1] as ReactElement | undefined

  const triggerProps: Record<string, unknown> = {}
  if (trigger === "hover") {
    triggerProps.onMouseEnter = open
    triggerProps.onMouseLeave = close
  } else {
    triggerProps.onFocus = open
    triggerProps.onBlur = close
  }
  const triggerWithHandlers = triggerEl ? cloneElement(triggerEl, triggerProps) : null

  return (
    <TooltipContext.Provider value={contextValue}>
      <div data-slot="tooltip" className="relative inline-flex">
        {triggerWithHandlers}
        {isOpen && content ? cloneElement(content, {} as Record<string, unknown>) : null}
      </div>
    </TooltipContext.Provider>
  )
}

/* ---------- Trigger ---------- */

interface TooltipTriggerProps {
  children?: ReactNode
  className?: string
  "aria-label"?: string
}

function TooltipTrigger({ children, className, ...props }: TooltipTriggerProps) {
  const ctx = useTooltip()
  return (
    <div
      data-slot="tooltip-trigger"
      className={cn("cursor-help", className)}
      onMouseEnter={ctx.open}
      onMouseLeave={ctx.close}
      onFocus={ctx.open}
      onBlur={ctx.close}
      {...props}
    >
      {children}
    </div>
  )
}

/* ---------- Content ---------- */

interface TooltipContentProps {
  children?: ReactNode
  className?: string
  placement?: TooltipPlacement
  offset?: number
  showArrow?: boolean
  render?: (props: Record<string, unknown>) => ReactNode
}

const placementClass: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2",
  bottom: "top-full left-1/2 -translate-x-1/2",
  left: "right-full top-1/2 -translate-y-1/2",
  right: "left-full top-1/2 -translate-y-1/2",
}

const marginStyle: Record<TooltipPlacement, React.CSSProperties> = {
  top: { marginBottom: 6 },
  bottom: { marginTop: 6 },
  left: { marginRight: 6 },
  right: { marginLeft: 6 },
}

function TooltipContent({ children, className, placement = "top", offset, showArrow = false, render }: TooltipContentProps) {
  const ctx = useTooltip()
  const margin = marginStyle[placement]
  const o = offset ?? (showArrow ? 7 : 3)
  const style: React.CSSProperties =
    placement === "top"
      ? { marginBottom: o }
      : placement === "bottom"
        ? { marginTop: o }
        : placement === "left"
          ? { marginRight: o }
          : { marginLeft: o }

  const rootProps: Record<string, unknown> = {
    "data-slot": "tooltip-content",
    "data-placement": placement,
    "data-entering": "",
    style: { ...margin, ...style },
    className: cn(
      "absolute z-50 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg",
      "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-150",
      placementClass[placement],
      className
    ),
  }

  const content = <TooltipContext.Provider value={ctx}>{children}</TooltipContext.Provider>

  if (render) return <>{render({ ...rootProps, children: content })}</>
  return <div {...rootProps}>{content}</div>
}

/* ---------- Arrow ---------- */

interface TooltipArrowProps {
  className?: string
}

function TooltipArrow({ className }: TooltipArrowProps) {
  return (
    <span
      data-slot="tooltip-arrow"
      aria-hidden="true"
      className={cn(
        "absolute size-1.5 rotate-45 bg-foreground",
        "top-[-3px] left-1/2 -ml-[3px]",
        className
      )}
    />
  )
}

export { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger, useTooltip }
export type { TooltipArrowProps, TooltipContentProps, TooltipProps }
