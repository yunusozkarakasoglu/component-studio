/**
 * MuiTextFieldLayout
 * @id 1934
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiGrid } from "@/components/ui/mui-grid"

function MuiTextFieldLayout() {
  return (
    <MuiGrid container spacing={3} className="w-full max-w-lg">
      <MuiGrid item xs={12}>
        <MuiTextField label="Tam genişlik" fullWidth defaultValue="Tüm satırı kaplar" />
      </MuiGrid>
      <MuiGrid item xs={6}>
        <MuiTextField label="Yarım — sol" defaultValue="Solda" />
      </MuiGrid>
      <MuiGrid item xs={6}>
        <MuiTextField label="Yarım — sağ" defaultValue="Sağda" />
      </MuiGrid>
      <MuiGrid item xs={4}>
        <MuiTextField label="Üçte bir" defaultValue="1/3" />
      </MuiGrid>
      <MuiGrid item xs={8}>
        <MuiTextField label="Üçte iki" defaultValue="2/3" />
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiTextFieldLayout }
