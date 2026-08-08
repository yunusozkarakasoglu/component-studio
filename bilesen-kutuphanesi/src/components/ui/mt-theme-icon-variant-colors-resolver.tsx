/**
 * MtThemeIconVariantColorsResolver
 * Varyant renk çözücü (saf React, Mantine kaynaklı).
 * @id 1493
 * @category Veri Gösterimi
 * @subcategory MtThemeIcon
 * @source mantine
 */
import { Cpu, Globe, Heart, Mail } from "@/components/ui/icons"
import { MtThemeIcon } from "@/components/ui/mt-theme-icon"

function MtThemeIconVariantColorsResolver() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <MtThemeIcon color="red"><Heart className="size-4" /></MtThemeIcon>
      <MtThemeIcon variant="light" color="pink"><Heart className="size-4" /></MtThemeIcon>
      <MtThemeIcon color="teal"><Mail className="size-4" /></MtThemeIcon>
      <MtThemeIcon variant="light" color="violet"><Cpu className="size-4" /></MtThemeIcon>
      <MtThemeIcon color="indigo"><Globe className="size-4" /></MtThemeIcon>
    </div>
  )
}

export { MtThemeIconVariantColorsResolver }
