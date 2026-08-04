/**
 * Spinner
 * HeroUI loading durumu için — dönen yükleme göstergesi (saf React).
 * Button isPending durumunda içerik olarak kullanılır.
 * @id 093
 * @category Butonlar & Aksiyonlar
 */
import { cn } from "@/lib/utils"
import { Loader2 } from "@/components/ui/icons"

interface SpinnerProps {
  /** Boyut (varsayılan: sm) */
  size?: "sm" | "md" | "lg"
  className?: string
}

const spinnerSize: Record<string, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
}

function Spinner({ size = "sm", className }: SpinnerProps) {
  return (
    <Loader2
      data-slot="spinner"
      className={cn("shrink-0 animate-spin", spinnerSize[size], className)}
      aria-hidden="true"
    />
  )
}

export { Spinner }
export type { SpinnerProps }
