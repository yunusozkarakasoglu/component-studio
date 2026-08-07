/**
 * MtCenterDemo
 * İçerik ortalaması (saf React, Mantine kaynaklı).
 * @id 1012
 * @category Genel
 * @subcategory MtCenter
 * @source mantine
 */
import { MtCenter } from "@/components/ui/mt-center"

function MtCenterDemo() {
  return (
    <MtCenter className="h-24 max-w-[400px] rounded-lg bg-gray-200">
      <span className="rounded bg-blue-200 px-3 py-1 text-sm">
        All elements inside Center are centered
      </span>
    </MtCenter>
  )
}

export { MtCenterDemo }
