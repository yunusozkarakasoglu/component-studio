/**
 * MtFileButtonUsage
 * Temel dosya seçici (saf React, Mantine kaynaklı).
 * @id 1095
 * @category Butonlar & Aksiyonlar
 * @subcategory MtFileButton
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtFileButton } from "@/components/ui/mt-file-button"

function MtFileButtonUsage() {
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <div className="flex items-center gap-3">
      <MtFileButton accept="image/png,image/jpeg" onChange={(files) => setFileName(files[0]?.name ?? null)}>
        {(props) => <MtButton {...props}>Upload image</MtButton>}
      </MtFileButton>
      {fileName && <span className="text-sm text-muted-foreground">{fileName}</span>}
    </div>
  )
}

export { MtFileButtonUsage }
