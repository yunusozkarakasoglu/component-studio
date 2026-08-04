/**
 * ChipStatuses
 * HeroUI Statuses örneği — durum rozetleri (saf React).
 * @id 224
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import { Chip, ChipLabel } from "@/components/ui/chip"
import { AlertTriangle, Ban, Check, Info } from "@/components/ui/icons"

function ChipStatuses() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Chip variant="primary"><span className="size-1.5 rounded-full bg-current" /><ChipLabel>Default</ChipLabel></Chip>
        <Chip color="success" variant="primary"><span className="size-1.5 rounded-full bg-current" /><ChipLabel>Active</ChipLabel></Chip>
        <Chip color="warning" variant="primary"><span className="size-1.5 rounded-full bg-current" /><ChipLabel>Pending</ChipLabel></Chip>
        <Chip color="danger" variant="primary"><span className="size-1.5 rounded-full bg-current" /><ChipLabel>Inactive</ChipLabel></Chip>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Chip><Info className="size-3" /><ChipLabel>New Feature</ChipLabel></Chip>
        <Chip color="success"><Check className="size-3" /><ChipLabel>Available</ChipLabel></Chip>
        <Chip color="warning"><AlertTriangle className="size-3" /><ChipLabel>Beta</ChipLabel></Chip>
        <Chip color="danger"><Ban className="size-3" /><ChipLabel>Deprecated</ChipLabel></Chip>
      </div>
    </div>
  )
}

export { ChipStatuses }
