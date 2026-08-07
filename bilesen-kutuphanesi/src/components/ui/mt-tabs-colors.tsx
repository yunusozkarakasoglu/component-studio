/**
 * MtTabsColors
 * Renkli sekme (saf React, Mantine kaynaklı).
 * @id 1399
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsColors() {
  return (
    <MtTabs defaultValue="a" className="max-w-sm">
      <MtTabList>
        <MtTab value="a" className="data-[active=true]:border-emerald-600 data-[active=true]:text-emerald-600">Green</MtTab>
        <MtTab value="b" className="data-[active=true]:border-purple-600 data-[active=true]:text-purple-600">Purple</MtTab>
      </MtTabList>
      <MtTabPanel value="a">Green tab panel</MtTabPanel>
      <MtTabPanel value="b">Purple tab panel</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsColors }
