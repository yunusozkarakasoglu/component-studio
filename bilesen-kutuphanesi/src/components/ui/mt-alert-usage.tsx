/**
 * MtAlertUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1563
 * @category Alert & Dialog
 * @subcategory MtAlert
 * @source mantine
 */
import { CircleAlert } from "@/components/ui/icons"
import { MtAlert } from "@/components/ui/mt-alert"

function MtAlertUsage() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <MtAlert title="Bummer! Something went wrong" color="red" icon={<CircleAlert className="size-5" />} withCloseButton>
        Authentication failed, you may have entered wrong credentials.
      </MtAlert>
      <MtAlert title="Update completed" color="green" icon={<CircleAlert className="size-5" />}>
        All updates were applied successfully.
      </MtAlert>
    </div>
  )
}

export { MtAlertUsage }
