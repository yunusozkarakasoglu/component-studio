/**
 * MtContainerBreakout
 * Kapsam dışına taşan kap (saf React, Mantine kaynaklı).
 * @id 1019
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import { MtBox } from "@/components/ui/mt-box"
import { MtContainer } from "@/components/ui/mt-container"

function MtContainerBreakout() {
  return (
    <MtContainer size={500}>
      <MtBox className="h-12 rounded bg-indigo-200">Main content</MtBox>
      <MtBox className="mt-2 rounded bg-indigo-200">
        <div className="px-4 py-2 text-sm">Breakout</div>
        <MtBox className="mx-4 mb-4 rounded bg-indigo-500 text-white">
          <div className="px-4 py-3 text-sm">Container inside breakout</div>
        </MtBox>
      </MtBox>
    </MtContainer>
  )
}

export { MtContainerBreakout }
