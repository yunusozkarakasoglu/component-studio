/**
 * MtBurgerUsage
 * Hamburger menü (saf React, Mantine kaynaklı).
 * @id 1098
 * @category Butonlar & Aksiyonlar
 * @subcategory MtBurger
 * @source mantine
 */
import { useState } from "react"
import { MtBurger } from "@/components/ui/mt-burger"

function MtBurgerUsage() {
  const [opened, setOpened] = useState(false)

  return <MtBurger opened={opened} onClick={() => setOpened((o) => !o)} aria-label="Toggle navigation" />
}

export { MtBurgerUsage }
