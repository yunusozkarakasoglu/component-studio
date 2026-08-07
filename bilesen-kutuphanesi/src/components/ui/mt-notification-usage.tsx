/**
 * MtNotificationUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1384
 * @category Overlay
 * @subcategory MtNotification
 * @source mantine
 */
import { Check } from "@/components/ui/icons"
import { MtNotification } from "@/components/ui/mt-notification"

function MtNotificationUsage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <MtNotification title="Default notification" icon={<Check className="size-3.5" />} withCloseButton>
        You have successfully registered.
      </MtNotification>
    </div>
  )
}

export { MtNotificationUsage }
