/**
 * MtTimelineCompact
 * Kompakt zaman çizelgesi (saf React, Mantine kaynaklı).
 * @id 1424
 * @category Navigasyon
 * @subcategory MtTimeline
 * @source mantine
 */
import { MtTimeline, MtTimelineItem } from "@/components/ui/mt-timeline"

function MtTimelineCompact() {
  return (
    <MtTimeline active={1} bulletSize={16} className="max-w-sm">
      <MtTimelineItem title="Draft" lineActive>
        Created draft.
      </MtTimelineItem>
      <MtTimelineItem title="Review" lineActive>
        Under review.
      </MtTimelineItem>
      <MtTimelineItem title="Published">
        Awaiting approval.
      </MtTimelineItem>
    </MtTimeline>
  )
}

export { MtTimelineCompact }
