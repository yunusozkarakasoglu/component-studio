/**
 * AlertDialogCustomAnimations
 * Custom Animations örneği — animasyonlu dialog (saf React).
 * tw-animate yok; basit CSS transition ile giriş animasyonu.
 * @id 132
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ArrowUpFromLine, Sparkles } from "@/components/ui/icons"

const animations = [
  {
    name: "Kinematic Scale",
    icon: <Sparkles className="size-5" />,
    description: "Physics-based elastic scaling. Ideal for Alert Dialogs.",
    dialogClass: "data-[entering]:animate-in data-[entering]:zoom-in-95",
  },
  {
    name: "Fluid Slide",
    icon: <ArrowUpFromLine className="size-5" />,
    description: "Simulates movement through a medium. Perfect for Bottom Sheets.",
    dialogClass: "data-[entering]:animate-in data-[entering]:slide-in-from-bottom-4",
  },
]

function AlertDialogCustomAnimations() {
  return (
    <div className="flex flex-wrap gap-4">
      {animations.map((anim) => (
        <AlertDialog key={anim.name}>
          <Button variant="secondary">{anim.name}</Button>
          <AlertDialogBackdrop>
            <AlertDialogContainer>
              <AlertDialogDialog className={`sm:max-w-[400px] ${anim.dialogClass}`}>
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status="accent">{anim.icon}</AlertDialogIcon>
                      <AlertDialogHeading>{anim.name} Animation</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>{anim.description}</p></AlertDialogBody>
                    <AlertDialogFooter>
                      <Button variant="tertiary" onPress={close}>Close</Button>
                      <Button onPress={close}>Try Again</Button>
                    </AlertDialogFooter>
                  </>
                )}
              </AlertDialogDialog>
            </AlertDialogContainer>
          </AlertDialogBackdrop>
        </AlertDialog>
      ))}
    </div>
  )
}

export { AlertDialogCustomAnimations }
