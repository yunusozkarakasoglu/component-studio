/**
 * MuiAutocompleteGrouped
 * @id 2044
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { useState } from "react"
import { cn } from "@/lib/utils"

function MuiAutocompleteGrouped() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const groups = [
    { label: "Meyveler", items: ["Elma", "Armut", "Muz", "Çilek"] },
    { label: "Sebzeler", items: ["Domates", "Salatalık", "Biber", "Havuç"] },
    { label: "Tahıllar", items: ["Buğday", "Arpa", "Mısır", "Yulaf"] },
  ]
  const filtered = groups
    .map((g) => ({ ...g, items: g.items.filter((i) => i.toLowerCase().includes(query.toLowerCase())) }))
    .filter((g) => g.items.length > 0)
  return (
    <div className="w-full max-w-sm">
      <label className="mb-1 block text-sm text-gray-700">Gruplu otomatik tamamlama</label>
      <div className="relative">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          placeholder="Ara…"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
        />
      </div>
      {open && filtered.length > 0 && (
        <div className="mt-1 max-h-56 overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg">
          {filtered.map((g) => (
            <div key={g.label}>
              <p className="bg-gray-50 px-3 py-1 text-xs font-semibold uppercase text-gray-500">{g.label}</p>
              {g.items.map((i) => (
                <button key={i} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => { setQuery(i); setOpen(false) }}
                  className={cn("block w-full px-3 py-1.5 text-left text-sm hover:bg-blue-50")}>
                  {i}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { MuiAutocompleteGrouped }
