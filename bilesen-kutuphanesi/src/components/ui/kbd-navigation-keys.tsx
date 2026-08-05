/**
 * KbdNavigationKeys
 * Yön tuşları örneği (saf React).
 * @id 611
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd } from "@/components/ui/kbd"

function KbdNavigationKeys() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <span className="mx-2 text-sm text-muted-foreground">veya</span>
      <Kbd>Tab</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  )
}

export { KbdNavigationKeys }
