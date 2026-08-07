/**
 * MtInputSharedDefaultProps
 * Paylaşılan varsayılanlar (saf React, Mantine kaynaklı).
 * @id 1210
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputSharedDefaultProps() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtInputWrapper label="Input one">
        <MtInput placeholder="First" />
      </MtInputWrapper>
      <MtInputWrapper label="Input two">
        <MtInput placeholder="Second" />
      </MtInputWrapper>
    </div>
  )
}

export { MtInputSharedDefaultProps }
