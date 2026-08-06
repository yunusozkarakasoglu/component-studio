/**
 * ShadcnToastPromise
 * Asenkron işlem bildirimi — yükleniyor → başarı (saf React, shadcn kaynaklı).
 * Not: kaynakta toast.promise kullanılır; Heroui API'sinde yok — basit
 * zamanlayıcı ile aynı davranış uyarlandı.
 * @id 820
 * @category Overlay
 * @subcategory ShadcnToast
 * @source shadcn
 */
import { toast, ToastProvider } from "@/components/ui/toast"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnToastPromise() {
  function showToast() {
    const id = toast("Creating event…", { variant: "info" })
    window.setTimeout(() => {
      toast.close(id)
      toast("Event created.", { variant: "success" })
    }, 2000)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <ToastProvider />
      <ShadcnButton variant="outline" onClick={showToast}>
        Create Event
      </ShadcnButton>
    </div>
  )
}

export { ShadcnToastPromise }
