/**
 * MtTreeAsyncLoading
 * Eşzamansız yükleme (saf React, Mantine kaynaklı).
 * @id 1807
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeAsyncLoading() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([
    { label: "Projeler", value: "projeler", children: [] },
  ])

  const load = () => {
    setLoading(true)
    setTimeout(() => {
      setData([{ label: "Projeler", value: "projeler", children: [
        { label: "Web", value: "web" }, { label: "Mobil", value: "mobil" },
      ]}])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="flex w-64 flex-col gap-2">
      <button onClick={load} className="w-fit cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
        {loading ? "Yükleniyor…" : "Veriyi yükle"}
      </button>
      <MtTree data={data} />
    </div>
  )
}

export { MtTreeAsyncLoading }
