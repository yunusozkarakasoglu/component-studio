/**
 * MtSemiCircleConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1545
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { useState } from "react"
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleConfigurator() {
  const [value, setValue] = useState(50)
  const [dir, setDir] = useState<"left-to-right" | "right-to-left">("left-to-right")

  return (
    <div className="flex items-center gap-8">
      <MtSemiCircleProgress value={value} fillDirection={dir} label={`%${value}`} />
      <div className="flex flex-col gap-3 text-xs text-muted-foreground">
        <label className="flex items-center gap-2">
          Değer: {value}
          <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(+e.target.value)} className="w-32" />
        </label>
        <div className="flex gap-2">
          {(["left-to-right", "right-to-left"] as const).map((d) => (
            <button key={d} onClick={() => setDir(d)} className={`cursor-pointer rounded px-2 py-0.5 ${dir === d ? "bg-blue-600 text-white" : "bg-muted"}`}>{d}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { MtSemiCircleConfigurator }
