/**
 * ToastCustomStyles
 * Özelleştirilmiş toast örneği (saf React).
 * @id 471
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, ToastQueue } from "@/components/ui/toast"

function ToastCustomStyles() {
  const queue = new ToastQueue()

  return (
    <div className="flex flex-col items-center gap-4">
      <ToastProvider placement="bottom" queue={queue} />
      <Button
        size="sm"
        variant="secondary"
        onPress={() => {
          queue.add({ description: "Draft synced", title: "Saved" })
        }}
      >
        Show toast
      </Button>
    </div>
  )
}

export { ToastCustomStyles }
