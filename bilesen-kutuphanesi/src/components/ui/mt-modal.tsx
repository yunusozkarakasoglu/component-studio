/**
 * MtModal
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Modal — opened/onClose, title, size, centered, overlay.
 *   <MtModal opened={opened} onClose={() => setOpened(false)} title="Modal title">…</MtModal>
 * @id 1341
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  opened?: boolean
  onClose?: () => void
  title?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl" | string | number
  centered?: boolean
  withCloseButton?: boolean
  closeOnClickOutside?: boolean
}

const sizes: Record<string, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
}

function MtModal({
  opened = false,
  onClose = () => {},
  title,
  size = "md",
  centered,
  withCloseButton = true,
  closeOnClickOutside = true,
  children,
  className,
  ...props
}: MtModalProps) {
  if (!opened) return null

  return (
    <div data-slot="mt-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={closeOnClickOutside ? onClose : undefined} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full rounded-lg border border-border bg-background p-5 text-foreground shadow-xl",
          typeof size === "string" && size in sizes ? sizes[size] : typeof size === "number" ? { maxWidth: size } as unknown as string : "",
          centered && "my-auto",
          className
        )}
        {...props}
      >
        {(title || withCloseButton) && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            {withCloseButton && (
              <button type="button" aria-label="Close" onClick={onClose} className="inline-flex size-7 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <X className="size-4" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export { MtModal }
export type { MtModalProps }
