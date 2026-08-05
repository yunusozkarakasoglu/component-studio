/**
 * ToastCustomToast
 * Özel toast render örneği (saf React).
 * @id 470
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, ToastQueue } from "@/components/ui/toast"

function ToastCustomToast() {
  const queue = new ToastQueue()

  return (
    <div className="flex h-full w-full max-w-xl flex-col items-center justify-center">
      <ToastProvider placement="bottom" queue={queue} />
      <Button
        size="sm"
        variant="secondary"
        onPress={() => {
          queue.add({ description: "This uses a custom render function", title: "Custom layout toast" })
        }}
      >
        Custom toast
      </Button>
    </div>
  )
}

export { ToastCustomToast }
