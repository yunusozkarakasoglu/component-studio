/**
 * MtCollapseUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1583
 * @category Alert & Dialog
 * @subcategory MtCollapse
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtCollapse } from "@/components/ui/mt-collapse"

function MtCollapseUsage() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <MtButton variant="default" onClick={() => setOpened((o) => !o)}>
        {opened ? "Kapat" : "Aç"}
      </MtButton>
      <MtCollapse in={opened}>
        <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground">
          Açılır içerik — yükseklik yumuşak bir animasyonla büyür. Bu alan formlar,
          detaylar veya isteğe bağlı bilgiler için kullanılabilir.
        </div>
      </MtCollapse>
    </div>
  )
}

export { MtCollapseUsage }
