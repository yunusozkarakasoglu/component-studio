/**
 * MtBurgerLineWidth
 * Çizgi kalınlığı + renk (saf React, Mantine kaynaklı).
 * @id 1099
 * @category Butonlar & Aksiyonlar
 * @subcategory MtBurger
 * @source mantine
 */
import { useState } from "react"
import { MtBurger } from "@/components/ui/mt-burger"

function MtBurgerLineWidth() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <MtBurger opened={opened} onClick={() => setOpened((o) => !o)} lineWidth={1} aria-label="Toggle thin" />
      <MtBurger opened={opened} onClick={() => setOpened((o) => !o)} lineWidth={3} aria-label="Toggle thick" />
      <MtBurger opened={opened} onClick={() => setOpened((o) => !o)} color="#e11d48" aria-label="Toggle colored" />
    </div>
  )
}

export { MtBurgerLineWidth }
