/**
 * MtThemeIconUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1490
 * @category Veri Gösterimi
 * @subcategory MtThemeIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtThemeIcon } from "@/components/ui/mt-theme-icon"

function MtThemeIconUsage() {
  return (
    <div className="flex items-center gap-3">
      <MtThemeIcon color="blue"><Settings className="size-4" /></MtThemeIcon>
      <MtThemeIcon variant="light" color="blue"><Settings className="size-4" /></MtThemeIcon>
      <MtThemeIcon variant="outline" color="blue"><Settings className="size-4" /></MtThemeIcon>
      <MtThemeIcon variant="transparent" color="blue"><Settings className="size-4" /></MtThemeIcon>
    </div>
  )
}

export { MtThemeIconUsage }
