/**
 * MtTabsPosition
 * Dikey sekmeler (saf React, Mantine kaynaklı).
 * @id 1396
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsPosition() {
  return (
    <MtTabs defaultValue="a" orientation="vertical">
      <MtTabList>
        <MtTab value="a">Left</MtTab>
        <MtTab value="b">Center</MtTab>
        <MtTab value="c">Right</MtTab>
      </MtTabList>
      <MtTabPanel value="a">Left panel content</MtTabPanel>
      <MtTabPanel value="b">Center panel content</MtTabPanel>
      <MtTabPanel value="c">Right panel content</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsPosition }
