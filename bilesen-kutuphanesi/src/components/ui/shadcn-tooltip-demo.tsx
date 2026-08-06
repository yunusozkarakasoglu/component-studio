/**
 * ShadcnTooltipDemo
 * Temel örnek — kütüphaneye ekle (saf React, shadcn kaynaklı).
 * @id 796
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import {
  ShadcnTooltip,
  ShadcnTooltipContent,
  ShadcnTooltipTrigger,
} from "@/components/ui/shadcn-tooltip"

function ShadcnTooltipDemo() {
  return (
    <ShadcnTooltip>
      <ShadcnTooltipTrigger>Hover</ShadcnTooltipTrigger>
      <ShadcnTooltipContent>
        <p>Add to library</p>
      </ShadcnTooltipContent>
    </ShadcnTooltip>
  )
}

export { ShadcnTooltipDemo }
