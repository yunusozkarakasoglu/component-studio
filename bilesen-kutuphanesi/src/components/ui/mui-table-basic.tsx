/**
 * MuiTableBasic
 * @id 2017
 * @category Veri Gösterimi
 * @subcategory MuiTable
 * @source mui
 */
import { MuiTable } from "@/components/ui/mui-table"
import { MuiChip } from "@/components/ui/mui-chip"

function MuiTableBasic() {
  return (
    <MuiTable
      striped
      columns={[
        { key: "urun", label: "Ürün" },
        { key: "fiyat", label: "Fiyat", align: "right" },
        { key: "durum", label: "Durum" },
      ]}
      rows={[
        { urun: "Kahve Makinesi", fiyat: "₺1.250", durum: <MuiChip label="Stokta" color="success" size="small" /> },
        { urun: "Bluetooth Kulaklık", fiyat: "₺480", durum: <MuiChip label="Stokta" color="success" size="small" /> },
        { urun: "Akıllı Saat", fiyat: "₺2.100", durum: <MuiChip label="Tükendi" color="error" size="small" /> },
        { urun: "USB-C Kablosu", fiyat: "₺90", durum: <MuiChip label="Stokta" color="success" size="small" /> },
      ]}
    />
  )
}

export { MuiTableBasic }
