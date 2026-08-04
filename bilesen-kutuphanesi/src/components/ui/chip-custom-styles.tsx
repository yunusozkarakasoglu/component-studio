/**
 * ChipCustomStyles
 * HeroUI Tailwind CSS örneği — özel durumlar (saf React).
 * @id 226
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import { Chip, ChipLabel } from "@/components/ui/chip"

function ChipCustomStyles() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip className="rounded-full bg-muted px-3 text-foreground"><ChipLabel>Draft</ChipLabel></Chip>
      <Chip className="rounded-full bg-amber-100 px-3 text-amber-800"><ChipLabel>In review</ChipLabel></Chip>
      <Chip className="rounded-full bg-emerald-100 px-3 text-emerald-800"><ChipLabel>Published</ChipLabel></Chip>
    </div>
  )
}

export { ChipCustomStyles }
