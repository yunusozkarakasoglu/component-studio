/**
 * MtThemeIconGradient
 * Gradyan tema ikonu (saf React, Mantine kaynaklı).
 * @id 1491
 * @category Veri Gösterimi
 * @subcategory MtThemeIcon
 * @source mantine
 */
import { Palette } from "@/components/ui/icons"
import { MtThemeIcon } from "@/components/ui/mt-theme-icon"

function MtThemeIconGradient() {
  return (
    <div className="flex items-center gap-3">
      <MtThemeIcon gradient={{ from: "blue", to: "cyan" }} size="lg"><Palette className="size-5" /></MtThemeIcon>
      <MtThemeIcon gradient={{ from: "grape", to: "pink", deg: 135 }} size="lg"><Palette className="size-5" /></MtThemeIcon>
      <MtThemeIcon gradient={{ from: "orange", to: "red" }} size="lg"><Palette className="size-5" /></MtThemeIcon>
    </div>
  )
}

export { MtThemeIconGradient }
