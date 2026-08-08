/**
 * MtThemeIconAutoContrast
 * Otomatik kontrast (saf React, Mantine kaynaklı).
 * @id 1492
 * @category Veri Gösterimi
 * @subcategory MtThemeIcon
 * @source mantine
 */
import { Bell } from "@/components/ui/icons"
import { MtThemeIcon } from "@/components/ui/mt-theme-icon"

function MtThemeIconAutoContrast() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-3">
        <MtThemeIcon color="blue"><Bell className="size-4" /></MtThemeIcon>
        <MtThemeIcon color="cyan"><Bell className="size-4" /></MtThemeIcon>
        <MtThemeIcon color="yellow"><Bell className="size-4" /></MtThemeIcon>
        <MtThemeIcon color="lime"><Bell className="size-4" /></MtThemeIcon>
      </div>
      <p className="text-xs text-muted-foreground">Filled varyantı her renkte otomatik beyaz/yazı kontrastı sağlar.</p>
    </div>
  )
}

export { MtThemeIconAutoContrast }
