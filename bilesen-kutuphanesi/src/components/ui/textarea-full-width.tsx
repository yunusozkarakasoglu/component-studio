/**
 * TextAreaFullWidth
 * Tam genişlik örneği (saf React).
 * @id 305
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { TextArea } from "@/components/ui/textarea"

function TextAreaFullWidth() {
  return (
    <div className="w-[400px] space-y-3">
      <TextArea fullWidth placeholder="Full width textarea" />
    </div>
  )
}

export { TextAreaFullWidth }
