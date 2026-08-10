/**
 * MuiTabsBasic
 * @id 2002
 * @category Navigasyon
 * @subcategory MuiTabs
 * @source mui
 */
import { MuiTabs } from "@/components/ui/mui-tabs"

function MuiTabsBasic() {
  return (
    <MuiTabs
      tabs={[
        { label: "Genel Bakış", content: <p>Genel bakış içeriği burada gösterilir.</p> },
        { label: "Analiz", content: <p>Analiz ve grafikler burada gösterilir.</p> },
        { label: "Ayarlar", content: <p>Ayarlar ve tercihler burada gösterilir.</p> },
      ]}
    />
  )
}

export { MuiTabsBasic }
