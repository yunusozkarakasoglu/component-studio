/**
 * MuiAppBarBasic
 * @id 1999
 * @category Navigasyon
 * @subcategory MuiAppBar
 * @source mui
 */
import { MuiAppBar } from "@/components/ui/mui-app-bar"
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { Search, Bell } from "@/components/ui/icons"

function MuiAppBarBasic() {
  return (
    <MuiAppBar
      title="Uygulama Başlığı"
      actions={
        <>
          <MuiIconButton aria-label="Ara" className="text-white hover:bg-white/20"><Search className="size-5" /></MuiIconButton>
          <MuiIconButton aria-label="Bildirimler" className="text-white hover:bg-white/20"><Bell className="size-5" /></MuiIconButton>
        </>
      }
    />
  )
}

export { MuiAppBarBasic }
