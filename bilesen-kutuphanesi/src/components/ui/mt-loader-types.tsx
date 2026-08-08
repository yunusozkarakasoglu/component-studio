/**
 * MtLoaderTypes
 * Tipler (saf React, Mantine kaynaklı).
 * @id 1520
 * @category Yükleme & İlerleme
 * @subcategory MtLoader
 * @source mantine
 */
import { MtLoader } from "@/components/ui/mt-loader"

function MtLoaderTypes() {
  return (
    <div className="flex items-center gap-6">
      <MtLoader type="oval" />
      <MtLoader type="bars" />
      <MtLoader type="dots" />
      <MtLoader type="ring" />
    </div>
  )
}

export { MtLoaderTypes }
