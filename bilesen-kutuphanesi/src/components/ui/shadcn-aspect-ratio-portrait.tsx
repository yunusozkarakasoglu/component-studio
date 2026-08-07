/**
 * ShadcnAspectRatioPortrait
 * Dikey oran (saf React, shadcn kaynaklı).
 * @id 982
 * @category Genel
 * @subcategory ShadcnAspectRatio
 * @source shadcn
 */
import { ShadcnAspectRatio } from "@/components/ui/shadcn-aspect-ratio"

function ShadcnAspectRatioPortrait() {
  return (
    <ShadcnAspectRatio ratio={3 / 4} className="w-40 rounded-lg bg-muted">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        3:4
      </div>
    </ShadcnAspectRatio>
  )
}

export { ShadcnAspectRatioPortrait }
