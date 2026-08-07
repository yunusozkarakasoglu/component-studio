/**
 * MtBox
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tüm bileşenlerin temeli — div sarmalayıcı.
 *   <MtBox bg="red.5" my="xl">My component</MtBox>
 * @id 1004
 * @category Genel
 * @subcategory MtBox
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtBoxProps extends HTMLAttributes<HTMLDivElement> {}

function MtBox({ className, ...props }: MtBoxProps) {
  return <div data-slot="mt-box" className={cn("box-border", className)} {...props} />
}

export { MtBox }
export type { MtBoxProps }
