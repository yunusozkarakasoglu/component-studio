/**
 * MtTabsControlled
 * Kontrollü sekmeler (saf React, Mantine kaynaklı).
 * @id 1398
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { useState } from "react"
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsControlled() {
  const [value, setValue] = useState("a")

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtTabs value={value} onChange={setValue}>
        <MtTabList>
          <MtTab value="a">Option A</MtTab>
          <MtTab value="b">Option B</MtTab>
        </MtTabList>
        <MtTabPanel value="a">Panel A</MtTabPanel>
        <MtTabPanel value="b">Panel B</MtTabPanel>
      </MtTabs>
      <p className="text-xs text-muted-foreground">Active: {value}</p>
    </div>
  )
}

export { MtTabsControlled }
