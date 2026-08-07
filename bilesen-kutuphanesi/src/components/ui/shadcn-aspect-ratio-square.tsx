/**
 * ShadcnAspectRatioSquare
 * Kare oran (saf React, shadcn kaynaklı).
 * @id 981
 * @category Genel
 * @subcategory ShadcnAspectRatio
 * @source shadcn
 */
import { ShadcnAspectRatio } from "@/components/ui/shadcn-aspect-ratio"

function ShadcnAspectRatioSquare() {
  return (
    <ShadcnAspectRatio ratio={1} className="w-40 rounded-lg bg-muted">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        1:1
      </div>
    </ShadcnAspectRatio>
  )
}

export { ShadcnAspectRatioSquare }
