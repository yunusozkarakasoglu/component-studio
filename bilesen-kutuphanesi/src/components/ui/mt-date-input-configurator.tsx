/**
 * MtDateInputConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1612
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputConfigurator() {
  const [date, setDate] = useState<Date | null>(new Date(2025, 0, 15))
  const [size, setSize] = useState<"sm" | "md" | "lg">("md")
  const sizes = ["sm", "md", "lg"]

  return (
    <div className="flex flex-col items-start gap-4">
      <MtDateInput label="Tarih" value={date} onChange={setDate} size={size} clearable />
      <div className="flex gap-1.5">
        {sizes.map((s) => (
          <button key={s} onClick={() => setSize(s as never)} className={`cursor-pointer rounded px-2 py-0.5 text-xs capitalize ${size === s ? "bg-blue-600 text-white" : "bg-muted"}`}>{s}</button>
        ))}
      </div>
    </div>
  )
}

export { MtDateInputConfigurator }
