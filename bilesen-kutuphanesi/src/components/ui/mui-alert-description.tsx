/**
 * MuiAlertDescription
 * @id 1921
 * @category Alert & Dialog
 * @subcategory MuiAlert
 * @source mui
 */
import { MuiAlert } from "@/components/ui/mui-alert"

function MuiAlertDescription() {
  return (
    <MuiAlert severity="error" className="w-full">
      <p className="font-semibold">Bu kritik bir hata</p>
      <p className="mt-1 text-xs opacity-80">
        İşlem başarısız oldu. Lütfen bağlantınızı kontrol edin ve tekrar deneyin. Detaylı açıklama
        bu alanda gösterilir.
      </p>
    </MuiAlert>
  )
}

export { MuiAlertDescription }
