/**
 * ShadcnButtonSize
 * Boyutlar — xs'den lg'ye + ikon boyutları (saf React, shadcn kaynaklı).
 * @id 743
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { ArrowUpRight } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <ShadcnButton size="xs" variant="outline">Extra Small</ShadcnButton>
        <ShadcnButton size="icon-xs" aria-label="Submit" variant="outline">
          <ArrowUpRight className="size-3.5" />
        </ShadcnButton>
      </div>
      <div className="flex items-start gap-2">
        <ShadcnButton size="sm" variant="outline">Small</ShadcnButton>
        <ShadcnButton size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRight className="size-4" />
        </ShadcnButton>
      </div>
      <div className="flex items-start gap-2">
        <ShadcnButton variant="outline">Default</ShadcnButton>
        <ShadcnButton size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRight className="size-4" />
        </ShadcnButton>
      </div>
      <div className="flex items-start gap-2">
        <ShadcnButton variant="outline" size="lg">Large</ShadcnButton>
        <ShadcnButton size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRight className="size-5" />
        </ShadcnButton>
      </div>
    </div>
  )
}

export { ShadcnButtonSize }
