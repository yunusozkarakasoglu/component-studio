/**
 * ToastVariants
 * Varyant örnekleri — 5 buton (saf React).
 * @id 464
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { HardDrive, Users } from "@/components/ui/icons"
import { ToastProvider, toast } from "@/components/ui/toast"

const noop = () => {}

function ToastVariants() {
  return (
    <div className="flex h-full w-full max-w-xl flex-col items-center justify-center">
      <ToastProvider />
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Button
          size="sm"
          variant="tertiary"
          onPress={() => {
            toast("You have been invited to join a team", {
              actionProps: { children: "Dismiss", onPress: () => toast.clear() },
              description: "Bob sent you an invitation to join HeroUI team",
              indicator: <Users className="size-4" />,
            })
          }}
        >
          Default toast
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.info("You have 2 credits left", { actionProps: { children: "Upgrade", onPress: noop }, description: "Get a paid plan for more credits" })}>
          Accent toast
        </Button>
        <Button size="sm" variant="tertiary" onPress={() => toast.success("You have upgraded your plan", { actionProps: { children: "Billing", onPress: noop }, description: "You can continue using HeroUI Chat" })}>
          Success toast
        </Button>
        <Button size="sm" variant="tertiary" onPress={() => toast.warning("You have no credits left", { actionProps: { children: "Upgrade", onPress: noop }, description: "Upgrade to a paid plan to continue" })}>
          Warning toast
        </Button>
        <Button size="sm" variant="danger-soft" onPress={() => toast.danger("Storage is full", { actionProps: { children: "Remove", onPress: noop }, description: "Remove files to release space", indicator: <HardDrive className="size-4" /> })}>
          Danger toast
        </Button>
      </div>
    </div>
  )
}

export { ToastVariants }
