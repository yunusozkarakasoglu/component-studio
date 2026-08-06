/**
 * ShadcnKbdRtl
 * RTL örneği — Arapça düzen tuş grubu (saf React, shadcn kaynaklı).
 * @id 649
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { ShadcnKbd, ShadcnKbdGroup } from "@/components/ui/shadcn-kbd"

function ShadcnKbdRtl() {
  return (
    <div className="flex flex-col items-center gap-4" dir="rtl">
      <ShadcnKbdGroup>
        <ShadcnKbd>⌘</ShadcnKbd>
        <ShadcnKbd>⇧</ShadcnKbd>
        <ShadcnKbd>⌥</ShadcnKbd>
        <ShadcnKbd>⌃</ShadcnKbd>
      </ShadcnKbdGroup>
      <ShadcnKbdGroup>
        <ShadcnKbd>Ctrl</ShadcnKbd>
        <span>+</span>
        <ShadcnKbd>B</ShadcnKbd>
      </ShadcnKbdGroup>
    </div>
  )
}

export { ShadcnKbdRtl }
