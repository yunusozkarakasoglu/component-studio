/**
 * MuiTabsWithIcons
 * @id 2050
 * @category Navigasyon
 * @subcategory MuiTabs
 * @source mui
 */
import { MuiTabs } from "@/components/ui/mui-tabs"
import { Phone, Heart, CircleUser } from "@/components/ui/icons"

function MuiTabsWithIcons() {
  return (
    <MuiTabs
      centered
      tabs={[
        { label: "Kişiler", icon: <CircleUser className="size-4" />, content: <p>Kişiler listesi.</p> },
        { label: "Favoriler", icon: <Heart className="size-4" />, content: <p>Favoriler.</p> },
        { label: "Aramalar", icon: <Phone className="size-4" />, content: <p>Çağrı geçmişi.</p> },
      ]}
    />
  )
}

export { MuiTabsWithIcons }
