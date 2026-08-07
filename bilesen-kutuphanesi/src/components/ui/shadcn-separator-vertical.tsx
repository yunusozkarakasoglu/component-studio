/**
 * ShadcnSeparatorVertical
 * Dikey ayraç (saf React, shadcn kaynaklı).
 * @id 960
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

function ShadcnSeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Blog</span>
      <ShadcnSeparator orientation="vertical" className="h-4" />
      <span>Docs</span>
      <ShadcnSeparator orientation="vertical" className="h-4" />
      <span>Source</span>
    </div>
  )
}

export { ShadcnSeparatorVertical }
