/**
 * ShadcnMarker familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Konuşma işaretçisi — Marker + Icon + Content (variant separator).
 *   <ShadcnMarker>
 *     <ShadcnMarkerIcon>…</ShadcnMarkerIcon>
 *     <ShadcnMarkerContent>Switched to a new branch</ShadcnMarkerContent>
 *   </ShadcnMarker>
 * @id 993
 * @category Genel
 * @subcategory ShadcnMarker
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnMarkerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "separator"
}

function ShadcnMarker({ className, variant = "default", ...props }: ShadcnMarkerProps) {
  return (
    <div
      data-slot="shadcn-marker"
      data-variant={variant}
      className={cn(
        "flex w-full items-center gap-2 text-sm",
        variant === "separator" && "my-2 justify-center rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnMarkerIconProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnMarkerIcon({ className, ...props }: ShadcnMarkerIconProps) {
  return (
    <span
      data-slot="shadcn-marker-icon"
      className={cn("flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground", className)}
      {...props}
    />
  )
}

interface ShadcnMarkerContentProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnMarkerContent({ className, ...props }: ShadcnMarkerContentProps) {
  return <span data-slot="shadcn-marker-content" className={cn("text-muted-foreground", className)} {...props} />
}

export { ShadcnMarker, ShadcnMarkerContent, ShadcnMarkerIcon }
export type { ShadcnMarkerContentProps, ShadcnMarkerIconProps, ShadcnMarkerProps }
