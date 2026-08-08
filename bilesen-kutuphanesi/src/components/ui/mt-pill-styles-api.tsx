/**
 * MtPillStylesApi
 * Stil API (saf React, Mantine kaynaklı).
 * @id 1496
 * @category Veri Gösterimi
 * @subcategory MtPill
 * @source mantine
 */
import { MtPill } from "@/components/ui/mt-pill"

function MtPillStylesApi() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <MtPill size="xs">Extra small</MtPill>
      <MtPill size="sm">Small</MtPill>
      <MtPill size="md">Medium</MtPill>
      <MtPill size="lg">Large</MtPill>
      <MtPill size="xl">Extra large</MtPill>
      <MtPill disabled>Disabled</MtPill>
    </div>
  )
}

export { MtPillStylesApi }
