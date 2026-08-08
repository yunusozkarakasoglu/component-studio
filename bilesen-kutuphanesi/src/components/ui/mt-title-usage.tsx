/**
 * MtTitleUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1486
 * @category Veri Gösterimi
 * @subcategory MtTitle
 * @source mantine
 */
import { MtTitle } from "@/components/ui/mt-title"

function MtTitleUsage() {
  return (
    <div className="flex flex-col gap-1">
      <MtTitle order={1}>Heading 1</MtTitle>
      <MtTitle order={2}>Heading 2</MtTitle>
      <MtTitle order={3}>Heading 3</MtTitle>
      <MtTitle order={4}>Heading 4</MtTitle>
      <MtTitle order={5}>Heading 5</MtTitle>
      <MtTitle order={6}>Heading 6</MtTitle>
    </div>
  )
}

export { MtTitleUsage }
