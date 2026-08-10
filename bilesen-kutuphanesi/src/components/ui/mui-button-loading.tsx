/**
 * MuiButtonLoading
 * @id 1902
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { useState } from "react"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonLoading() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    window.setTimeout(() => setLoading(false), 2000)
  }
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButton variant="contained" loading={loading} onClick={handleClick}>
        {loading ? "Yükleniyor…" : "Yükle"}
      </MuiButton>
      <MuiButton variant="outlined" onClick={handleClick}>Diğer</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonLoading }
