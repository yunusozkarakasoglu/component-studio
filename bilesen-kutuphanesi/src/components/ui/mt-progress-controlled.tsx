/**
 * MtProgressControlled
 * Kontrollü (saf React, Mantine kaynaklı).
 * @id 1529
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { useEffect, useState } from "react"
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressControlled() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        if (v >= 100) { clearInterval(id); return 100 }
        return v + 5
      })
    }, 300)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <MtProgress value={value} color={value > 80 ? "green" : value > 40 ? "blue" : "gray"} />
      <p className="text-xs text-muted-foreground">Yükleniyor: %{value}</p>
    </div>
  )
}

export { MtProgressControlled }
