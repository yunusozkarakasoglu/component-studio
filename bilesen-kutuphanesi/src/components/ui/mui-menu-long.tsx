/**
 * MuiMenuLong
 * @id 2048
 * @category Navigasyon
 * @subcategory MuiMenu
 * @source mui
 */
import { MuiMenu } from "@/components/ui/mui-menu"
import { MuiButton } from "@/components/ui/mui-button"

const LONG_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  label: `Seçenek ${i + 1}`,
  onClick: () => alert(`Seçenek ${i + 1}`),
}))

function MuiMenuLong() {
  return (
    <MuiMenu
      trigger={<MuiButton variant="outlined">Uzun Liste ▾</MuiButton>}
      items={LONG_ITEMS}
    />
  )
}

export { MuiMenuLong }
