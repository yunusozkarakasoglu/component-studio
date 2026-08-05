/**
 * SeparatorVariants
 * solid/dashed variant örneği (saf React).
 * @id 591
 * @category Genel
 * @subcategory Separator
 */
import { Separator } from "@/components/ui/separator"

function SeparatorVariants() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <p className="text-xs text-muted-foreground">Solid</p>
      <Separator />
      <p className="text-xs text-muted-foreground">Dashed</p>
      <Separator variant="dashed" />
    </div>
  )
}

export { SeparatorVariants }
