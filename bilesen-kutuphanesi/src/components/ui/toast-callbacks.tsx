/**
 * ToastCallbacks
 * Geri çağırma örneği — onClose + timeout (saf React).
 * @id 467
 * @category Overlay
 * @subcategory Toast
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ToastProvider, toast } from "@/components/ui/toast"

function ToastCallbacks() {
  const [history, setHistory] = useState<Array<{ message: string; time: string }>>([])

  const addToHistory = (message: string) => {
    const time = new Date().toLocaleTimeString()
    setHistory((prev) => [{ message, time }, ...prev].slice(0, 5))
  }

  return (
    <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-6">
      <ToastProvider />
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Button size="sm" variant="secondary" onPress={() => toast("File saved", { onClose: () => addToHistory("File saved (closed after 3 seconds)"), timeout: 3000 })}>
          Custom timeout (3s)
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.success("Event created", { onClose: () => addToHistory("Event created (closed after default timeout)") })}>
          With onClose callback
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast("Important notification", { description: "This toast will stay until dismissed", onClose: () => addToHistory("Important notification (manually closed)"), timeout: 0 })}>
          Persistent toast
        </Button>
      </div>

      <div className="w-full space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">Closed History</h3>
          {history.length > 0 && (
            <Button className="h-6 text-xs" size="sm" variant="tertiary" onPress={() => setHistory([])}>
              Clear
            </Button>
          )}
        </div>
        <div className="min-h-[120px] space-y-2 rounded-lg border border-border bg-muted/30 p-4">
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground">No toasts closed yet. Try closing one above!</p>
          ) : (
            history.map((item, index) => (
              <div key={`${item.time}-${index}`} className="flex items-start justify-between gap-3 rounded-md border border-border bg-background px-3 py-2 text-sm">
                <div className="flex-1">
                  <span className="font-medium text-foreground">{item.message}</span>
                  <span className="ms-2 text-xs text-muted-foreground">({item.time})</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export { ToastCallbacks }
