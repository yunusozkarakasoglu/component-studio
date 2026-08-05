/**
 * DateRangePickerDisabled
 * Devre dışı örnek (saf React).
 * @id 273
 * @category Tarih
 * @subcategory DateRange
 */
import { DateRangePicker } from "@/components/ui/date-range-picker"

function DateRangePickerDisabled() {
  return <DateRangePicker className="w-[280px]" isDisabled defaultValue={["2025-02-01", "2025-02-14"]} label="Tarih aralığı" />
}

export { DateRangePickerDisabled }
