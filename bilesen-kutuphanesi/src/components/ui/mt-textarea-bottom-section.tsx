/**
 * MtTextareaBottomSection
 * Alt bölüm — karakter sayacı (saf React, Mantine kaynaklı).
 * @id 1137
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { useState } from "react"
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaBottomSection() {
  const [value, setValue] = useState("")
  const limit = 100

  return (
    <div className="flex max-w-sm flex-col gap-1.5">
      <MtTextarea
        label="Message"
        placeholder="Type up to 100 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={limit}
      />
      <p className={`text-right text-xs ${value.length >= limit ? "text-red-500" : "text-muted-foreground"}`}>
        {value.length}/{limit}
      </p>
    </div>
  )
}

export { MtTextareaBottomSection }
