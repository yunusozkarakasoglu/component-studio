/**
 * MtSpace
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Boşluk — yatay (w) veya dikey (h).
 *   <MtSpace h="md" />  ·  <MtSpace w="lg" />
 * @id 1022
 * @category Genel
 * @subcategory MtSpace
 * @source mantine
 */
import type { HTMLAttributes } from "react"

interface MtSpaceProps extends HTMLAttributes<HTMLDivElement> {
  w?: string | number
  h?: string | number
}

function MtSpace({ w, h, ...props }: MtSpaceProps) {
  return (
    <div
      data-slot="mt-space"
      aria-hidden="true"
      style={{ width: w, height: h }}
      {...props}
    />
  )
}

export { MtSpace }
export type { MtSpaceProps }
