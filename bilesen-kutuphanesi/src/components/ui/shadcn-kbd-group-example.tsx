/**
 * ShadcnKbdGroupExample
 * Metin içinde tuş grubu (saf React, shadcn kaynaklı).
 * @id 645
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { ShadcnKbd, ShadcnKbdGroup } from "@/components/ui/shadcn-kbd"

function ShadcnKbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Use{" "}
        <ShadcnKbdGroup>
          <ShadcnKbd>Ctrl + B</ShadcnKbd>
          <ShadcnKbd>Ctrl + K</ShadcnKbd>
        </ShadcnKbdGroup>{" "}
        to open the command palette
      </p>
    </div>
  )
}

export { ShadcnKbdGroupExample }
