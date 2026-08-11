/**
 * MuiPopperBasic
 * @id 2076
 * @category Overlay
 * @subcategory MuiPopper
 * @source mui
 */
import { MuiPopper } from "@/components/ui/mui-popper"
import { MuiButton } from "@/components/ui/mui-button"

function MuiPopperBasic() {
  return (
    <MuiPopper
      trigger={<MuiButton variant="outlined">Popper Aç</MuiButton>}
      placement="bottom"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
        <p className="text-sm font-medium text-gray-900">Popper içeriği</p>
        <p className="mt-1 text-xs text-gray-500">Konumlanmış açılır panel.</p>
      </div>
    </MuiPopper>
  )
}

export { MuiPopperBasic }
