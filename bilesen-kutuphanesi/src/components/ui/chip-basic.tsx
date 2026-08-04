/**
 * ChipBasic
 * HeroUI Usage örneği — renkler (saf React).
 * @id 222
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import { Chip, ChipLabel } from "@/components/ui/chip"

function ChipBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip><ChipLabel>Default</ChipLabel></Chip>
      <Chip color="accent"><ChipLabel>Accent</ChipLabel></Chip>
      <Chip color="success"><ChipLabel>Success</ChipLabel></Chip>
      <Chip color="warning"><ChipLabel>Warning</ChipLabel></Chip>
      <Chip color="danger"><ChipLabel>Danger</ChipLabel></Chip>
    </div>
  )
}

export { ChipBasic }
