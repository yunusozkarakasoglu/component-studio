/**
 * ToastPlacements
 * Konum örneği — 6 konum (saf React).
 * @id 469
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, ToastQueue, type ToastPlacement } from "@/components/ui/toast"

const placements: ToastPlacement[] = ["top start", "top", "top end", "bottom start", "bottom", "bottom end"]

function ToastPlacements() {
  const queues = placements.map(() => new ToastQueue({ maxVisibleToasts: 3 }))

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      {placements.map((p, i) => (
        <ToastProvider key={p} placement={p} queue={queues[i]} />
      ))}
      <div className="flex max-w-xs flex-wrap justify-center gap-2">
        {placements.map((p, i) => (
          <Button key={p} size="sm" variant="secondary" onPress={() => queues[i].add({ description: "Event has been created", title: "Event created" })}>
            {p}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { ToastPlacements }
