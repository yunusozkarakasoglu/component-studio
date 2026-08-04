/**
 * ButtonSizes
 * HeroUI Sizes örneği — sm / md / lg (saf React).
 * @id 095
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"

function ButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export { ButtonSizes }
