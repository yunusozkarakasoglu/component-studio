/**
 * MuiTabsVertical
 * @id 2049
 * @category Navigasyon
 * @subcategory MuiTabs
 * @source mui
 */
import { MuiTabs } from "@/components/ui/mui-tabs"

function MuiTabsVertical() {
  return (
    <MuiTabs
      orientation="vertical"
      tabs={[
        { label: "Profil", content: <p>Profil bilgileri.</p> },
        { label: "Hesap", content: <p>Hesap ayarları.</p> },
        { label: "Gizlilik", content: <p>Gizlilik tercihleri.</p> },
      ]}
    />
  )
}

export { MuiTabsVertical }
