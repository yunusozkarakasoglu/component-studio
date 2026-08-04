/**
 * TextAreaBasic
 * Temel örnek: bağımsız textarea (saf React).
 * @id 302
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { TextArea } from "@/components/ui/textarea"

function TextAreaBasic() {
  return (
    <TextArea
      aria-label="Quick project update"
      className="h-32 w-96"
      placeholder="Share a quick project update..."
    />
  )
}

export { TextAreaBasic }
