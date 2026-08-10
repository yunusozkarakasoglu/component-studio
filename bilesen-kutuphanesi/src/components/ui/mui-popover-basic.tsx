/**
 * MuiPopoverBasic
 * @id 2029
 * @category Overlay
 * @subcategory MuiPopover
 * @source mui
 */
import { MuiPopover } from "@/components/ui/mui-popover"
import { MuiButton } from "@/components/ui/mui-button"

function MuiPopoverBasic() {
  return (
    <MuiPopover
      trigger={<MuiButton variant="outlined">Popover Aç</MuiButton>}
      placement="bottom"
    >
      <p className="font-medium text-gray-900">Bu bir popover</p>
      <p className="mt-1 text-xs text-gray-500">Tetikleyiciye bağlı açılır içerik. Dışarıya tıklayınca kapanmaz, tekrar tıklayınca kapanır.</p>
    </MuiPopover>
  )
}

export { MuiPopoverBasic }
