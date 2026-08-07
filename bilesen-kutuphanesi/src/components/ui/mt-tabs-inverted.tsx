/**
 * MtTabsInverted
 * Ters sekme — alt çizgi altta (saf React, Mantine kaynaklı).
 * @id 1395
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsInverted() {
  return (
    <MtTabs defaultValue="a" className="max-w-sm">
      <MtTabList className="flex-col border-b-0 border-t">
        <MtTab value="a" className="border-b-0 border-t-2 border-transparent data-[active=true]:border-blue-600 data-[active=true]:border-t-2">First</MtTab>
        <MtTab value="b" className="border-b-0 border-t-2 border-transparent data-[active=true]:border-blue-600 data-[active=true]:border-t-2">Second</MtTab>
      </MtTabList>
      <MtTabPanel value="a">First panel</MtTabPanel>
      <MtTabPanel value="b">Second panel</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsInverted }
