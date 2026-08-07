/**
 * MtNotificationVariants
 * Varyantlar (saf React, Mantine kaynaklı).
 * @id 1385
 * @category Overlay
 * @subcategory MtNotification
 * @source mantine
 */
import { Check, Info, X } from "@/components/ui/icons"
import { MtNotification } from "@/components/ui/mt-notification"

function MtNotificationVariants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <MtNotification title="Success" icon={<Check className="size-3.5" />} color="#40c057">
        Data has been saved successfully.
      </MtNotification>
      <MtNotification title="Error" icon={<X className="size-3.5" />} color="#fa5252">
        Something went wrong. Please try again.
      </MtNotification>
      <MtNotification title="Info" icon={<Info className="size-3.5" />} color="#228be6">
        A new update is available.
      </MtNotification>
    </div>
  )
}

export { MtNotificationVariants }
