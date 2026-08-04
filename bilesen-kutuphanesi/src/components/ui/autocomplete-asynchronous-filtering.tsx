/**
 * AutocompleteAsynchronousFiltering
 * Asynchronous Filtering örneği — SWAPI dış API yerine yerel simülasyon
 * (dış kaynak yasağı — setTimeout + yerel veri, saf React).
 * @id 154
 * @category Form Elemanları
 */
import { useEffect, useState } from "react"
import { Autocomplete, type AutocompleteItem } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"

const CHARACTERS = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo", "Yoda", "Obi-Wan Kenobi", "R2-D2", "C-3PO", "Boba Fett", "Chewbacca"]

function AutocompleteAsynchronousFiltering() {
  const [items, setItems] = useState<AutocompleteItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setItems(CHARACTERS.map((name, i) => ({ id: String(i), name })))
      setLoading(false)
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">Search a Star Wars character</Label>
      {loading ? (
        <div className="flex h-10 items-center gap-2 text-sm text-muted-foreground">
          <Spinner size="sm" /> Yükleniyor…
        </div>
      ) : (
        <Autocomplete items={items} placeholder="Search..." selectionMode="single" />
      )}
    </div>
  )
}

export { AutocompleteAsynchronousFiltering }
