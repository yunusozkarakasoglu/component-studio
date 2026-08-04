/**
 * ButtonFullWidth
 * Full Width örneği — tam genişlik (saf React).
 * @id 100
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"
import { Plus } from "@/components/ui/icons"

function ButtonFullWidth() {
  return (
    <div className="w-[400px] space-y-3">
      <Button fullWidth>Primary Button</Button>
      <Button fullWidth>
        <Plus className="size-4" />
        With Icon
      </Button>
    </div>
  )
}

export { ButtonFullWidth }
