/**
 * MtTitleSize
 * Boyutlu başlık (saf React, Mantine kaynaklı).
 * @id 1488
 * @category Veri Gösterimi
 * @subcategory MtTitle
 * @source mantine
 */
import { MtTitle } from "@/components/ui/mt-title"

function MtTitleSize() {
  return (
    <div className="flex flex-col gap-1.5">
      <MtTitle order={1} size="xs">Order 1, size xs</MtTitle>
      <MtTitle order={2} size="sm">Order 2, size sm</MtTitle>
      <MtTitle order={3} size="md">Order 3, size md</MtTitle>
      <MtTitle order={4} size="lg">Order 4, size lg</MtTitle>
      <MtTitle order={5} size="xl">Order 5, size xl</MtTitle>
      <MtTitle order={6} size="2xl">Order 6, size 2xl</MtTitle>
    </div>
  )
}

export { MtTitleSize }
