/**
 * ShadcnButtonRender
 * Bağlantı olarak buton (saf React, shadcn kaynaklı).
 * @id 754
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { ArrowUpRight } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonRender() {
  return (
    <ShadcnButton variant="outline" onClick={() => window.open("https://ui.shadcn.com", "_blank")}>
      Open Docs
      <ArrowUpRight data-icon="inline-end" className="size-4" />
    </ShadcnButton>
  )
}

export { ShadcnButtonRender }
