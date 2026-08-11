/**
 * MuiMenuDense
 * @id 2047
 * @category Navigasyon
 * @subcategory MuiMenu
 * @source mui
 */
import { MuiMenu } from "@/components/ui/mui-menu"
import { MuiButton } from "@/components/ui/mui-button"

function MuiMenuDense() {
  return (
    <MuiMenu
      trigger={<MuiButton variant="outlined">Sıkı Menü ▾</MuiButton>}
      items={[
        { label: "Kısayol 1", onClick: () => alert("1") },
        { label: "Kısayol 2", onClick: () => alert("2") },
        { label: "Kısayol 3", onClick: () => alert("3") },
        { label: "Kısayol 4", onClick: () => alert("4") },
      ]}
    />
  )
}

export { MuiMenuDense }
