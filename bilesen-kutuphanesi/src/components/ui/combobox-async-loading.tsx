/**
 * ComboboxAsyncLoading
 * Asenkron yükleme örneği — dış API yok, yerel simülasyon (saf React).
 * @id 255
 * @category Combobox
 */
import { useEffect, useState } from "react"
import { Combobox, type ComboboxItem } from "@/components/ui/combobox"
import { Spinner } from "@/components/ui/spinner"

const CHARACTERS = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo", "Yoda", "Obi-Wan Kenobi"]

function ComboboxAsyncLoading() {
  const [items, setItems] = useState<ComboboxItem[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => {
      setItems(CHARACTERS.map((n, i) => ({ id: String(i), name: n })))
      setLoading(false)
    }, 1200)
    return () => clearTimeout(t)
  }, [])
  if (loading) {
    return (
      <div className="flex h-10 w-[256px] items-center gap-2 text-sm text-muted-foreground">
        <Spinner size="sm" /> Yükleniyor…
      </div>
    )
  }
  return <Combobox allowsEmptyCollection className="w-[256px]" items={items} label="Pick a Character" placeholder="Star Wars characters..." />
}

export { ComboboxAsyncLoading }
