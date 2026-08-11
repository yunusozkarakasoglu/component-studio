/**
 * MuiTabsScrollable
 * @id 2066
 * @category Navigasyon
 * @subcategory MuiTabs
 * @source mui
 */
import { MuiTabs } from "@/components/ui/mui-tabs"

const MANY_TABS = Array.from({ length: 14 }, (_, i) => ({
  label: `Sekme ${i + 1}`,
  content: <p>Sekme {i + 1} içeriği.</p>,
}))

function MuiTabsScrollable() {
  return (
    <div className="w-full">
      <MuiTabs tabs={MANY_TABS} />
      <p className="mt-2 text-xs text-gray-500">14 sekme — yatay kaydırma desteği.</p>
    </div>
  )
}

export { MuiTabsScrollable }
