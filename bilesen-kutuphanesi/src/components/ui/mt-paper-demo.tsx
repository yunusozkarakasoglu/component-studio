/**
 * MtPaperDemo
 * Yüzey kullanımı (saf React, Mantine kaynaklı).
 * @id 1021
 * @category Genel
 * @subcategory MtPaper
 * @source mantine
 */
import { MtPaper } from "@/components/ui/mt-paper"

function MtPaperDemo() {
  return (
    <MtPaper withBorder p="xl" className="max-w-md">
      <p className="font-medium">Paper is the most basic ui component</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Use it to create cards, dropdowns, modals and other components that require background with shadow
      </p>
    </MtPaper>
  )
}

export { MtPaperDemo }
