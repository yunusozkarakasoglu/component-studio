/**
 * ShadcnNativeSelectRtl
 * RTL örneği — Arapça seçim (saf React, shadcn kaynaklı).
 * @id 691
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import { ShadcnNativeSelect, ShadcnNativeSelectOption } from "@/components/ui/shadcn-native-select"

function ShadcnNativeSelectRtl() {
  return (
    <ShadcnNativeSelect className="w-[220px]" dir="rtl">
      <ShadcnNativeSelectOption value="">حدد الحالة</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="todo">قيد التنفيذ</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="in-progress">قيد التقدم</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="done">مكتمل</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="cancelled">ملغي</ShadcnNativeSelectOption>
    </ShadcnNativeSelect>
  )
}

export { ShadcnNativeSelectRtl }
