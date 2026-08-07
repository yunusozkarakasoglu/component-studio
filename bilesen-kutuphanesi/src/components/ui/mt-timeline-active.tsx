/**
 * MtTimelineActive
 * Aktif adımlar (saf React, Mantine kaynaklı).
 * @id 1422
 * @category Navigasyon
 * @subcategory MtTimeline
 * @source mantine
 */
import { MtTimeline, MtTimelineItem } from "@/components/ui/mt-timeline"

function MtTimelineActive() {
  return (
    <MtTimeline active={2} className="max-w-sm">
      <MtTimelineItem title="Order placed" lineActive>
        Your order #1234 has been placed.
      </MtTimelineItem>
      <MtTimelineItem title="Payment confirmed" lineActive>
        Payment of $99.00 was confirmed.
      </MtTimelineItem>
      <MtTimelineItem title="Order shipped" lineActive>
        Your order is on the way.
      </MtTimelineItem>
      <MtTimelineItem title="Delivered">
        Expected delivery in 2-3 days.
      </MtTimelineItem>
    </MtTimeline>
  )
}

export { MtTimelineActive }
