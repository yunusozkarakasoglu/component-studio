/**
 * ShadcnDirection
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Yönlendirme — useShadcnDirection hook (ltr/rtl tespiti + değiştirme).
 *   const { dir, toggle } = useShadcnDirection()
 * Not: kaynak useDirection hook sağlar; aynı API kendi çekirdeğiyle yazıldı.
 * @id 999
 * @category Genel
 * @subcategory ShadcnDirection
 * @source shadcn
 */
import { useEffect, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type Direction = "ltr" | "rtl"

interface ShadcnDirectionProps extends HTMLAttributes<HTMLDivElement> {
  dir?: Direction
}

function ShadcnDirection({ className, dir = "ltr", children, ...props }: ShadcnDirectionProps) {
  return (
    <div data-slot="shadcn-direction" dir={dir} className={cn("contents", className)} {...props}>
      {children}
    </div>
  )
}

function useShadcnDirection(defaultDir: Direction = "ltr") {
  const [dir, setDir] = useState<Direction>(defaultDir)

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  const toggle = () => setDir((d) => (d === "ltr" ? "rtl" : "ltr"))

  return { dir, setDir, toggle }
}

export { ShadcnDirection, useShadcnDirection }
export type { ShadcnDirectionProps }
