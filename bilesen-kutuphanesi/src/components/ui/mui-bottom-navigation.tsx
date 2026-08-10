/**
 * MuiBottomNavigation
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Alt navigasyon — mobil tarzı sekmeler.
 *   <MuiBottomNavigation items={[{label, icon?}]} />
 * items · value/defaultValue · onChange · showLabels
 * @id 2028
 * @category Navigasyon
 * @subcategory MuiBottomNavigation
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiBottomNavigationItem {
  label: ReactNode
  icon?: ReactNode
}

interface MuiBottomNavigationProps {
  items?: MuiBottomNavigationItem[]
  value?: number
  defaultValue?: number
  onChange?: (index: number) => void
  showLabels?: boolean
  className?: string
}

function MuiBottomNavigation({
  items = [
    { label: "Ana Sayfa", icon: <span>🏠</span> },
    { label: "Arama", icon: <span>🔍</span> },
    { label: "Favoriler", icon: <span>⭐</span> },
  ],
  value,
  defaultValue = 0,
  onChange,
  showLabels = true,
  className,
}: MuiBottomNavigationProps) {
  const [internal, setInternal] = useState(defaultValue)
  const active = value ?? internal
  return (
    <nav aria-label="Alt navigasyon" className={cn("flex w-full max-w-md overflow-hidden rounded-t-lg border-t border-gray-200 bg-white", className)}>
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          onClick={() => {
            setInternal(i)
            if (onChange) onChange(i)
          }}
          className={cn(
            "flex flex-1 flex-col items-center gap-0.5 py-2 text-xs transition-colors",
            i === active ? "text-blue-600" : "text-gray-500 hover:text-gray-800"
          )}
        >
          {item.icon && <span className="text-lg leading-none">{item.icon}</span>}
          {showLabels && <span className="font-medium">{item.label}</span>}
        </button>
      ))}
    </nav>
  )
}

export { MuiBottomNavigation }
export type { MuiBottomNavigationProps, MuiBottomNavigationItem }
