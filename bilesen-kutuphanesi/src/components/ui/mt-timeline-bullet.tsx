/**
 * MtTimelineBullet
 * Özel işaretçiler (saf React, Mantine kaynaklı).
 * @id 1423
 * @category Navigasyon
 * @subcategory MtTimeline
 * @source mantine
 */
import { MtTimeline, MtTimelineItem } from "@/components/ui/mt-timeline"

function MtTimelineBullet() {
  return (
    <MtTimeline active={2} bulletSize={24} className="max-w-sm">
      <MtTimelineItem title="Planning" bullet="1" lineActive>
        Define requirements.
      </MtTimelineItem>
      <MtTimelineItem title="Development" bullet="2" lineActive>
        Build the feature.
      </MtTimelineItem>
      <MtTimelineItem title="Testing" bullet="3" lineActive>
        Run the tests.
      </MtTimelineItem>
      <MtTimelineItem title="Release" bullet="4">
        Deploy to production.
      </MtTimelineItem>
    </MtTimeline>
  )
}

export { MtTimelineBullet }
