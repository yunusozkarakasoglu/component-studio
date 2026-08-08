/**
 * MtLoaderColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1522
 * @category Yükleme & İlerleme
 * @subcategory MtLoader
 * @source mantine
 */
import { MtLoader } from "@/components/ui/mt-loader"

function MtLoaderColors() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <MtLoader color="blue" />
      <MtLoader color="red" />
      <MtLoader color="green" />
      <MtLoader color="teal" />
      <MtLoader color="grape" />
      <MtLoader color="pink" />
      <MtLoader color="orange" />
    </div>
  )
}

export { MtLoaderColors }
