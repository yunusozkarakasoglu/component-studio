/**
 * MtTimelineUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1421
 * @category Navigasyon
 * @subcategory MtTimeline
 * @source mantine
 */
import { MtTimeline, MtTimelineItem } from "@/components/ui/mt-timeline"

function MtTimelineUsage() {
  return (
    <MtTimeline active={1} className="max-w-sm">
      <MtTimelineItem title="New branch" lineActive>
        You&apos;ve created new branch <span className="font-mono">fix-notifications</span> from master
      </MtTimelineItem>
      <MtTimelineItem title="Commits">
        You&apos;ve pushed 23 commits to <span className="font-mono">fix-notifications</span> branch
      </MtTimelineItem>
      <MtTimelineItem title="Pull request">
        You&apos;ve submitted a pull request to the <span className="font-mono">master</span> branch
      </MtTimelineItem>
    </MtTimeline>
  )
}

export { MtTimelineUsage }
