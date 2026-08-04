/**
 * TextFieldTextArea
 * TextArea kullanımlı alan örneği (saf React).
 * @id 295
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { TextField } from "@/components/ui/text-field"

function TextFieldTextArea() {
  return (
    <TextField className="w-full max-w-64" name="message">
      <Label>Message</Label>
      <TextArea placeholder="Write your message here..." rows={4} />
      <Description>Maximum 500 characters</Description>
    </TextField>
  )
}

export { TextFieldTextArea }
