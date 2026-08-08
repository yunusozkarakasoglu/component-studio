/**
 * MtRollingNumberUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1556
 * @category Yükleme & İlerleme
 * @subcategory MtRollingNumber
 * @source mantine
 */
import { useEffect, useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtRollingNumber } from "@/components/ui/mt-rolling-number"

function MtRollingNumberUsage() {
  const [value, setValue] = useState(5000)

  useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 15000 ? 5000 : v + 100)), 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col items-start gap-2">
      <MtRollingNumber value={value} className="text-2xl font-bold text-foreground" />
      <MtButton variant="default" onClick={() => setValue((v) => v + 500)}>+500</MtButton>
    </div>
  )
}

export { MtRollingNumberUsage }
