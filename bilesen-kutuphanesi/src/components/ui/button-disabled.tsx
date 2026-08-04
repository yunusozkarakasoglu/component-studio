/**
 * ButtonDisabled
 * Disabled State örneği — devre dışı butonlar (saf React).
 * @id 101
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"

function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button isDisabled>Primary</Button>
      <Button isDisabled variant="secondary">Secondary</Button>
      <Button isDisabled variant="tertiary">Tertiary</Button>
      <Button isDisabled variant="outline">Outline</Button>
      <Button isDisabled variant="ghost">Ghost</Button>
      <Button isDisabled variant="danger">Danger</Button>
    </div>
  )
}

export { ButtonDisabled }
