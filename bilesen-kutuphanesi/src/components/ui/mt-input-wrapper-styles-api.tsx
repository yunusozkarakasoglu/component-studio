/**
 * MtInputWrapperStylesApi
 * Wrapper stilleri (saf React, Mantine kaynaklı).
 * @id 1204
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputWrapperStylesApi() {
  return (
    <MtInputWrapper
      label="Custom styled label"
      description="Custom description"
      className="max-w-sm [&_label]:text-blue-600 [&_p]:italic"
    >
      <MtInput placeholder="Styled wrapper" />
    </MtInputWrapper>
  )
}

export { MtInputWrapperStylesApi }
