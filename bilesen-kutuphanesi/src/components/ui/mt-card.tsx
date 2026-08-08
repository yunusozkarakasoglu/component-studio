/**
 * MtCard + MtCardSection
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kart — padding, radius, withBorder, CardSection (gölgesiz kenarlık bölümü).
 *   <MtCard padding="lg" withBorder>
 *     <MtCardSection>…</MtCardSection>
 *   </MtCard>
 * @id 1427
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtCardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | number
  radius?: "sm" | "md" | "lg" | "xl" | "full"
  withBorder?: boolean
}

const pads: Record<string, string> = { xs: "p-2", sm: "p-3", md: "p-4", lg: "p-6", xl: "p-8" }
const radii: Record<string, string> = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl", xl: "rounded-2xl", full: "rounded-full" }

function MtCard({ className, padding = "md", radius = "md", withBorder, children, ...props }: MtCardProps) {
  return (
    <div
      data-slot="mt-card"
      className={cn(
        "bg-card text-card-foreground",
        typeof padding === "string" ? pads[padding] : undefined,
        radii[radius],
        withBorder && "border border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface MtCardSectionProps extends HTMLAttributes<HTMLDivElement> {
  withBorder?: boolean
}

function MtCardSection({ className, withBorder, children, ...props }: MtCardSectionProps) {
  return (
    <div
      data-slot="mt-card-section"
      className={cn(
        "-mx-2 -mt-2 mb-2 first:rounded-t-md last:rounded-b-md",
        withBorder && "border-b border-border pb-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { MtCard, MtCardSection }
export type { MtCardProps, MtCardSectionProps }
