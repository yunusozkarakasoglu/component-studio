/**
 * MtTabsUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1393
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsUsage() {
  return (
    <MtTabs defaultValue="first" className="max-w-sm">
      <MtTabList>
        <MtTab value="first">First</MtTab>
        <MtTab value="second">Second</MtTab>
        <MtTab value="third">Third</MtTab>
      </MtTabList>
      <MtTabPanel value="first">First panel content</MtTabPanel>
      <MtTabPanel value="second">Second panel content</MtTabPanel>
      <MtTabPanel value="third">Third panel content</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsUsage }
