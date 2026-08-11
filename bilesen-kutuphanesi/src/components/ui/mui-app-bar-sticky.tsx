/**
 * MuiAppBarSticky
 * @id 2070
 * @category Navigasyon
 * @subcategory MuiAppBar
 * @source mui
 */
import { MuiAppBar } from "@/components/ui/mui-app-bar"
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { Menu } from "@/components/ui/icons"
import { CircleUser } from "@/components/ui/icons"

function MuiAppBarSticky() {
  return (
    <div className="w-full space-y-2">
      <MuiAppBar
        title="Sabit Üst Çubuk"
        position="sticky"
        actions={
          <>
            <MuiIconButton aria-label="Menü" className="text-white hover:bg-white/20"><Menu className="size-5" /></MuiIconButton>
            <MuiIconButton aria-label="Profil" className="text-white hover:bg-white/20"><CircleUser className="size-5" /></MuiIconButton>
          </>
        }
      />
      <p className="text-xs text-gray-500">sticky — kaydırdıkça üstte kalır.</p>
    </div>
  )
}

export { MuiAppBarSticky }
