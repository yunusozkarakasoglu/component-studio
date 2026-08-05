/**
 * Toast
 * Saf React bileşen (bağımlılıksız).
 * Geçici bildirimler — otomatik kapanma + konumlandırma + kuyruk yönetimi.
 *   <ToastProvider />
 *   <Button onPress={() => toast("Mesaj", { description: "Açıklama" })}>Göster</Button>
 * API: toast(title, opts) · toast.success/info/warning/danger · toast.promise ·
 * toast.close(key)/clear() · ToastProvider (placement/queue/maxVisibleToasts) ·
 * ToastQueue (harici kuyruk: add/close/clear/subscribe) · Toast/Content/
 * Indicator/Title/Description/ActionButton/CloseButton compound.
 * @id 461
 * @category Overlay
 * @subcategory Toast
 */
import { useEffect, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { CheckCircle, Info, OctagonX, AlertTriangle, X } from "@/components/ui/icons"

/* ---------- Types ---------- */

type ToastVariant = "default" | "accent" | "success" | "warning" | "danger"
type ToastPlacement = "top start" | "top" | "top end" | "bottom start" | "bottom" | "bottom end"

interface ToastOptions {
  title?: ReactNode
  description?: ReactNode
  variant?: ToastVariant
  indicator?: ReactNode | null
  actionProps?: { children?: ReactNode; onPress?: () => void; className?: string }
  isLoading?: boolean
  timeout?: number
  onClose?: () => void
}

interface QueuedToast {
  key: string
  content: ToastOptions
  variant: ToastVariant
  timeout: number
  isLoading: boolean
  onClose?: () => void
}

/* ---------- ToastQueue ---------- */

class ToastQueue {
  toasts: QueuedToast[] = []
  private listeners = new Set<() => void>()
  private maxVisible: number

  constructor({ maxVisibleToasts = 3 }: { maxVisibleToasts?: number } = {}) {
    this.maxVisible = maxVisibleToasts
  }

  add(content: ToastOptions, options: ToastOptions = {}): string {
    const key = Math.random().toString(36).slice(2)
    const item: QueuedToast = {
      key,
      content,
      variant: options.variant ?? content.variant ?? "default",
      timeout: options.timeout ?? 4000,
      isLoading: options.isLoading ?? false,
      onClose: options.onClose,
    }
    this.toasts = [...this.toasts, item].slice(-Math.max(this.maxVisible, 1))
    this.emit()
    return key
  }

  close(key: string) {
    const item = this.toasts.find((t) => t.key === key)
    this.toasts = this.toasts.filter((t) => t.key !== key)
    item?.onClose?.()
    this.emit()
  }

  clear() {
    this.toasts = []
    this.emit()
  }

  subscribe(fn: () => void): () => void {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  private emit() {
    this.listeners.forEach((fn) => fn())
  }
}

/* ---------- Global toast fonksiyonu ---------- */

const defaultQueue = new ToastQueue()

function toast(title: ReactNode, options: ToastOptions = {}): string {
  return defaultQueue.add({ title, ...options }, options)
}

toast.success = (title: ReactNode, options: ToastOptions = {}) => toast(title, { ...options, variant: "success" })
toast.info = (title: ReactNode, options: ToastOptions = {}) => toast(title, { ...options, variant: "accent" })
toast.warning = (title: ReactNode, options: ToastOptions = {}) => toast(title, { ...options, variant: "warning" })
toast.danger = (title: ReactNode, options: ToastOptions = {}) => toast(title, { ...options, variant: "danger" })
toast.close = (key: string) => defaultQueue.close(key)
toast.clear = () => defaultQueue.clear()

toast.promise = <T,>(
  promise: Promise<T>,
  messages: { loading: ReactNode; success: ReactNode | ((data: T) => ReactNode); error: ReactNode | ((err: Error) => ReactNode) }
) => {
  const id = toast(messages.loading, { isLoading: true, timeout: 0 })
  promise
    .then((data) => {
      toast.close(id)
      toast.success(typeof messages.success === "function" ? messages.success(data) : messages.success)
    })
    .catch((err: Error) => {
      toast.close(id)
      toast.danger(typeof messages.error === "function" ? messages.error(err) : messages.error)
    })
}

/* ---------- ToastProvider ---------- */

interface ToastProviderProps {
  placement?: ToastPlacement
  queue?: ToastQueue
  maxVisibleToasts?: number
  children?: ReactNode
}

const regionClass: Record<ToastPlacement, string> = {
  "top start": "top-4 left-4 items-start",
  top: "top-4 left-1/2 -translate-x-1/2 items-center",
  "top end": "top-4 right-4 items-end",
  "bottom start": "bottom-4 left-4 items-start",
  bottom: "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom end": "bottom-4 right-4 items-end",
}

const variantClass: Record<ToastVariant, string> = {
  default: "border-border bg-background text-foreground",
  accent: "border-blue-500/40 bg-blue-600 text-white",
  success: "border-emerald-500/40 bg-emerald-600 text-white",
  warning: "border-amber-500/40 bg-amber-500 text-white",
  danger: "border-red-500/40 bg-red-600 text-white",
}

function ToastProvider({ placement = "bottom", queue = defaultQueue, maxVisibleToasts = 3, children }: ToastProviderProps) {
  const [, force] = useState(0)
  useEffect(() => queue.subscribe(() => force((x) => x + 1)), [queue])
  const visible = queue.toasts.slice(-maxVisibleToasts)

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <div data-slot="toast-region" data-placement={placement} className={cn("fixed z-[100] flex w-[min(92vw,420px)] flex-col gap-3", regionClass[placement])}>
            {visible.map((item) => (
              <ToastView key={item.key} item={item} queue={queue} />
            ))}
          </div>,
          document.body
        )}
      {children}
    </>
  )
}

/* ---------- ToastView ---------- */

function ToastView({ item, queue }: { item: QueuedToast; queue: ToastQueue }) {
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Otomatik kapanma
  useEffect(() => {
    if (item.timeout <= 0) return
    const t = setTimeout(() => queue.close(item.key), item.timeout)
    return () => clearTimeout(t)
  }, [item.key, item.timeout, queue])

  const content = item.content

  return (
    <div
      data-slot="toast"
      data-variant={item.variant}
      className={cn(
        "flex w-full items-start gap-2.5 rounded-xl border p-3 text-sm shadow-lg",
        variantClass[item.variant],
        entered ? "animate-in fade-in slide-in-from-bottom-2 duration-200" : "opacity-0"
      )}
    >
      <ToastIndicator variant={item.variant} isLoading={item.isLoading}>
        {content.indicator}
      </ToastIndicator>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {content.title != null && <p className="font-medium">{content.title}</p>}
        {content.description != null && <p className="text-xs opacity-80">{content.description}</p>}
      </div>
      {content.actionProps?.children != null && (
        <button
          type="button"
          onClick={content.actionProps.onPress}
          className={cn("shrink-0 rounded-md px-2 py-1 text-xs font-medium hover:bg-white/15", content.actionProps.className)}
        >
          {content.actionProps.children}
        </button>
      )}
      <button
        type="button"
        aria-label="Kapat"
        onClick={() => queue.close(item.key)}
        className="shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="size-3.5" />
      </button>
    </div>
  )
}

/* ---------- Compound parçalar ---------- */

function ToastIndicator({ variant = "default", isLoading = false, children, className }: { variant?: ToastVariant; isLoading?: boolean; children?: ReactNode; className?: string }) {
  const icon = isLoading ? (
    <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
  ) : children ?? (
    variant === "success" ? <CheckCircle className="size-4" /> :
    variant === "accent" ? <Info className="size-4" /> :
    variant === "danger" ? <OctagonX className="size-4" /> :
    variant === "warning" ? <AlertTriangle className="size-4" /> :
    <Info className="size-4" />
  )
  return (
    <span data-slot="toast-indicator" className={cn("mt-0.5 flex shrink-0 items-center justify-center", className)}>
      {icon}
    </span>
  )
}

function ToastContent({ children, className }: { children?: ReactNode; className?: string }) {
  return <div data-slot="toast-content" className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}>{children}</div>
}

function ToastTitle({ children, className }: { children?: ReactNode; className?: string }) {
  return <p data-slot="toast-title" className={cn("font-medium", className)}>{children}</p>
}

function ToastDescription({ children, className }: { children?: ReactNode; className?: string }) {
  return <p data-slot="toast-description" className={cn("text-xs opacity-80", className)}>{children}</p>
}

function ToastActionButton({ children, className, onPress }: { children?: ReactNode; className?: string; onPress?: () => void }) {
  return (
    <button type="button" onClick={onPress} className={cn("shrink-0 rounded-md px-2 py-1 text-xs font-medium hover:bg-white/15", className)}>
      {children}
    </button>
  )
}

function ToastCloseButton({ className }: { className?: string }) {
  return (
    <button type="button" aria-label="Kapat" className={cn("shrink-0 rounded-md p-1 opacity-70 hover:opacity-100", className)}>
      <X className="size-3.5" />
    </button>
  )
}

export {
  ToastActionButton,
  ToastCloseButton,
  ToastContent,
  ToastDescription,
  ToastIndicator,
  ToastProvider,
  ToastQueue,
  ToastTitle,
  toast,
}
export type { QueuedToast, ToastOptions, ToastPlacement, ToastProviderProps, ToastVariant }
