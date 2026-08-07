/**
 * ShadcnAspectRatioDemo
 * Temel örnek — 16/9 (saf React, shadcn kaynaklı).
 * Not: kaynaktaki uzak görsel offline ilkesi gereği gradient ile değiştirildi.
 * @id 980
 * @category Genel
 * @subcategory ShadcnAspectRatio
 * @source shadcn
 */
import { ShadcnAspectRatio } from "@/components/ui/shadcn-aspect-ratio"

function ShadcnAspectRatioDemo() {
  return (
    <ShadcnAspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
        <span className="text-4xl text-white/90">🖼️</span>
      </div>
    </ShadcnAspectRatio>
  )
}

export { ShadcnAspectRatioDemo }
