/**
 * ColorFieldBasic
 * HeroUI Usage örneği — hex input + önizleme (saf React).
 * @id 238
 * @category Colors
 * @subcategory ColorField
 */
import { ColorField } from "@/components/ui/color-field"

function ColorFieldBasic() {
  return <ColorField className="w-[280px]" name="color" defaultValue="#0485F7" label="Color" />
}

export { ColorFieldBasic }
