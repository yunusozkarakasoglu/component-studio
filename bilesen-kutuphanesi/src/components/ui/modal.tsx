/**
 * Modal
 * Saf React bileşen (bağımlılıksız).
 * Odaklı etkileşimler için diyalog katmanı — Trigger/Backdrop/Container/Dialog compound.
 *   <Modal>
 *     <Button>Open Modal</Button>
 *     <ModalBackdrop>
 *       <ModalContainer>
 *         <ModalDialog>
 *           <ModalCloseTrigger />
 *           <ModalHeader><ModalIcon>…</ModalIcon><ModalHeading>Başlık</ModalHeading></ModalHeader>
 *           <ModalBody>…</ModalBody>
 *           <ModalFooter><Button slot="close">Kapat</Button></ModalFooter>
 *         </ModalDialog>
 *       </ModalContainer>
 *     </ModalBackdrop>
 *   </Modal>
 * Özellikler: size (xs..full) · placement (auto/center/top/bottom) · scroll
 * (inside/outside) · backdrop variant (opaque/blur/transparent) · isDismissable ·
 * isKeyboardDismissDisabled · kontrollü (isOpen/onOpenChange) · portal ·
 * Dialog children render fn ({close}) · slot="close" otomatik kapatma ·
 * ESC + scroll lock + giriş animasyonu (tw-animate-css).
 * @id 432
 * @category Overlay
 * @subcategory Modal
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
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

/* ---------- Types ---------- */

type BackdropVariant = "opaque" | "blur" | "transparent"
type ModalPlacement = "auto" | "center" | "top" | "bottom"
type ModalSize = "xs" | "sm" | "md" | "lg" | "cover" | "full"
type ModalScroll = "inside" | "outside"

interface OverlayState {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setOpen: (v: boolean) => void
}

/** kütüphane useOverlayState karşılığı — saf React hook */
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

interface ModalContextValue extends OverlayState {}

const ModalContext = createContext<ModalContextValue | null>(null)

function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error("useModal, <Modal> içinde kullanılmalı")
  return ctx
}

/* ---------- Ana bileşen ---------- */

interface ModalProps {
  /** İlk çocuk = trigger; ikinci çocuk = Backdrop */
  children?: ReactNode
}

function Modal({ children }: ModalProps) {
  const state = useOverlayState()

  const kids = Children.toArray(children)
  const trigger = kids[0] as ReactElement | undefined
  const backdrop = kids[1] as ReactElement | undefined

  const triggerWithHandler = trigger
    ? cloneElement(trigger, { onClick: () => state.open() } as Record<string, unknown>)
    : null

  return (
    <ModalContext.Provider value={state}>
      {state.isOpen && backdrop ? cloneElement(backdrop, {} as Record<string, unknown>) : triggerWithHandler}
    </ModalContext.Provider>
  )
}

/* ---------- Trigger (özel) ---------- */

interface ModalTriggerProps {
  children?: ReactNode
  className?: string
}

function ModalTrigger({ children, className }: ModalTriggerProps) {
  const ctx = useModal()
  return (
    <div data-slot="modal-trigger" className={className} onClick={ctx.open}>
      {children}
    </div>
  )
}

/* ---------- Backdrop ---------- */

interface ModalBackdropProps {
  children?: ReactNode
  className?: string
  variant?: BackdropVariant
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  onOpenChange?: (v: boolean) => void
  UNSTABLE_portalContainer?: HTMLElement | null
}

const backdropVariantClass: Record<BackdropVariant, string> = {
  opaque: "bg-black/50",
  blur: "bg-black/30 backdrop-blur-sm",
  transparent: "bg-transparent",
}

function ModalBackdrop({
  children,
  className,
  variant = "opaque",
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  isOpen,
  onOpenChange,
  UNSTABLE_portalContainer,
}: ModalBackdropProps) {
  const parent = useContext(ModalContext)
  const localCtx: ModalContextValue = {
    isOpen: isOpen ?? false,
    open: () => onOpenChange?.(true),
    close: () => onOpenChange?.(false),
    toggle: () => onOpenChange?.(!(isOpen ?? false)),
    setOpen: (v) => onOpenChange?.(v),
  }
  const ctx = parent ?? localCtx

  const open = isOpen ?? ctx.isOpen
  const setOpen = onOpenChange ?? ctx.setOpen

  // ESC + scroll lock
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

  if (!open) return null

  const backdropEl = (
    <ModalContext.Provider value={ctx}>
      <div
        data-slot="modal-backdrop"
        data-variant={variant}
        data-entering=""
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 data-[entering]:animate-in data-[entering]:fade-in data-[entering]:duration-200",
          backdropVariantClass[variant],
          className
        )}
        onClick={() => isDismissable && setOpen(false)}
      >
        {children}
      </div>
    </ModalContext.Provider>
  )

  return createPortal(backdropEl, UNSTABLE_portalContainer ?? document.body)
}

/* ---------- Container ---------- */

interface ModalContainerProps {
  children?: ReactNode
  className?: string
  placement?: ModalPlacement
  size?: ModalSize
  scroll?: ModalScroll
}

const placementClass: Record<ModalPlacement, string> = {
  auto: "items-center",
  center: "items-center",
  top: "items-start pt-12",
  bottom: "items-end pb-12",
}

const sizeClass: Record<ModalSize, string> = {
  xs: "max-w-[280px]",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  cover: "w-full max-w-none sm:m-10",
  full: "w-full max-w-none h-full",
}

function ModalContainer({ children, className, placement = "auto", size = "md", scroll = "inside" }: ModalContainerProps) {
  return (
    <div
      data-slot="modal-container"
      data-placement={placement}
      data-size={size}
      data-scroll={scroll}
      data-entering=""
      className={cn(
        "flex w-full justify-center data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-300",
        placementClass[placement],
        sizeClass[size],
        className
      )}
    >
      {children}
    </div>
  )
}

/* ---------- Dialog ---------- */

interface ModalDialogProps {
  children?: ReactNode | ((renderProps: { close: () => void }) => ReactNode)
  className?: string
  role?: string
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
}

function ModalDialog({ children, className, role = "dialog", ...aria }: ModalDialogProps) {
  const ctx = useModal()
  return (
    <div
      data-slot="modal-dialog"
      role={role}
      tabIndex={-1}
      className={cn("relative w-full rounded-xl border border-border bg-background text-foreground shadow-2xl outline-none", className)}
      {...aria}
    >
      {typeof children === "function" ? children({ close: ctx.close }) : children}
    </div>
  )
}

/* ---------- Compound parçalar ---------- */

function ModalHeader({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="modal-header" className={cn("flex items-center gap-3 border-b border-border p-4", className)}>{children}</div>
}

function ModalIcon({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <span data-slot="modal-icon" className={cn("inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground", className)}>
      {children}
    </span>
  )
}

function ModalHeading({ className, children }: { className?: string; children?: ReactNode }) {
  return <h2 data-slot="modal-heading" className={cn("text-base font-semibold", className)}>{children}</h2>
}

function ModalBody({ className, children }: { className?: string; children?: ReactNode }) {
  return <div data-slot="modal-body" className={cn("overflow-y-auto p-4 text-sm text-muted-foreground", className)}>{children}</div>
}

function ModalFooter({ className, children }: { className?: string; children?: ReactNode }) {
  const ctx = useModal()
  return (
    <div data-slot="modal-footer" className={cn("flex items-center justify-end gap-2 border-t border-border p-4", className)}>
      {Children.map(children, (child) => {
        if (isValidElement(child) && (child.props as Record<string, unknown>).slot === "close") {
          return cloneElement(child, { onPress: ctx.close } as Record<string, unknown>)
        }
        return child
      })}
    </div>
  )
}

function ModalCloseTrigger({ className }: { className?: string }) {
  const ctx = useModal()
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
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalIcon,
  ModalTrigger,
  useModal,
  useOverlayState,
}
export type { BackdropVariant, ModalContainerProps, ModalDialogProps, ModalPlacement, ModalProps, ModalScroll, ModalSize, OverlayState }
