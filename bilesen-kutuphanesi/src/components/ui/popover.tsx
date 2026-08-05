/**
 * Popover
 * Saf React bileşen (bağımlılıksız).
 * Buton veya özel öğe ile tetiklenen zengin içerik balonu — trigger'a göre konumlanır.
 *   <Popover>
 *     <Button>Click me</Button>
 *     <PopoverContent placement="bottom" offset={8}>
 *       <PopoverDialog>
 *         <PopoverArrow />
 *         <PopoverHeading>Başlık</PopoverHeading>
 *         <p>İçerik…</p>
 *       </PopoverDialog>
 *     </PopoverContent>
 *   </Popover>
 * Özellikler: isOpen/defaultOpen/onOpenChange (kontrollü) · placement
 * (top/bottom/left/right) · offset · Content render prop · dışarı tıklama ile
 * kapanma · giriş animasyonu (tw-animate-css).
 * @id 447
 * @category Overlay
 * @subcategory Popover
 */
import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type PopoverPlacement = "top" | "bottom" | "left" | "right"

interface PopoverContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

function usePopover(): PopoverContextValue {
  const ctx = useContext(PopoverContext)
  if (!ctx) throw new Error("usePopover, <Popover> içinde kullanılmalı")
  return ctx
}

interface PopoverProps {
  children?: ReactNode
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

function Popover({ children, isOpen: isOpenProp, defaultOpen = false, onOpenChange }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = isOpenProp ?? internalOpen

  const open = useCallback(() => {
    setInternalOpen(true)
    onOpenChange?.(true)
  }, [onOpenChange])

  const close = useCallback(() => {
    setInternalOpen(false)
    onOpenChange?.(false)
  }, [onOpenChange])

  const contextValue: PopoverContextValue = { isOpen, open, close }

  const kids = Children.toArray(children)
  const trigger = kids[0] as ReactElement | undefined
  const content = kids[1] as ReactElement | undefined

  const triggerWithHandler = trigger
    ? cloneElement(trigger, { onClick: () => open() } as Record<string, unknown>)
    : null

  return (
    <PopoverContext.Provider value={contextValue}>
      <div data-slot="popover" className="relative inline-flex">
        {triggerWithHandler}
        {isOpen && content ? cloneElement(content, {} as Record<string, unknown>) : null}
      </div>
    </PopoverContext.Provider>
  )
}

/* ---------- Trigger (özel) ---------- */

interface PopoverTriggerProps {
  children?: ReactNode
  className?: string
  "aria-label"?: string
}

function PopoverTrigger({ children, className, ...props }: PopoverTriggerProps) {
  const ctx = usePopover()
  return (
    <div data-slot="popover-trigger" className={cn("cursor-pointer", className)} onClick={ctx.open} {...props}>
      {children}
    </div>
  )
}

/* ---------- Content ---------- */

interface PopoverContentProps {
  children?: ReactNode
  className?: string
  placement?: PopoverPlacement
  offset?: number
  shouldFlip?: boolean
  render?: (props: Record<string, unknown>) => ReactNode
}

const placementClass: Record<PopoverPlacement, string> = {
  bottom: "top-full left-0",
  top: "bottom-full left-0",
  left: "right-full top-0",
  right: "left-full top-0",
}

function PopoverContent({ children, className, placement = "bottom", offset = 8, render }: PopoverContentProps) {
  const ctx = usePopover()
  const dialogRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return
  }, [])

  // Dışarı tıklama ile kapat
  useEffect(() => {
    if (!ctx.isOpen) return
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-slot=popover]")) ctx.close()
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [ctx.isOpen, ctx])

  const marginStyle: Record<PopoverPlacement, React.CSSProperties> = {
    bottom: { marginTop: offset },
    top: { marginBottom: offset },
    left: { marginRight: offset },
    right: { marginLeft: offset },
  }

  const rootProps: Record<string, unknown> = {
    ref: dialogRef,
    "data-slot": "popover-content",
    "data-placement": placement,
    "data-entering": "",
    style: marginStyle[placement],
    className: cn(
      "absolute z-50 min-w-40 rounded-lg border border-border bg-background p-3 text-foreground shadow-xl",
      "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-200",
      placementClass[placement],
      className
    ),
  }

  const content = (
    <PopoverContext.Provider value={ctx}>{children}</PopoverContext.Provider>
  )

  if (render) return <>{render({ ...rootProps, children: content })}</>
  return <div {...rootProps}>{content}</div>
}

/* ---------- Dialog ---------- */

interface PopoverDialogProps {
  children?: ReactNode
  className?: string
}

function PopoverDialog({ children, className }: PopoverDialogProps) {
  return <div data-slot="popover-dialog" className={cn("text-sm", className)}>{children}</div>
}

/* ---------- Heading ---------- */

interface PopoverHeadingProps {
  children?: ReactNode
  className?: string
}

function PopoverHeading({ children, className }: PopoverHeadingProps) {
  return <h3 data-slot="popover-heading" className={cn("text-sm font-semibold", className)}>{children}</h3>
}

/* ---------- Arrow ---------- */

interface PopoverArrowProps {
  className?: string
}

function PopoverArrow({ className }: PopoverArrowProps) {
  return (
    <div
      data-slot="popover-arrow"
      aria-hidden="true"
      data-placement={undefined}
      className={cn(
        "absolute size-2 rotate-45 border-border bg-background",
        "top-[-5px] left-1/2 -ml-1 border-l border-t",
        className
      )}
    />
  )
}

export { Popover, PopoverArrow, PopoverContent, PopoverDialog, PopoverHeading, PopoverTrigger, usePopover }
export type { PopoverArrowProps, PopoverContentProps, PopoverDialogProps, PopoverProps }
