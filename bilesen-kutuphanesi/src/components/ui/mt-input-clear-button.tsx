/**
 * MtInputClearButton
 * Temizleme butonu (saf React, Mantine kaynaklı).
 * @id 1198
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { useState } from "react"
import { X } from "@/components/ui/icons"
import { MtInput } from "@/components/ui/mt-input"

function MtInputClearButton() {
  const [value, setValue] = useState("Type to clear")

  return (
    <div className="relative max-w-sm">
      <MtInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" />
      {value && (
        <button
          type="button"
          aria-label="Clear"
          onClick={() => setValue("")}
          className="absolute inset-y-0 right-2.5 flex cursor-pointer items-center text-muted-foreground hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

export { MtInputClearButton }
