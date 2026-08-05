/**
 * SeparatorBasic
 * Temel örnek (saf React).
 * @id 590
 * @category Genel
 * @subcategory Separator
 */
import { Separator } from "@/components/ui/separator"

function SeparatorBasic() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <p className="text-sm text-foreground">Content above the separator</p>
      <Separator />
      <p className="text-sm text-muted-foreground">Content below the separator</p>
    </div>
  )
}

export { SeparatorBasic }
