/**
 * MtBurger
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Hamburger menü butonu — opened, lineWidth, color.
 *   <MtBurger opened={open} onClick={() => setOpen(!open)} />
 * @id 1079
 * @category Butonlar & Aksiyonlar
 * @subcategory MtBurger
 * @source mantine
 */
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtBurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  opened?: boolean
  lineWidth?: number
  color?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const sizes: Record<string, string> = {
  xs: "size-6",
  sm: "size-7",
  md: "size-8",
  lg: "size-10",
  xl: "size-12",
}

function MtBurger({ className, opened, lineWidth = 1.5, color, size = "md", ...props }: MtBurgerProps) {
  return (
    <button
      type="button"
      data-slot="mt-burger"
      aria-expanded={opened}
      aria-label="Toggle navigation"
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md p-1.5 transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative block w-4" style={{ height: lineWidth * 3 + 2 }}>
        <span
          className="absolute left-0 block w-full rounded-full transition-all duration-300"
          style={{ top: opened ? "50%" : 0, height: lineWidth, backgroundColor: color ?? "currentColor", transform: opened ? "rotate(45deg) translateY(-50%)" : "none" }}
        />
        <span
          className="absolute left-0 block w-full rounded-full transition-all duration-300"
          style={{ top: "50%", height: lineWidth, backgroundColor: color ?? "currentColor", opacity: opened ? 0 : 1, transform: "translateY(-50%)" }}
        />
        <span
          className="absolute left-0 block w-full rounded-full transition-all duration-300"
          style={{ top: opened ? "50%" : "100%", height: lineWidth, backgroundColor: color ?? "currentColor", transform: opened ? "rotate(-45deg) translateY(-50%)" : "translateY(-100%)" }}
        />
      </span>
    </button>
  )
}

export { MtBurger }
export type { MtBurgerProps }
