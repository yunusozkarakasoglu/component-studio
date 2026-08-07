/**
 * MtAspectRatioFlex
 * Flex içinde oran (saf React, Mantine kaynaklı).
 * @id 1038
 * @category Genel
 * @subcategory MtAspectRatio
 * @source mantine
 */
import { MtAspectRatio } from "@/components/ui/mt-aspect-ratio"

function MtAspectRatioFlex() {
  return (
    <div className="flex gap-3">
      <MtAspectRatio ratio={1} className="w-24 rounded-lg">
        <div className="flex h-full w-full items-center justify-center bg-blue-200 text-sm">1:1</div>
      </MtAspectRatio>
      <MtAspectRatio ratio={4 / 3} className="w-32 rounded-lg">
        <div className="flex h-full w-full items-center justify-center bg-indigo-200 text-sm">4:3</div>
      </MtAspectRatio>
      <MtAspectRatio ratio={16 / 9} className="w-40 rounded-lg">
        <div className="flex h-full w-full items-center justify-center bg-purple-200 text-sm">16:9</div>
      </MtAspectRatio>
    </div>
  )
}

export { MtAspectRatioFlex }
