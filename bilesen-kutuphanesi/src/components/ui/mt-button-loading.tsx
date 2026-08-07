/**
 * MtButtonLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1062
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"

function MtButtonLoading() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-wrap gap-3">
        <MtButton loading={loading}>Filled button</MtButton>
        <MtButton variant="light" loading={loading}>Light button</MtButton>
        <MtButton variant="outline" loading={loading}>Outline button</MtButton>
      </div>
      <button
        type="button"
        onClick={() => setLoading((v) => !v)}
        className="inline-flex items-center gap-2 text-sm"
      >
        <span className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${loading ? "bg-blue-600" : "bg-gray-300"}`}>
          <span className={`inline-block size-3 translate-x-0.5 rounded-full bg-white transition-transform ${loading ? "translate-x-3.5" : ""}`} />
        </span>
        Loading state
      </button>
    </div>
  )
}

export { MtButtonLoading }
