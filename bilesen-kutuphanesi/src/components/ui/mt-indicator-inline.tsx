/**
 * MtIndicatorInline
 * Satır içi (saf React, Mantine kaynaklı).
 * @id 1555
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorInline() {
  return (
    <p className="text-sm text-foreground">
      <MtIndicator inline>
        <span className="rounded bg-muted px-2 py-0.5 font-mono">term</span>
      </MtIndicator>{" "}
      satır içinde küçük bir gösterge taşır.
    </p>
  )
}

export { MtIndicatorInline }
