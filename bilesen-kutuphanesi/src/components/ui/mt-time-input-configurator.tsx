/**
 * MtTimeInputConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1702
 * @category Takvim
 * @subcategory MtTimeInput
 * @source mantine
 */
import { useState } from "react"
import { MtTimeInput } from "@/components/ui/mt-time-input"

function MtTimeInputConfigurator() {
  const [time, setTime] = useState("14:30")
  const [size, setSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="flex flex-col items-start gap-4">
      <MtTimeInput label="Saat" value={time} onChange={setTime} size={size} />
      <div className="flex gap-1.5">
        {["sm", "md", "lg"].map((s) => (
          <button key={s} onClick={() => setSize(s as never)} className={`cursor-pointer rounded px-2 py-0.5 text-xs capitalize ${size === s ? "bg-blue-600 text-white" : "bg-muted"}`}>{s}</button>
        ))}
      </div>
    </div>
  )
}

export { MtTimeInputConfigurator }
