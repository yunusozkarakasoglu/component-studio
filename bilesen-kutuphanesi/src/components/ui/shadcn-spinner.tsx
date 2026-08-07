/**
 * ShadcnSpinner
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Yükleniyor göstergesi — dönen ikon.
 *   <ShadcnSpinner className="size-6" />
 * @id 950
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import type { SVGProps } from "react"
import { cn } from "@/lib/utils"
import { Loader } from "@/components/ui/icons"

interface ShadcnSpinnerProps extends SVGProps<SVGSVGElement> {}

function ShadcnSpinner({ className, ...props }: ShadcnSpinnerProps) {
  return (
    <Loader
      role="status"
      aria-label="Loading"
      data-slot="shadcn-spinner"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { ShadcnSpinner }
export type { ShadcnSpinnerProps }
