/**
 * MtCenterInline
 * Satır içi ortalama (saf React, Mantine kaynaklı).
 * @id 1013
 * @category Genel
 * @subcategory MtCenter
 * @source mantine
 */
import { ArrowLeft } from "@/components/ui/icons"
import { MtCenter } from "@/components/ui/mt-center"

function MtCenterInline() {
  return (
    <a href="https://mantine.dev" target="_blank" rel="noreferrer" className="text-sm text-blue-600 underline underline-offset-4">
      <MtCenter inline>
        <ArrowLeft className="size-3" />
        <span className="ml-1">Back to Mantine website</span>
      </MtCenter>
    </a>
  )
}

export { MtCenterInline }
