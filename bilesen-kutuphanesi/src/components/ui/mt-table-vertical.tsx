/**
 * MtTableVertical
 * Dikey tablo (saf React, Mantine kaynaklı).
 * @id 1447
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTd, MtTableTh, MtTableTr } from "@/components/ui/mt-table"

const specs = [
  { label: "Processor", value: "Apple M3" },
  { label: "Memory", value: "16 GB unified" },
  { label: "Storage", value: "512 GB SSD" },
  { label: "Display", value: "14-inch Retina" },
  { label: "Battery", value: "Up to 18 hours" },
]

function MtTableVertical() {
  const rows = specs.map((s) => (
    <MtTableTr key={s.label}>
      <MtTableTh scope="row" className="w-32 whitespace-nowrap">{s.label}</MtTableTh>
      <MtTableTd>{s.value}</MtTableTd>
    </MtTableTr>
  ))

  return <MtTable withTableBorder className="max-w-md">{rows}</MtTable>
}

export { MtTableVertical }
