/**
 * MuiBottomNavigationBasic
 * @id 2032
 * @category Navigasyon
 * @subcategory MuiBottomNavigation
 * @source mui
 */
import { useState } from "react"
import { MuiBottomNavigation } from "@/components/ui/mui-bottom-navigation"
import { Home, Search, Heart } from "@/components/ui/icons"

function MuiBottomNavigationBasic() {
  const [value, setValue] = useState(0)
  return (
    <div className="w-full max-w-md">
      <MuiBottomNavigation
        value={value}
        onChange={setValue}
        items={[
          { label: "Ana Sayfa", icon: <Home className="size-5" /> },
          { label: "Arama", icon: <Search className="size-5" /> },
          { label: "Favoriler", icon: <Heart className="size-5" /> },
        ]}
      />
      <p className="mt-2 text-center text-xs text-gray-500">Aktif: {value}</p>
    </div>
  )
}

export { MuiBottomNavigationBasic }
