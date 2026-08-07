/**
 * MtFileButtonReset
 * Sıfırlanabilir dosya seçici (saf React, Mantine kaynaklı).
 * @id 1097
 * @category Butonlar & Aksiyonlar
 * @subcategory MtFileButton
 * @source mantine
 */
import { useRef, useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtFileButton } from "@/components/ui/mt-file-button"

function MtFileButtonReset() {
  const [fileName, setFileName] = useState<string | null>(null)
  const resetRef = useRef<(() => void) | null>(null)

  return (
    <div className="flex items-center gap-3">
      <MtFileButton resetRef={resetRef} onChange={(files) => setFileName(files[0]?.name ?? null)}>
        {(props) => <MtButton {...props}>Pick file</MtButton>}
      </MtFileButton>
      {fileName && (
        <>
          <span className="text-sm text-muted-foreground">{fileName}</span>
          <MtButton
            variant="outline"
            onClick={() => {
              setFileName(null)
              resetRef.current?.()
            }}
          >
            Reset
          </MtButton>
        </>
      )}
    </div>
  )
}

export { MtFileButtonReset }
