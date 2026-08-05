/**
 * Yeni Bileşen — sihirbaz çalışma alanı
 * Bu dosya geçicidir; kayıtta src/components/ui/'ya taşınır.
 */
import { cn } from "@/lib/utils"

function YeniBilesen({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-lg border border-border bg-background p-6", className)} {...props}>
      Bileşeninizi buraya yazın — Önizle ile canlı görün.
    </div>
  )
}

export { YeniBilesen }
