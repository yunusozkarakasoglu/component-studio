/**
 * MtIndicator
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Gösterge rozeti — label, position, offset, size, processing, color.
 *   <MtIndicator label="5" position="top-end"><Avatar/></MtIndicator>
 * @id 1508
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtIndicatorProps {
  label?: ReactNode
  position?: "top-start" | "top-end" | "bottom-start" | "bottom-end"
  offset?: number
  size?: number
  processing?: boolean
  color?: string
  inline?: boolean
  disabled?: boolean
  children?: ReactNode
  className?: string
}

const positions: Record<string, string> = {
  "top-start": "left-0 -translate-x-1/3 -translate-y-1/3",
  "top-end": "right-0 translate-x-1/3 -translate-y-1/3",
  "bottom-start": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  "bottom-end": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
}

const colors: Record<string, string> = {
  blue: "bg-blue-600", red: "bg-red-600", green: "bg-green-600", teal: "bg-teal-600",
  grape: "bg-purple-600", pink: "bg-pink-600", gray: "bg-gray-500", orange: "bg-orange-600",
  yellow: "bg-yellow-500", cyan: "bg-cyan-600",
}

function MtIndicator({ label, position = "top-end", offset = 0, size = 16, processing, color = "blue", inline, disabled, children, className }: MtIndicatorProps) {
  if (disabled) return <>{children}</>

  return (
    <span className={cn("relative inline-flex", inline && "inline-flex align-middle", className)}>
      {children}
      <span
        className={cn(
          "absolute z-10 flex items-center justify-center rounded-full text-white ring-2 ring-background",
          positions[position] ?? positions["top-end"],
          label ? "px-1.5 text-[10px] font-semibold" : "",
          colors[color] ?? colors.blue
        )}
        style={{
          width: label ? "auto" : size,
          height: size,
          minWidth: size,
          margin: label ? `${offset}px` : undefined,
          transform: label ? `translate(50%, -50%)` : undefined,
        }}
      >
        {label}
        {processing && <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-40" />}
      </span>
    </span>
  )
}

export { MtIndicator }
export type { MtIndicatorProps }
