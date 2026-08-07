/**
 * MtInputLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1195
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputLoading() {
  return (
    <MtInputWrapper label="Loading input" className="max-w-sm">
      <div className="relative">
        <MtInput placeholder="Loading" disabled />
        <span className="absolute inset-y-0 right-2.5 flex items-center">
          <span className="size-3.5 animate-spin rounded-full border-2 border-border border-t-blue-500" />
        </span>
      </div>
    </MtInputWrapper>
  )
}

export { MtInputLoading }
