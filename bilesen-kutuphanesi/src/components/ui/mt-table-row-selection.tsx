/**
 * MtTableRowSelection
 * Satır seçimli tablo (saf React, Mantine kaynaklı).
 * @id 1448
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { useState } from "react"
import { MtCheckbox } from "@/components/ui/mt-checkbox"
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

const data = [
  { id: 1, name: "Alice Johnson", role: "Designer" },
  { id: 2, name: "Bob Smith", role: "Engineer" },
  { id: 3, name: "Carol White", role: "Manager" },
]

function MtTableRowSelection() {
  const [selected, setSelected] = useState<number[]>([])

  const toggle = (id: number) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  return (
    <MtTable className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh className="w-10">
            <MtCheckbox
              checked={selected.length === data.length}
              isIndeterminate={selected.length > 0 && selected.length < data.length}
              onChange={() =>
                setSelected(selected.length === data.length ? [] : data.map((d) => d.id))
              }
            />
          </MtTableTh>
          <MtTableTh>Name</MtTableTh>
          <MtTableTh>Role</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        {data.map((d) => (
          <MtTableTr key={d.id} className={selected.includes(d.id) ? "bg-blue-50/60" : ""}>
            <MtTableTd>
              <MtCheckbox checked={selected.includes(d.id)} onChange={() => toggle(d.id)} />
            </MtTableTd>
            <MtTableTd>{d.name}</MtTableTd>
            <MtTableTd>{d.role}</MtTableTd>
          </MtTableTr>
        ))}
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableRowSelection }
