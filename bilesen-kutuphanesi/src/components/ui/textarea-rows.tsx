/**
 * TextAreaRows
 * Satır sayısı ve yeniden boyutlandırma örneği (saf React).
 * @id 307
 * @category Form Elemanları
 * @subcategory TextArea
 */
import type { CSSProperties } from "react"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"

const resizeStyle: CSSProperties = { resize: "vertical" }

function TextAreaRows() {
  return (
    <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="textarea-rows-3">Short feedback</Label>
        <TextArea
          aria-label="Short feedback"
          id="textarea-rows-3"
          placeholder="This week's highlights..."
          rows={3}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="textarea-rows-6">Detailed notes</Label>
        <TextArea
          aria-label="Detailed notes"
          id="textarea-rows-6"
          placeholder="Write out the full meeting notes..."
          rows={6}
          style={resizeStyle}
        />
      </div>
    </div>
  )
}

export { TextAreaRows }
