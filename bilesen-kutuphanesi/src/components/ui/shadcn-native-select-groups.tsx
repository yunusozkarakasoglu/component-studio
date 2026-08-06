/**
 * ShadcnNativeSelectGroups
 * OptGroup — kategorili seçim (saf React, shadcn kaynaklı).
 * @id 688
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import { ShadcnNativeSelect, ShadcnNativeSelectOptGroup, ShadcnNativeSelectOption } from "@/components/ui/shadcn-native-select"

function ShadcnNativeSelectGroups() {
  return (
    <ShadcnNativeSelect className="w-[240px]">
      <ShadcnNativeSelectOption value="">Select department</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOptGroup label="Engineering">
        <ShadcnNativeSelectOption value="frontend">Frontend</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="backend">Backend</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="devops">DevOps</ShadcnNativeSelectOption>
      </ShadcnNativeSelectOptGroup>
      <ShadcnNativeSelectOptGroup label="Sales">
        <ShadcnNativeSelectOption value="sales-rep">Sales Rep</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="account-manager">Account Manager</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="sales-director">Sales Director</ShadcnNativeSelectOption>
      </ShadcnNativeSelectOptGroup>
      <ShadcnNativeSelectOptGroup label="Operations">
        <ShadcnNativeSelectOption value="support">Customer Support</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="product-manager">Product Manager</ShadcnNativeSelectOption>
        <ShadcnNativeSelectOption value="ops-manager">Operations Manager</ShadcnNativeSelectOption>
      </ShadcnNativeSelectOptGroup>
    </ShadcnNativeSelect>
  )
}

export { ShadcnNativeSelectGroups }
