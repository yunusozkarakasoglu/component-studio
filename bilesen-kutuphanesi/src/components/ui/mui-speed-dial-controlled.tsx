/**
 * MuiSpeedDialControlled
 * @id 2062
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiSpeedDial
 * @source mui
 */
import { MuiSpeedDial } from "@/components/ui/mui-speed-dial"
import { Copy, Save, Printer, Share2 } from "@/components/ui/icons"

function MuiSpeedDialControlled() {
  return (
    <div className="flex h-56 w-full items-start justify-end rounded-lg border border-gray-200 bg-gray-50 p-6">
      <MuiSpeedDial
        ariaLabel="yönlü"
        direction="up"
        actions={[
          { icon: <Copy className="size-4" />, name: "Kopyala" },
          { icon: <Save className="size-4" />, name: "Kaydet" },
          { icon: <Printer className="size-4" />, name: "Yazdır" },
          { icon: <Share2 className="size-4" />, name: "Paylaş" },
        ]}
      />
    </div>
  )
}

export { MuiSpeedDialControlled }
