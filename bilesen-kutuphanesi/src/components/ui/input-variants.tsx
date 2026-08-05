/**
 * InputVariants
 * primary/secondary variant örneği (saf React).
 * @id 328
 * @category Form Elemanları
 * @subcategory Input
 */
import { Input } from "@/components/ui/input"

function InputVariants() {
  return (
    <div className="flex w-[240px] flex-col gap-2">
      <Input fullWidth placeholder="Primary input" variant="primary" />
      <Input fullWidth placeholder="Secondary input" variant="secondary" />
    </div>
  )
}

export { InputVariants }
