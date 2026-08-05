/**
 * ToastDefault
 * Temel örnek — davet bildirimi (saf React).
 * @id 462
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { Users } from "@/components/ui/icons"
import { ToastProvider, toast } from "@/components/ui/toast"

function ToastDefault() {
  return (
    <div className="flex h-full w-full max-w-xl flex-col items-center justify-center">
      <ToastProvider />
      <Button
        size="sm"
        variant="secondary"
        onPress={() => {
          toast("You have been invited to join a team", {
            actionProps: { children: "Dismiss", onPress: () => toast.clear() },
            description: "Bob sent you an invitation to join HeroUI team",
            indicator: <Users className="size-4" />,
          })
        }}
      >
        Show toast
      </Button>
    </div>
  )
}

export { ToastDefault }
