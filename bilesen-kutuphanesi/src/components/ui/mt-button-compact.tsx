/**
 * MtButtonCompact
 * Compact boyutlar (saf React, Mantine kaynaklı).
 * @id 1061
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonCompact() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <MtButton size="sm">Regular sm</MtButton>
        <MtButton size="compact-sm">Compact sm</MtButton>
      </div>
      <div className="flex items-center gap-2">
        <MtButton size="md">Regular md</MtButton>
        <MtButton size="compact-md">Compact md</MtButton>
      </div>
      <div className="flex items-center gap-2">
        <MtButton size="lg">Regular lg</MtButton>
        <MtButton size="compact-lg">Compact lg</MtButton>
      </div>
    </div>
  )
}

export { MtButtonCompact }
