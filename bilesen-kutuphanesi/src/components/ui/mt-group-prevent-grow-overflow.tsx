/**
 * MtGroupPreventGrowOverflow
 * grow + taşma kontrolü (saf React, Mantine kaynaklı).
 * @id 1008
 * @category Genel
 * @subcategory MtGroup
 * @source mantine
 */
import { MtBox } from "@/components/ui/mt-box"
import { MtGroup } from "@/components/ui/mt-group"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function MtGroupPreventGrowOverflow() {
  return (
    <MtBox className="w-full overflow-hidden">
      <MtBox className="mx-auto max-w-[500px] rounded-lg bg-blue-100 p-4">
        <p className="mb-1.5 text-sm">
          preventGrowOverflow: true — her çocuk genişliği ebeveynin %33'ü ile sınırlı
        </p>
        <MtGroup grow wrap="nowrap">
          <ShadcnButton variant="outline" className="flex-1 min-w-0">First button</ShadcnButton>
          <ShadcnButton variant="outline" className="flex-1 min-w-0">Second button with large content</ShadcnButton>
          <ShadcnButton variant="outline" className="flex-1 min-w-0">Third button</ShadcnButton>
        </MtGroup>
      </MtBox>
    </MtBox>
  )
}

export { MtGroupPreventGrowOverflow }
