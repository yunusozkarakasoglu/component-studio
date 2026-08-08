/**
 * MtLoaderSizes
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1521
 * @category Yükleme & İlerleme
 * @subcategory MtLoader
 * @source mantine
 */
import { MtLoader } from "@/components/ui/mt-loader"

function MtLoaderSizes() {
  return (
    <div className="flex items-end gap-4">
      <MtLoader size="xs" />
      <MtLoader size="sm" />
      <MtLoader size="md" />
      <MtLoader size="lg" />
      <MtLoader size="xl" />
    </div>
  )
}

export { MtLoaderSizes }
