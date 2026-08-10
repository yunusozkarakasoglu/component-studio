/**
 * MuiToggleButtonMultiple
 * @id 1907
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { useState } from "react"
import { MuiToggleButtonGroup } from "@/components/ui/mui-toggle-button-group"
import { MuiToggleButton } from "@/components/ui/mui-toggle-button"
import { Bold, Italic, Underline } from "@/components/ui/icons"

function MuiToggleButtonMultiple() {
  const [formats, setFormats] = useState<string[]>(["bold", "italic"])
  return (
    <MuiToggleButtonGroup
      value={formats}
      onChange={(v) => {
        if (!v) return
        setFormats((prev) =>
          prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
        )
      }}
      ariaLabel="metin formatları"
    >
      <MuiToggleButton value="bold" aria-label="kalın"><Bold className="size-4" /></MuiToggleButton>
      <MuiToggleButton value="italic" aria-label="italik"><Italic className="size-4" /></MuiToggleButton>
      <MuiToggleButton value="underlined" aria-label="altı çizili"><Underline className="size-4" /></MuiToggleButton>
    </MuiToggleButtonGroup>
  )
}

export { MuiToggleButtonMultiple }
