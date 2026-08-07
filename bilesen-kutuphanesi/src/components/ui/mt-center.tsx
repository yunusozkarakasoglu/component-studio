/**
 * MtCenter
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İçeriği yatay/dikey ortalar.
 *   <MtCenter maw={400} h={100}>…</MtCenter>
 * inline: satır içi kullanım.
 * @id 1011
 * @category Genel
 * @subcategory MtCenter
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtCenterProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean
}

function MtCenter({ className, inline, ...props }: MtCenterProps) {
  return (
    <div
      data-slot="mt-center"
      className={cn(
        "flex items-center justify-center",
        inline && "inline-flex",
        className
      )}
      {...props}
    />
  )
}

export { MtCenter }
export type { MtCenterProps }
