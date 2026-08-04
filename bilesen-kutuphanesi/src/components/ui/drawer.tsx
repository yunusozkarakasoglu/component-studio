/**
 * Drawer
 * Saf React bileşen (bağımlılıksız).
 * Slide-out panel — ekranın bir kenarından kayan panel (drawer).
 *   <Drawer>
 *     <Button>Open Drawer</Button>
 *     <DrawerBackdrop>
 *       <DrawerContent placement="right">
 *         <DrawerDialog>
 *           <DrawerCloseTrigger />
 *           <DrawerHeader><DrawerHeading>Başlık</DrawerHeading></DrawerHeader>
 *           <DrawerBody>…</DrawerBody>
 *           <DrawerFooter><Button slot="close">Kapat</Button></DrawerFooter>
 *         </DrawerDialog>
 *       </DrawerContent>
 *     </DrawerBackdrop>
 *   </Drawer>
 * Özellikler: placement (bottom/top/left/right) · backdrop variant (opaque/blur/transparent) ·
 * isDismissable · isKeyboardDismissDisabled · kontrollü (isOpen/onOpenChange) ·
 * ESC + scroll lock + focus · kenar animasyonu (tw-animate-css).
 * @id 275
 * @category Panel & Drawer
 */
import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

/* ---------- Types ---------- */

type DrawerPlacement = "bottom" | "top" | "left" | "right"
type DrawerBackdropVariant = "opaque" | "blur" | "transparent"

interface DrawerOverlayState {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setOpen: (v: boolean) => void
}

/** kütüphane useOverlayState karşılığı — saf React hook */
function useOverlayState({ defaultOpen = false, onOpenChange }: { defaultOpen?: boolean; onOpenChange?: (v: boolean) => void } = {}): DrawerOverlayState {
  const [isOpen, setOpenState] = useState(defaultOpen)
  const setOpen = useCallback((v: boolean) => { setOpenState(v); onOpenChange?.(v) }, [onOpenChange])
  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(!isOpen),
    setOpen,
  }
}

interface DrawerContextValue extends DrawerOverlayState {
  placement: DrawerPlacement
  setPlacement: (p: DrawerPlacement) => void
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

/** Compound parçalarından state/placement erişimi */
function useDrawer(): DrawerContextValue {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("useDrawer, <Drawer> içinde kullanılmalı")
  return ctx
}

/* ---------- Ana bileşen ---------- */

interface DrawerProps {
  /** İlk çocuk = trigger; ikinci çocuk = Backdrop */
  children?: ReactNode
}

function Drawer({ children }: DrawerProps) {
  const state = useOverlayState()
  const [placement, setPlacement] = useState<DrawerPlacement>("bottom")

  const kids = Children.toArray(children)
  const trigger = kids[0] as ReactElement | undefined
  const backdrop = kids[1] as ReactElement | undefined

  // Trigger'a tıklama bağla (Button onClick ile açılır)
  const triggerWithHandler = trigger
    ? cloneElement(trigger, { onClick: () => state.open() } as Record<string, unknown>)
    : null

  const contextValue: DrawerContextValue = { ...state, placement, setPlacement }

  return (
    <DrawerContext.Provider value={contextValue}>
      {state.isOpen && backdrop
        ? cloneElement(backdrop, {} as Record<string, unknown>)
        : triggerWithHandler}
    </DrawerContext.Provider>
  )
}

/* ---------- Backdrop ---------- */

interface DrawerBackdropProps {
  children?: ReactNode
  className?: string
  variant?: DrawerBackdropVariant
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  onOpenChange?: (v: boolean) => void
}

const backdropVariantClass: Record<DrawerBackdropVariant, string> = {
  opaque: "bg-black/50",
  blur: "bg-black/30 backdrop-blur-sm",
  transparent: "bg-transparent",
}

const backdropPos: Record<DrawerPlacement, string> = {
  right: "justify-end",
  left: "justify-start",
  top: "items-start",
  bottom: "items-end",
}

function DrawerBackdrop({
  children,
  className,
  variant = "opaque",
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  isOpen,
  onOpenChange,
}: DrawerBackdropProps) {
  const ctx = useDrawer()

  const open = isOpen ?? ctx.isOpen
  const setOpen = onOpenChange ?? ctx.setOpen

  // ESC + scroll lock + focus
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isKeyboardDismissDisabled) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, isKeyboardDismissDisabled, setOpen])

  return (
    <div
      data-slot="drawer-backdrop"
      data-variant={variant}
      data-entering=""
      role="presentation"
      className={cn(
        "fixed inset-0 z-50 flex data-[entering]:animate-in data-[entering]:fade-in data-[entering]:duration-200",
        backdropPos[ctx.placement],
        backdropVariantClass[variant],
        className
      )}
      onClick={() => isDismissable && setOpen(false)}
    >
      {children}
    </div>
  )
}

/* ---------- Content (placement wrapper) ---------- */

interface DrawerContentProps {
  children?: ReactNode
  className?: string
  placement?: DrawerPlacement
}

const contentSizing: Record<DrawerPlacement, string> = {
  right: "h-full w-full max-w-md",
  left: "h-full w-full max-w-md",
  top: "w-full max-h-[75vh]",
  bottom: "w-full max-h-[75vh]",
}

function DrawerContent({ children, className, placement }: DrawerContentProps) {
  const ctx = useDrawer()
  useEffect(() => {
    if (placement) ctx.setPlacement(placement)
  }, [placement, ctx])
  return (
    <div data-slot="drawer-content" data-placement={placement ?? ctx.placement} className={cn("flex", contentSizing[placement ?? ctx.placement], className)}>
      {children}
    </div>
  )
}

/* ---------- Dialog ---------- */

interface DrawerDialogProps {
  children?: ReactNode | ((close: () => void) => ReactNode)
  className?: string
  role?: string
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
}

const slideClass: Record<DrawerPlacement, string> = {
  right: "data-[entering]:slide-in-from-right-full",
  left: "data-[entering]:slide-in-from-left-full",
  top: "data-[entering]:slide-in-from-top-full",
  bottom: "data-[entering]:slide-in-from-bottom-full",
}

function DrawerDialog({ children, className, role = "dialog", ...aria }: DrawerDialogProps) {
  const ctx = useDrawer()
  return (
    <div
      data-slot="drawer-dialog"
      data-entering=""
      role={role}
      tabIndex={-1}
      className={cn(
        "relative flex h-full w-full flex-col bg-background text-foreground shadow-2xl outline-none",
        "data-[entering]:animate-in data-[entering]:duration-300 data-[entering]:ease-out",
        slideClass[ctx.placement],
        className
      )}
      {...aria}
    >
      {typeof children === "function" ? children(ctx.close) : children}
    </div>
  )
}

/* ---------- Compound parçalar ---------- */

function DrawerHeader({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="drawer-header" className={cn("flex items-center justify-between gap-3 border-b border-border p-4", className)}>{children}</div>
}

function DrawerHeading({ className, children }: { className?: string; children?: ReactNode }) {
  return <h2 data-slot="drawer-heading" className={cn("text-base font-semibold", className)}>{children}</h2>
}

function DrawerBody({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="drawer-body" className={cn("flex-1 overflow-y-auto p-4 text-sm text-muted-foreground", className)}>{children}</div>
}

function DrawerFooter({ className, children }: { className?: string; children?: ReactNode }) {
  const ctx = useDrawer()
  return (
    <div data-slot="drawer-footer" className={cn("flex items-center justify-end gap-2 border-t border-border p-4", className)}>
      {Children.map(children, (child) => {
        // slot="close" butonlarına otomatik kapatma bağla (Heroui davranışı)
        if (isValidElement(child) && (child.props as Record<string, unknown>).slot === "close") {
          return cloneElement(child, { onPress: ctx.close } as Record<string, unknown>)
        }
        return child
      })}
    </div>
  )
}

/** Görsel sürükleme tutamacı (alt placement için çizgi) */
function DrawerHandle({ className }: { className?: string }) {
  return <div data-slot="drawer-handle" aria-hidden="true" className={cn("absolute top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-muted", className)} />
}

function DrawerCloseTrigger({ className }: { className?: string }) {
  const ctx = useDrawer()
  return (
    <button
      type="button"
      aria-label="Kapat"
      onClick={ctx.close}
      className={cn(
        "absolute top-3 right-3 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <X className="size-4" aria-hidden="true" />
    </button>
  )
}

export {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerHeading,
  useDrawer,
  useOverlayState,
}
export type { DrawerBackdropVariant, DrawerContentProps, DrawerOverlayState, DrawerPlacement }
