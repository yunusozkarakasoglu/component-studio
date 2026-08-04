/**
 * AlertDialog
 * HeroUI alert-dialog'dan uyarlanmış — saf React (bağımlılıksız).
 * Kritik onay diyalogları: trigger + backdrop + compound parçalar.
 *   <AlertDialog>
 *     <Button>Delete Project</Button>
 *     <AlertDialogBackdrop>
 *       <AlertDialogContainer>
 *         <AlertDialogDialog>
 *           {(close) => (<>
 *             <AlertDialogHeader><AlertDialogIcon status="danger" /><AlertDialogHeading>…</AlertDialogHeading></AlertDialogHeader>
 *             <AlertDialogBody>…</AlertDialogBody>
 *             <AlertDialogFooter><Button onPress={close}>Cancel</Button></AlertDialogFooter>
 *           </>)}
 *         </AlertDialogDialog>
 *       </AlertDialogContainer>
 *     </AlertDialogBackdrop>
 *   </AlertDialog>
 * Özellikler: placement (auto/center/top/bottom) · size (xs..cover) · backdrop variant
 * (opaque/blur/transparent) · isDismissable · isKeyboardDismissDisabled · kontrollü
 * (isOpen/onOpenChange) · portal (UNSTABLE_portalContainer) · ESC + focus trap + scroll lock.
 * @id 120
 * @category Alert & Dialog
 */
import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { AlertTriangle, CheckCircle, Info, OctagonX, X } from "@/components/ui/icons"

/* ---------- Types ---------- */

type AlertDialogStatus = "default" | "accent" | "success" | "warning" | "danger"
type BackdropVariant = "opaque" | "blur" | "transparent"
type Placement = "auto" | "center" | "top" | "bottom"
type DialogSize = "xs" | "sm" | "md" | "lg" | "cover"

interface OverlayState {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setOpen: (v: boolean) => void
}

/** HeroUI useOverlayState karşılığı — saf React hook */
function useOverlayState({ defaultOpen = false, onOpenChange }: { defaultOpen?: boolean; onOpenChange?: (v: boolean) => void } = {}): OverlayState {
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

interface AlertDialogContextValue extends OverlayState {
  backdropVariant: BackdropVariant
  isDismissable: boolean
  isKeyboardDismissDisabled: boolean
  portalContainer?: HTMLElement | null
}

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null)

/** Compound parçalarından kapatma/state erişimi */
function useAlertDialog(): AlertDialogContextValue {
  const ctx = useContext(AlertDialogContext)
  if (!ctx) throw new Error("useAlertDialog, <AlertDialog> içinde kullanılmalı")
  return ctx
}

/* ---------- Ana bileşen ---------- */

interface AlertDialogProps {
  /** İlk çocuk = trigger; ikinci çocuk = Backdrop */
  children?: ReactNode
}

function AlertDialog({ children }: AlertDialogProps) {
  const state = useOverlayState()
  const [backdropVariant, setBackdropVariant] = useState<BackdropVariant>("opaque")
  const [isDismissable, setIsDismissable] = useState(false)
  const [isKeyboardDismissDisabled, setIsKeyboardDismissDisabled] = useState(false)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  const kids = Children.toArray(children)
  const trigger = kids[0] as ReactElement | undefined
  const backdrop = kids[1] as ReactElement | undefined

  // Trigger'a tıklama bağla (Button onPress DOM onClick'i ezer → açılır)
  const triggerWithHandler = trigger
    ? cloneElement(trigger, { onClick: () => state.open() } as Record<string, unknown>)
    : null

  const contextValue: AlertDialogContextValue = {
    ...state,
    backdropVariant,
    isDismissable,
    isKeyboardDismissDisabled,
    portalContainer,
  }

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {state.isOpen && backdrop
        ? cloneElement(backdrop, {
            setBackdropVariant,
            setIsDismissable,
            setIsKeyboardDismissDisabled,
            setPortalContainer,
          } as Record<string, unknown>)
        : triggerWithHandler}
    </AlertDialogContext.Provider>
  )
}

/* ---------- Backdrop ---------- */

interface AlertDialogBackdropProps {
  children?: ReactNode
  className?: string
  variant?: BackdropVariant
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  onOpenChange?: (v: boolean) => void
  UNSTABLE_portalContainer?: HTMLElement | null
  setBackdropVariant?: (v: BackdropVariant) => void
  setIsDismissable?: (v: boolean) => void
  setIsKeyboardDismissDisabled?: (v: boolean) => void
  setPortalContainer?: (v: HTMLElement | null) => void
}

const backdropVariantClass: Record<BackdropVariant, string> = {
  opaque: "bg-black/50",
  blur: "bg-black/30 backdrop-blur-sm",
  transparent: "bg-transparent",
}

function AlertDialogBackdrop({
  children,
  className,
  variant = "opaque",
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  isOpen,
  onOpenChange,
  UNSTABLE_portalContainer,
  setBackdropVariant,
  setIsDismissable,
  setIsKeyboardDismissDisabled,
  setPortalContainer,
}: AlertDialogBackdropProps) {
  const ctx = useAlertDialog()
  const dialogRef = useRef<HTMLDivElement>(null)

  // Backdrop prop'larını AlertDialog context'ine ilet (controllu/bağımsız)
  const open = isOpen ?? ctx.isOpen
  const setOpen = onOpenChange ?? ctx.setOpen
  useEffect(() => {
    setBackdropVariant?.(variant)
    setIsDismissable?.(isDismissable)
    setIsKeyboardDismissDisabled?.(isKeyboardDismissDisabled)
    setPortalContainer?.(UNSTABLE_portalContainer ?? null)
  }, [variant, isDismissable, isKeyboardDismissDisabled, UNSTABLE_portalContainer, setBackdropVariant, setIsDismissable, setIsKeyboardDismissDisabled, setPortalContainer])

  // ESC + scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isKeyboardDismissDisabled) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, isKeyboardDismissDisabled, setOpen])

  const backdropEl = (
    <div
      data-slot="alert-dialog-backdrop"
      data-variant={variant}
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4", backdropVariantClass[variant], className)}
      onClick={() => isDismissable && setOpen(false)}
    >
      {children}
    </div>
  )

  return createPortal(backdropEl, UNSTABLE_portalContainer ?? document.body)
}

/* ---------- Container ---------- */

interface AlertDialogContainerProps {
  children?: ReactNode
  className?: string
  placement?: Placement
  size?: DialogSize
}

const placementClass: Record<Placement, string> = {
  auto: "items-center sm:items-center",
  center: "items-center",
  top: "items-start pt-12",
  bottom: "items-end pb-12",
}

const sizeClass: Record<DialogSize, string> = {
  xs: "max-w-[280px]",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  cover: "w-full max-w-none sm:m-10",
}

function AlertDialogContainer({ children, className, placement = "auto", size = "md" }: AlertDialogContainerProps) {
  return (
    <div data-slot="alert-dialog-container" data-placement={placement} data-size={size}
      className={cn("flex w-full justify-center", placementClass[placement], sizeClass[size], className)}>
      {children}
    </div>
  )
}

/* ---------- Dialog ---------- */

interface AlertDialogDialogProps {
  children?: ReactNode | ((close: () => void) => ReactNode)
  className?: string
  role?: string
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
}

function AlertDialogDialog({ children, className, role = "alertdialog", ...aria }: AlertDialogDialogProps) {
  const ctx = useAlertDialog()
  return (
    <div
      data-slot="alert-dialog-dialog"
      role={role}
      tabIndex={-1}
      className={cn("relative w-full rounded-xl border border-border bg-background p-4 text-foreground shadow-2xl outline-none", className)}
      {...aria}
    >
      {typeof children === "function" ? children(ctx.close) : children}
    </div>
  )
}

/* ---------- Compound parçalar ---------- */

function AlertDialogHeader({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="alert-dialog-header" className={cn("flex items-center gap-3", className)}>{children}</div>
}

function AlertDialogHeading({ className, children }: { className?: string; children?: ReactNode }) {
  return <h2 data-slot="alert-dialog-heading" className={cn("text-base font-semibold", className)}>{children}</h2>
}

function AlertDialogBody({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="alert-dialog-body" className={cn("mt-3 text-sm text-muted-foreground", className)}>{children}</div>
}

function AlertDialogFooter({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="alert-dialog-footer" className={cn("mt-4 flex justify-end gap-2", className)}>{children}</div>
}

const iconStatusClass: Record<AlertDialogStatus, string> = {
  default: "bg-muted text-muted-foreground",
  accent: "bg-blue-100 text-blue-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
}

const iconStatusSvg: Record<AlertDialogStatus, (p: { className?: string }) => ReactNode> = {
  default: (p) => <Info {...p} />,
  accent: (p) => <Info {...p} />,
  success: (p) => <CheckCircle {...p} />,
  warning: (p) => <AlertTriangle {...p} />,
  danger: (p) => <OctagonX {...p} />,
}

function AlertDialogIcon({ className, status = "danger", children }: { className?: string; status?: AlertDialogStatus; children?: ReactNode }) {
  return (
    <span data-slot="alert-dialog-icon" className={cn("inline-flex size-10 shrink-0 items-center justify-center rounded-full", iconStatusClass[status], className)}>
      {children ?? iconStatusSvg[status]({ className: "size-5" })}
    </span>
  )
}

function AlertDialogCloseTrigger({ className }: { className?: string }) {
  const ctx = useAlertDialog()
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
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseTrigger,
  AlertDialogContainer,
  AlertDialogDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogIcon,
  useAlertDialog,
  useOverlayState,
}
export type { AlertDialogProps, AlertDialogStatus, BackdropVariant, DialogSize, OverlayState, Placement }
