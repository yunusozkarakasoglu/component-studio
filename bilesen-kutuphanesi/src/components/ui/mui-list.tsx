/**
 * MuiList
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Liste — öğe listesi, ikonlu/seçilebilir.
 *   <MuiList items={[{label, icon?, onClick?, secondary?}]} />
 * items · dense (sıkı) · divider (ayraçlı)
 * @id 2011
 * @category Veri Gösterimi
 * @subcategory MuiList
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiListItem {
  label: ReactNode
  icon?: ReactNode
  secondary?: ReactNode
  onClick?: () => void
  disabled?: boolean
}

interface MuiListProps {
  items?: MuiListItem[]
  dense?: boolean
  divider?: boolean
  className?: string
}

function MuiList({ items = [], dense = false, divider = true, className }: MuiListProps) {
  return (
    <ul className={cn("w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "flex items-center gap-3 px-3 text-gray-800",
            dense ? "py-1.5 text-sm" : "py-2.5 text-sm",
            divider && i < items.length - 1 && "border-b border-gray-100",
            item.onClick && !item.disabled && "cursor-pointer hover:bg-gray-50",
            item.disabled && "opacity-50"
          )}
          onClick={item.disabled ? undefined : item.onClick}
        >
          {item.icon && <span className="shrink-0 text-gray-500">{item.icon}</span>}
          <span className="flex-1">
            <span className="block font-medium">{item.label}</span>
            {item.secondary && <span className="block text-xs text-gray-500">{item.secondary}</span>}
          </span>
        </li>
      ))}
    </ul>
  )
}

export { MuiList }
export type { MuiListProps, MuiListItem }
