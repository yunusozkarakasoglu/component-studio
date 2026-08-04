/**
 * TextAreaControlled
 * Kontrollü örnek — karakter sayacı (saf React).
 * @id 306
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { TextArea } from "@/components/ui/textarea"

function TextAreaControlled() {
  const [value, setValue] = useState("")

  return (
    <div className="flex w-96 flex-col gap-2">
      <TextArea
        aria-describedby="textarea-controlled-description"
        aria-label="Announcement"
        placeholder="Compose an announcement..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Description id="textarea-controlled-description">
        Characters: {value.length} / 280
      </Description>
    </div>
  )
}

export { TextAreaControlled }
