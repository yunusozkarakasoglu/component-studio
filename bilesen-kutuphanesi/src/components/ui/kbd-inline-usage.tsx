/**
 * KbdInlineUsage
 * Satır içi kullanım örneği (saf React).
 * @id 612
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd, KbdAbbr } from "@/components/ui/kbd"

function KbdInlineUsage() {
  return (
    <p className="text-sm text-muted-foreground">
      Yeni dosya oluşturmak için <Kbd size="sm"><KbdAbbr>⌘</KbdAbbr>N</Kbd>, arama için{" "}
      <Kbd size="sm"><KbdAbbr>⌘</KbdAbbr>K</Kbd> kullanın.
    </p>
  )
}

export { KbdInlineUsage }
