/**
 * DateFieldDisabled
 * Devre dışı örnek (saf React).
 * @id 265
 * @category Tarih
 * @subcategory DateField
 */
import { DateField } from "@/components/ui/date-field"

function DateFieldDisabled() {
  return <DateField className="w-[256px]" isDisabled defaultValue="2025-02-14" label="Date" description="This field is disabled" />
}

export { DateFieldDisabled }
