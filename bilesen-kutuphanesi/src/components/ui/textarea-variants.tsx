/**
 * TextAreaVariants
 * primary/secondary variant örneği (saf React).
 * @id 303
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { TextArea } from "@/components/ui/textarea"

function TextAreaVariants() {
  return (
    <div className="flex w-[280px] flex-col gap-2">
      <TextArea fullWidth placeholder="Primary textarea" variant="primary" />
      <TextArea fullWidth placeholder="Secondary textarea" variant="secondary" />
    </div>
  )
}

export { TextAreaVariants }
