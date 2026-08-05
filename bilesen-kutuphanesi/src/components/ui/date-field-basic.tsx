/**
 * DateFieldBasic
 * Kullanım örneği — temel tarih girişi (saf React).
 * @id 263
 * @category Tarih
 * @subcategory DateField
 */
import { DateField } from "@/components/ui/date-field"

function DateFieldBasic() {
  return <DateField className="w-[256px]" name="date" label="Date" />
}

export { DateFieldBasic }
