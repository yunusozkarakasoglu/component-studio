/**
 * ShadcnKbdDemo
 * Temel örnek — tuş grupları (saf React, shadcn kaynaklı).
 * @id 644
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { ShadcnKbd, ShadcnKbdGroup } from "@/components/ui/shadcn-kbd"

function ShadcnKbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
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

export { ShadcnKbdDemo }
