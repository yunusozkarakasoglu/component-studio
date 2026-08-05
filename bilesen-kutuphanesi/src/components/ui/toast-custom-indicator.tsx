/**
 * ToastCustomIndicator
 * Özel gösterge örneği (saf React).
 * @id 465
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { Star } from "@/components/ui/icons"
import { ToastProvider, toast } from "@/components/ui/toast"

function ToastCustomIndicator() {
  return (
    <div className="flex h-full w-full max-w-xl flex-col items-center justify-center">
      <ToastProvider />
      <Button
        size="sm"
        variant="secondary"
        onPress={() =>
          toast("Custom icon indicator", {
            indicator: <Star className="size-4" />,
          })
        }
      >
        Custom indicator
      </Button>
    </div>
  )
}

export { ToastCustomIndicator }
