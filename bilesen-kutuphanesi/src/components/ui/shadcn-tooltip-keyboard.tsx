/**
 * ShadcnTooltipKeyboard
 * Klavye kısayolu içeren tooltip (saf React, shadcn kaynaklı).
 * Kbd: kütüphanenin mevcut ShadcnKbd'si.
 * @id 798
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"
import {
  ShadcnTooltip,
  ShadcnTooltipContent,
  ShadcnTooltipTrigger,
} from "@/components/ui/shadcn-tooltip"

function ShadcnTooltipKeyboard() {
  return (
    <ShadcnTooltip>
      <ShadcnTooltipTrigger>Command Palette</ShadcnTooltipTrigger>
      <ShadcnTooltipContent>
        <p>
          Command Palette <ShadcnKbd>⌘K</ShadcnKbd>
        </p>
      </ShadcnTooltipContent>
    </ShadcnTooltip>
  )
}

export { ShadcnTooltipKeyboard }
