/**
 * MtDrawer
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kenar paneli — opened/onClose, position (left/right/top/bottom), size.
 *   <MtDrawer opened={opened} onClose={…} title="Drawer" position="right">…</MtDrawer>
 * @id 1342
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtDrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  opened?: boolean
  onClose?: () => void
  title?: ReactNode
  position?: "left" | "right" | "top" | "bottom"
  size?: string | number
  withCloseButton?: boolean
}

function MtDrawer({
  opened = false,
  onClose = () => {},
  title,
  position = "right",
  size = "md",
  withCloseButton = true,
  children,
  className,
  ...props
}: MtDrawerProps) {
  if (!opened) return null

  const sizeClass = typeof size === "string"
    ? size === "xs" ? "w-72" : size === "sm" ? "w-96" : size === "md" ? "w-[28rem]" : size === "lg" ? "w-[36rem]" : size === "xl" ? "w-[44rem]" : size === "full" ? "w-full" : ""
    : ""
  const positionClass =
    position === "right" ? `inset-y-0 right-0 border-l ${sizeClass}` :
    position === "left" ? `inset-y-0 left-0 border-r ${sizeClass}` :
    position === "top" ? "inset-x-0 top-0 max-h-[80vh] border-b" :
    "inset-x-0 bottom-0 max-h-[80vh] border-t"

  return (
    <div data-slot="mt-drawer" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn("fixed z-10 flex flex-col bg-background p-5 text-foreground shadow-xl", positionClass, typeof size === "number" && (position === "left" || position === "right") ? "" : "", className)}
        style={typeof size === "number" ? { width: position === "left" || position === "right" ? size : undefined, maxHeight: position === "top" || position === "bottom" ? size : undefined } : undefined}
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

export { MtDrawer }
export type { MtDrawerProps }
