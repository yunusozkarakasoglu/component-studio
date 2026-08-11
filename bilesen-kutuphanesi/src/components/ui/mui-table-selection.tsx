/**
 * MuiTableSelection
 * @id 2054
 * @category Veri Gösterimi
 * @subcategory MuiTable
 * @source mui
 */
import { useState } from "react"
import { MuiTable } from "@/components/ui/mui-table"
import { MuiCheckbox } from "@/components/ui/mui-checkbox"

function MuiTableSelection() {
  const [selected, setSelected] = useState<string[]>([])
  const rows = [
    { id: "1", ad: "Ahmet Yılmaz", rol: "Geliştirici" },
    { id: "2", ad: "Ayşe Kaya", rol: "Tasarımcı" },
    { id: "3", ad: "Mehmet Demir", rol: "Yönetici" },
    { id: "4", ad: "Fatma Şahin", rol: "Analist" },
  ]
  const allChecked = selected.length === rows.length
  const someChecked = selected.length > 0 && !allChecked
  const toggle = (id: string) => setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  return (
    <div className="w-full max-w-lg">
      <MuiTable
        columns={[
          { key: "sec", label: <MuiCheckbox checked={allChecked} indeterminate={someChecked} onChange={() => setSelected(allChecked ? [] : rows.map((r) => r.id))} /> },
          { key: "ad", label: "Ad" },
          { key: "rol", label: "Rol" },
        ]}
        rows={rows.map((r) => ({
          sec: <MuiCheckbox checked={selected.includes(r.id)} onChange={() => toggle(r.id)} />,
          ad: r.ad,
          rol: r.rol,
        }))}
        striped
      />
      <p className="mt-2 text-xs text-gray-500">Seçili: {selected.length} satır</p>
    </div>
  )
}

export { MuiTableSelection }
