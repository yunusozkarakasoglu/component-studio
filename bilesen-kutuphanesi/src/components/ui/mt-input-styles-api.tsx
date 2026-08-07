/**
 * MtInputStylesApi
 * Styles API — boyut (saf React, Mantine kaynaklı).
 * @id 1203
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputStylesApi() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtInputWrapper label="Extra small">
        <MtInput size="xs" placeholder="xs" />
      </MtInputWrapper>
      <MtInputWrapper label="Medium">
        <MtInput size="md" placeholder="md" />
      </MtInputWrapper>
      <MtInputWrapper label="Extra large">
        <MtInput size="xl" placeholder="xl" />
      </MtInputWrapper>
    </div>
  )
}

export { MtInputStylesApi }
