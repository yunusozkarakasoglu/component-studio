/**
 * SeparatorWithSurface
 * Yüzey üzerinde örnek (saf React).
 * @id 592
 * @category Genel
 * @subcategory Separator
 */
import { Separator } from "@/components/ui/separator"

function SeparatorWithSurface() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-background p-4">
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Billing</p>
        <Separator />
        <p className="text-sm font-medium text-foreground">Usage</p>
        <Separator />
        <p className="text-sm font-medium text-foreground">Team</p>
      </div>
    </div>
  )
}

export { SeparatorWithSurface }
