/**
 * MtContainer
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İçerik genişliği sınırlayıcı — size, fluid.
 *   <MtContainer size="md">…</MtContainer>
 * @id 1014
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: string | number
  fluid?: boolean
}

const CONTAINER_SIZES: Record<string, string> = {
  xs: "max-w-[540px]",
  sm: "max-w-[720px]",
  md: "max-w-[960px]",
  lg: "max-w-[1140px]",
  xl: "max-w-[1320px]",
}

function MtContainer({ className, size, fluid, style, ...props }: MtContainerProps) {
  const sizeClass = typeof size === "string" && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : undefined
  return (
    <div
      data-slot="mt-container"
      className={cn("mx-auto w-full px-4", sizeClass, fluid && "max-w-full", className)}
      style={typeof size === "number" ? { maxWidth: size } : style}
      {...props}
    />
  )
}

export { MtContainer }
export type { MtContainerProps }
