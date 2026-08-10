/**
 * MuiDividerList
 * @id 1886
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"
import { Check } from "@/components/ui/icons"

function MuiDividerList() {
  return (
    <div className="w-64 rounded-lg border border-gray-200 bg-white p-2">
      <ul className="divide-y divide-gray-200">
        <li className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
          <span className="flex size-5 items-center justify-center rounded-full bg-green-100"><Check className="size-3" /></span>
          İnbox
        </li>
        <li className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
          <span className="flex size-5 items-center justify-center rounded-full bg-green-100"><Check className="size-3" /></span>
          Drafts
        </li>
        <li className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
          <span className="flex size-5 items-center justify-center rounded-full bg-green-100"><Check className="size-3" /></span>
          Trash
        </li>
      </ul>
      <MuiDivider />
      <p className="px-3 py-2 text-xs text-gray-500">Liste bitti</p>
    </div>
  )
}

export { MuiDividerList }
