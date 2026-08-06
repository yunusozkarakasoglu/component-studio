/**
 * ShadcnToastDemo
 * Temel örnek — etkinlik oluşturma bildirimi (saf React, shadcn kaynaklı).
 * Toast: kütüphanenin mevcut bileşeni (Heroui — saf React, API uyumlu).
 * @id 818
 * @category Overlay
 * @subcategory ShadcnToast
 * @source shadcn
 */
import { toast, ToastProvider } from "@/components/ui/toast"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnToastDemo() {
  function showToast() {
    const id = toast("Event created", {
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: { children: "Undo", onPress: () => toast.close(id) },
    })
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <ToastProvider />
      <ShadcnButton variant="outline" onClick={showToast}>
        Show Toast
      </ShadcnButton>
    </div>
  )
}

export { ShadcnToastDemo }
