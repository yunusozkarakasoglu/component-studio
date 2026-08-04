/**
 * DatePickerDisabled
 * Devre dışı örnek (saf React).
 * @id 269
 * @category Date
 * @subcategory DatePicker
 */
import { DatePicker } from "@/components/ui/date-picker"

function DatePickerDisabled() {
  return <DatePicker className="w-[256px]" isDisabled defaultValue="2025-02-14" label="Date" />
}

export { DatePickerDisabled }
