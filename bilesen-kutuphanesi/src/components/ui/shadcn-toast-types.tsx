/**
 * ShadcnToastTypes
 * Varyantlar — default, success, info, warning, error (saf React, shadcn kaynaklı).
 * Toast: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 819
 * @category Overlay
 * @subcategory ShadcnToast
 * @source shadcn
 */
import { toast, ToastProvider } from "@/components/ui/toast"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnToastTypes() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ToastProvider />
      <div className="flex flex-wrap gap-2">
        <ShadcnButton variant="outline" onClick={() => toast("Event has been created.", { description: "Default toast" })}>
          Default
        </ShadcnButton>
        <ShadcnButton variant="outline" onClick={() => toast("Event has been created.", { variant: "success", description: "Success toast" })}>
          Success
        </ShadcnButton>
        <ShadcnButton variant="outline" onClick={() => toast("Arrive 10 minutes before the event.", { variant: "info", description: "Info toast" })}>
          Info
        </ShadcnButton>
        <ShadcnButton variant="outline" onClick={() => toast("The event cannot start before 8:00 AM.", { variant: "warning", description: "Warning toast" })}>
          Warning
        </ShadcnButton>
        <ShadcnButton variant="outline" onClick={() => toast("The event could not be created.", { variant: "error", description: "Error toast" })}>
          Error
        </ShadcnButton>
      </div>
    </div>
  )
}

export { ShadcnToastTypes }
