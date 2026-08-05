/**
 * SeparatorWithContent
 * İçerikli ayraç örneği (saf React).
 * @id 594
 * @category Genel
 * @subcategory Separator
 */
import { Separator } from "@/components/ui/separator"

function SeparatorWithContent() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Separator className="flex-1" />
      <span className="text-xs text-muted-foreground">veya</span>
      <Separator className="flex-1" />
    </div>
  )
}

export { SeparatorWithContent }
