/**
 * MtTabsCustomize
 * Özelleştirme — yuvarlak (saf React, Mantine kaynaklı).
 * @id 1400
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsCustomize() {
  return (
    <MtTabs defaultValue="a" className="max-w-sm">
      <MtTabList className="gap-1 border-b-0">
        <MtTab value="a" className="rounded-full border-b-0 px-4 data-[active=true]:bg-blue-600 data-[active=true]:text-white">Pill one</MtTab>
        <MtTab value="b" className="rounded-full border-b-0 px-4 data-[active=true]:bg-blue-600 data-[active=true]:text-white">Pill two</MtTab>
      </MtTabList>
      <MtTabPanel value="a">Pill one panel</MtTabPanel>
      <MtTabPanel value="b">Pill two panel</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsCustomize }
