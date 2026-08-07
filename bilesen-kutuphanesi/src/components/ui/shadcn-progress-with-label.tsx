/**
 * ShadcnProgressWithLabel
 * Etiketli ilerleme çubuğu (saf React, shadcn kaynaklı).
 * @id 940
 * @category Yükleme & İlerleme
 * @subcategory ShadcnProgress
 * @source shadcn
 */
import { ShadcnProgress } from "@/components/ui/shadcn-progress"

function ShadcnProgressWithLabel() {
  return (
    <div className="flex w-[60%] flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Uploading file…</span>
        <span className="font-medium tabular-nums">72%</span>
      </div>
      <ShadcnProgress value={72} />
    </div>
  )
}

export { ShadcnProgressWithLabel }
