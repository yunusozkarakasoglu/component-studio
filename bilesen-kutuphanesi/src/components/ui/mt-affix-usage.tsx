/**
 * MtAffixUsage
 * Temel kullanım — yukarı kaydır butonu (saf React, Mantine kaynaklı).
 * @id 1381
 * @category Overlay
 * @subcategory MtAffix
 * @source mantine
 */
import { ArrowUp } from "@/components/ui/icons"
import { MtAffix } from "@/components/ui/mt-affix"
import { MtButton } from "@/components/ui/mt-button"

function MtAffixUsage() {
  return (
    <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
      Scroll down to see the button
      <MtAffix>
        <MtButton className="size-10 rounded-full !p-0" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp className="size-4" />
        </MtButton>
      </MtAffix>
    </div>
  )
}

export { MtAffixUsage }
