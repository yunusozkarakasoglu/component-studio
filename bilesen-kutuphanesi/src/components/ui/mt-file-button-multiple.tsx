/**
 * MtFileButtonMultiple
 * Çoklu dosya seçici (saf React, Mantine kaynaklı).
 * @id 1096
 * @category Butonlar & Aksiyonlar
 * @subcategory MtFileButton
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtFileButton } from "@/components/ui/mt-file-button"

function MtFileButtonMultiple() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="flex flex-col items-start gap-3">
      <MtFileButton multiple onChange={setFiles}>
        {(props) => <MtButton variant="light" {...props}>Upload multiple files</MtButton>}
      </MtFileButton>
      {files.length > 0 && (
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {files.map((f) => <li key={f.name}>{f.name}</li>)}
        </ul>
      )}
    </div>
  )
}

export { MtFileButtonMultiple }
