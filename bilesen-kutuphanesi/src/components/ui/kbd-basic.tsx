/**
 * KbdBasic
 * Temel örnek (saf React).
 * @id 609
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd } from "@/components/ui/kbd"

function KbdBasic() {
  return (
    <div className="flex items-center gap-4">
      <Kbd>⌘K</Kbd>
      <Kbd>Ctrl+S</Kbd>
      <Kbd>Esc</Kbd>
    </div>
  )
}

export { KbdBasic }
