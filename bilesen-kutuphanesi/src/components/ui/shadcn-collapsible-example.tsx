/**
 * ShadcnCollapsibleExample
 * Kontrollü durum (saf React, shadcn kaynaklı).
 * @id 933
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { useState } from "react"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ShadcnCollapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <ShadcnCollapsibleTrigger className="w-full justify-between rounded-md border px-4 py-2 text-sm">
        <span>Controlled: {isOpen ? "Open" : "Closed"}</span>
        <span className="text-muted-foreground">{isOpen ? "−" : "+"}</span>
      </ShadcnCollapsibleTrigger>
      <ShadcnCollapsibleContent className="mt-2 rounded-md border px-4 py-2 text-sm text-muted-foreground">
        This content is controlled by the open state.
      </ShadcnCollapsibleContent>
    </ShadcnCollapsible>
  )
}

export { ShadcnCollapsibleExample }
