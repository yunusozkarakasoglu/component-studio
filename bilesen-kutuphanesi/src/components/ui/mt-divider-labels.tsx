/**
 * MtDividerLabels
 * Etiketli ayraçlar (saf React, Mantine kaynaklı).
 * @id 1030
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import { Search } from "@/components/ui/icons"
import { MtDivider } from "@/components/ui/mt-divider"

function MtDividerLabels() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <MtDivider label="Label on the left" labelPosition="left" />
      <MtDivider label="Label in the center" labelPosition="center" />
      <MtDivider label="Label on the right" labelPosition="right" />
      <MtDivider
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Search className="size-3" />
            <span className="ml-1">Search results</span>
          </>
        }
      />
    </div>
  )
}

export { MtDividerLabels }
