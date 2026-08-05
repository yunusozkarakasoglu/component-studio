/**
 * KbdVariants
 * Boyut/variant örneği (saf React).
 * @id 610
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd, KbdAbbr, KbdContent } from "@/components/ui/kbd"

function KbdVariants() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        {(["sm", "md", "lg"] as const).map((size) => (
          <Kbd key={size} size={size}>
            <KbdAbbr>⌘</KbdAbbr>
            <KbdContent>{size === "sm" ? "S" : "Shift"}</KbdContent>
          </Kbd>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Kbd variant="default">default</Kbd>
        <Kbd variant="outline">outline</Kbd>
        <Kbd variant="light">light</Kbd>
      </div>
    </div>
  )
}

export { KbdVariants }
