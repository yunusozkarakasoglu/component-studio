/**
 * MtTabsDisabled
 * Devre dışı sekme (saf React, Mantine kaynaklı).
 * @id 1394
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsDisabled() {
  return (
    <MtTabs defaultValue="a" className="max-w-sm">
      <MtTabList>
        <MtTab value="a">Enabled</MtTab>
        <MtTab value="b" disabled>Disabled</MtTab>
      </MtTabList>
      <MtTabPanel value="a">This tab is enabled.</MtTabPanel>
      <MtTabPanel value="b">Cannot be reached.</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsDisabled }
