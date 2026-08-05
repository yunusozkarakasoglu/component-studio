/**
 * ToastCustomQueue
 * Özel kuyruk örneği — 3 ayrı kuyruk (saf React).
 * @id 468
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, ToastQueue } from "@/components/ui/toast"

function ToastCustomQueue() {
  const notificationQueue = new ToastQueue({ maxVisibleToasts: 2 })
  const errorQueue = new ToastQueue({ maxVisibleToasts: 3 })
  const successQueue = new ToastQueue({ maxVisibleToasts: 1 })

  return (
    <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-6">
      <ToastProvider placement="bottom" queue={notificationQueue} />
      <ToastProvider placement="bottom start" queue={errorQueue} />
      <ToastProvider placement="bottom end" queue={successQueue} />
      <div className="flex flex-wrap justify-center gap-2">
        <Button size="sm" variant="secondary" onPress={() => notificationQueue.add({ description: "You have a new message", title: "New notification" })}>
          Add notification (max 2)
        </Button>
        <Button size="sm" variant="danger-soft" onPress={() => errorQueue.add({ description: "Failed to save changes", title: "Error occurred", variant: "danger" })}>
          Add error (max 3)
        </Button>
        <Button size="sm" variant="secondary" onPress={() => successQueue.add({ description: `Operation ${Date.now()}`, title: "Success!", variant: "success" })}>
          Add success (max 1)
        </Button>
      </div>
    </div>
  )
}

export { ToastCustomQueue }
