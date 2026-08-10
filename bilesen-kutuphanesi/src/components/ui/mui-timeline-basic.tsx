/**
 * MuiTimelineBasic
 * @id 2004
 * @category Navigasyon
 * @subcategory MuiTimeline
 * @source mui
 */
import { MuiTimeline } from "@/components/ui/mui-timeline"

function MuiTimelineBasic() {
  return (
    <MuiTimeline
      items={[
        { title: "Sipariş Alındı", time: "09:00", description: "Siparişiniz sisteme kaydedildi." },
        { title: "Hazırlanıyor", time: "10:30", description: "Ürününüz paketleniyor." },
        { title: "Kargoya Verildi", time: "14:00", description: "Kargo firmasına teslim edildi." },
        { title: "Teslim Edildi", time: "16:45", description: "Paketiniz adresinize ulaştı." },
      ]}
    />
  )
}

export { MuiTimelineBasic }
