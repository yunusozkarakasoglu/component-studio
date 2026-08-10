/**
 * MuiDivider
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Ayraç — içeriği gruplara bölen ince çizgi.
 *   <MuiDivider orientation="vertical">…</MuiDivider>
 * orientation: horizontal (varsayılan) | vertical
 * variant: fullwidth | inset | middle · textAlign (vertical'da içerik)
 * flexItem: flex container içinde esnek yükseklik
 * @id 1849
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiDividerProps {
  orientation?: "horizontal" | "vertical"
  variant?: "fullWidth" | "inset" | "middle"
  textAlign?: "left" | "center" | "right"
  flexItem?: boolean
  className?: string
  children?: ReactNode
}

function MuiDivider({
  orientation = "horizontal",
  variant = "fullWidth",
  textAlign = "center",
  flexItem = false,
  className,
  children,
}: MuiDividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("self-stretch w-px shrink-0 bg-gray-300", flexItem && "h-full", className)}
      />
    )
  }

  if (!children) {
    return (
      <hr
        className={cn(
          "my-0 border-0 border-t border-gray-300",
          variant === "inset" && "ml-[72px]",
          variant === "middle" && "mx-8",
          className
        )}
      />
    )
  }

  return (
    <div
      role="separator"
      className={cn(
        "flex items-center text-gray-500",
        textAlign === "center" && "before:content-[''] before:flex-1 before:border-t before:border-gray-300 after:content-[''] after:flex-1 after:border-t after:border-gray-300",
        textAlign === "left" && "before:hidden after:content-[''] after:flex-1 after:border-t after:border-gray-300",
        textAlign === "right" && "before:content-[''] before:flex-1 before:border-t before:border-gray-300 after:hidden",
        variant === "inset" && "pl-[72px]",
        variant === "middle" && "px-8",
        "[&>*]:px-3",
        className
      )}
    >
      <span className="px-3 text-sm">{children}</span>
    </div>
  )
}

export { MuiDivider }
export type { MuiDividerProps }
