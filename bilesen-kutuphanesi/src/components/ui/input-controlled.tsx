/**
 * InputControlled
 * Kontrollü örnek — domain önizlemesi (saf React).
 * @id 332
 * @category Form Elemanları
 * @subcategory Input
 */
import { useState } from "react"
import { Input } from "@/components/ui/input"

function InputControlled() {
  const [value, setValue] = useState("heroui.com")

  return (
    <div className="flex w-80 flex-col gap-2">
      <Input
        aria-label="Domain"
        placeholder="domain"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <span className="px-1 text-sm text-muted-foreground">
        https://{value || "your-domain"}
      </span>
    </div>
  )
}

export { InputControlled }
