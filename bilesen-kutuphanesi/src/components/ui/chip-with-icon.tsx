/**
 * ChipWithIcon
 * HeroUI With Icons örneği (saf React, kendi setimizden).
 * @id 225
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import { Chip, ChipLabel } from "@/components/ui/chip"
import { CheckCircle, ChevronDown, Circle, Clock, X } from "@/components/ui/icons"

function ChipWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip><Circle className="size-2.5" /><ChipLabel>Information</ChipLabel></Chip>
      <Chip color="success"><CheckCircle className="size-3" /><ChipLabel>Completed</ChipLabel></Chip>
      <Chip color="warning"><Clock className="size-3" /><ChipLabel>Pending</ChipLabel></Chip>
      <Chip color="danger"><X className="size-3" /><ChipLabel>Failed</ChipLabel></Chip>
      <Chip color="accent"><ChipLabel>Label</ChipLabel><ChevronDown className="size-3" /></Chip>
    </div>
  )
}

export { ChipWithIcon }
