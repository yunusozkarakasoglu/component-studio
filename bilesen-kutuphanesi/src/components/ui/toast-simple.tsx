/**
 * ToastSimple
 * Basit toast'lar örneği — 5 varyant (saf React).
 * @id 463
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, toast } from "@/components/ui/toast"

function ToastSimple() {
  return (
    <div className="flex h-full w-full max-w-xl flex-col items-center justify-center">
      <ToastProvider />
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Button size="sm" variant="secondary" onPress={() => toast("Simple message")}>Default</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.success("Operation completed")}>Success</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.info("New update available")}>Info</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.warning("Please check your settings")}>Warning</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.danger("Something went wrong")}>Error</Button>
      </div>
    </div>
  )
}

export { ToastSimple }
