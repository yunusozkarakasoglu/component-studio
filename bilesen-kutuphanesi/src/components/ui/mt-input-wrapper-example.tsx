/**
 * MtInputWrapperExample
 * Wrapper örneği — etiket + hata (saf React, Mantine kaynaklı).
 * @id 1201
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputWrapperExample() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtInputWrapper label="Wrapper label" description="With description">
        <MtInput placeholder="Input" />
      </MtInputWrapper>
      <MtInputWrapper label="Required field" required error="This field is required">
        <MtInput placeholder="Required" isInvalid />
      </MtInputWrapper>
    </div>
  )
}

export { MtInputWrapperExample }
