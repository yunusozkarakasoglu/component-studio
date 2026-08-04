/**
 * ButtonIconOnly
 * HeroUI Icon Only örneği — yalnızca ikon içeren butonlar (saf React).
 * GravityUI eşleştirmesi: Ellipsis→Ellipsis, Gear→Settings, TrashBin→Trash2.
 * @id 097
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"
import { Ellipsis, Settings, Trash2 } from "@/components/ui/icons"

function ButtonIconOnly() {
  return (
    <div className="flex gap-3">
      <Button isIconOnly variant="tertiary" aria-label="Daha fazla">
        <Ellipsis className="size-4" />
      </Button>
      <Button isIconOnly variant="secondary" aria-label="Ayarlar">
        <Settings className="size-4" />
      </Button>
      <Button isIconOnly variant="danger" aria-label="Sil">
        <Trash2 className="size-4" />
      </Button>
    </div>
  )
}

export { ButtonIconOnly }
