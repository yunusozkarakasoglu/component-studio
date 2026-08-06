/**
 * ShadcnButtonRounded
 * Yuvarlak butonlar (saf React, shadcn kaynaklı).
 * @id 752
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { ArrowUp } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonRounded() {
  return (
    <div className="flex gap-2">
      <ShadcnButton className="rounded-full">Get Started</ShadcnButton>
      <ShadcnButton variant="outline" size="icon" className="rounded-full" aria-label="Up">
        <ArrowUp className="size-4" />
      </ShadcnButton>
    </div>
  )
}

export { ShadcnButtonRounded }
