/**
 * MtCollapseWithIcon
 * İkonlu aç/kapa (saf React, Mantine kaynaklı).
 * @id 1586
 * @category Alert & Dialog
 * @subcategory MtCollapse
 * @source mantine
 */
import { useState } from "react"
import { ChevronDown } from "@/components/ui/icons"
import { MtCollapse } from "@/components/ui/mt-collapse"

function MtCollapseWithIcon() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="w-full max-w-lg">
      <button
        type="button"
        onClick={() => setOpened((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <span>Sıkça sorulan sorular</span>
        <ChevronDown className={`size-4 transition-transform ${opened ? "rotate-180" : ""}`} />
      </button>
      <MtCollapse in={opened}>
        <div className="px-4 py-3 text-sm text-muted-foreground">
          Bileşenler saf React ve Tailwind ile yazılmıştır; üçüncü parti UI bağımlılığı yoktur.
          Kaynak dosyalar tek tek kopyalanıp projenize entegre edilebilir.
        </div>
      </MtCollapse>
    </div>
  )
}

export { MtCollapseWithIcon }
