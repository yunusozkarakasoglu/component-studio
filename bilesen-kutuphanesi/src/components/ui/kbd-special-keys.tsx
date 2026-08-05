/**
 * KbdSpecialKeys
 * Özel tuşlar örneği (saf React).
 * @id 614
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd, KbdAbbr, KbdContent } from "@/components/ui/kbd"

function KbdSpecialKeys() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Kbd><KbdAbbr>⌥</KbdAbbr><KbdContent>Option</KbdContent></Kbd>
      <Kbd><KbdAbbr>⌃</KbdAbbr><KbdContent>Control</KbdContent></Kbd>
      <Kbd><KbdAbbr>⇧</KbdAbbr><KbdContent>Shift</KbdContent></Kbd>
      <Kbd><KbdAbbr>⌘</KbdAbbr><KbdContent>Command</KbdContent></Kbd>
    </div>
  )
}

export { KbdSpecialKeys }
