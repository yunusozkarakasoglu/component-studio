/**
 * ShadcnNativeSelectDemo
 * Temel örnek — durum seçimi (saf React, shadcn kaynaklı).
 * @id 687
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import { ShadcnNativeSelect, ShadcnNativeSelectOption } from "@/components/ui/shadcn-native-select"

function ShadcnNativeSelectDemo() {
  return (
    <ShadcnNativeSelect className="w-[220px]">
      <ShadcnNativeSelectOption value="">Select status</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="todo">Todo</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="in-progress">In Progress</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="done">Done</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="cancelled">Cancelled</ShadcnNativeSelectOption>
    </ShadcnNativeSelect>
  )
}

export { ShadcnNativeSelectDemo }
