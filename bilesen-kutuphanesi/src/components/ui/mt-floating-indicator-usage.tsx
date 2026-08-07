/**
 * MtFloatingIndicatorUsage
 * Kayar gösterge — sekmeler (saf React, Mantine kaynaklı).
 * @id 1425
 * @category Navigasyon
 * @subcategory MtFloatingIndicator
 * @source mantine
 */
import { useState } from "react"
import { MtFloatingIndicator } from "@/components/ui/mt-floating-indicator"

function MtFloatingIndicatorUsage() {
  const [active, setActive] = useState(0)
  const tabs = ["Releases", "Security", "Commits"]

  return (
    <MtFloatingIndicator>
      <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            data-active={active === i ? "true" : undefined}
            onClick={() => setActive(i)}
            className="relative z-10 cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
          >
            {tab}
          </button>
        ))}
      </div>
    </MtFloatingIndicator>
  )
}

export { MtFloatingIndicatorUsage }
