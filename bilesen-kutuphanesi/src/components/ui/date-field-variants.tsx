/**
 * DateFieldVariants
 * Çeşitler örneği — varsayılan + surface (saf React).
 * @id 264
 * @category Date
 * @subcategory DateField
 */
import { DateField } from "@/components/ui/date-field"

function DateFieldVariants() {
  return (
    <div className="flex flex-col gap-4">
      <DateField className="w-[256px]" defaultValue="2025-02-14" label="Primary variant" />
      <div className="w-[280px] rounded-3xl bg-muted/20 p-4">
        <DateField className="w-full" defaultValue="2025-02-14" label="Secondary variant" />
      </div>
    </div>
  )
}

export { DateFieldVariants }
