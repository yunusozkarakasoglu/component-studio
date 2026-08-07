/**
 * MtHoverCardUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1379
 * @category Overlay
 * @subcategory MtHoverCard
 * @source mantine
 */
import { MtHoverCard, MtHoverCardDropdown, MtHoverCardTarget } from "@/components/ui/mt-hover-card"

function MtHoverCardUsage() {
  return (
    <MtHoverCard>
      <MtHoverCardTarget>
        <a href="#" className="text-sm text-blue-600 underline underline-offset-4">@nextjs</a>
      </MtHoverCardTarget>
      <MtHoverCardDropdown>
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold">Next.js</p>
          <p className="text-sm text-muted-foreground">The React Framework – created and maintained by Vercel.</p>
          <p className="mt-1 text-xs text-muted-foreground">Joined December 2021</p>
        </div>
      </MtHoverCardDropdown>
    </MtHoverCard>
  )
}

export { MtHoverCardUsage }
