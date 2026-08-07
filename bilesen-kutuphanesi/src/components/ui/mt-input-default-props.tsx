/**
 * MtInputDefaultProps
 * Varsayılan prop'lar (saf React, Mantine kaynaklı).
 * @id 1207
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputDefaultProps() {
  return (
    <MtInputWrapper label="With default placeholder" description="Uses shared placeholder" className="max-w-sm">
      <MtInput placeholder="Default placeholder" />
    </MtInputWrapper>
  )
}

export { MtInputDefaultProps }
