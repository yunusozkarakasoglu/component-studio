/**
 * ShadcnButtonLoading
 * Yükleniyor durumu — Spinner'lı butonlar (saf React, shadcn kaynaklı).
 * Spinner: kütüphanenin mevcut bileşeni.
 * @id 753
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { Spinner } from "@/components/ui/spinner"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonLoading() {
  return (
    <div className="flex gap-2">
      <ShadcnButton variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Generating
      </ShadcnButton>
      <ShadcnButton variant="secondary" disabled>
        Downloading
        <Spinner data-icon="inline-start" />
      </ShadcnButton>
    </div>
  )
}

export { ShadcnButtonLoading }
