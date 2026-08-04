/**
 * AlertDialogCustomStyles
 * HeroUI Tailwind CSS örneği — özelleştirilmiş dialog (saf React).
 * @id 134
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function AlertDialogCustomStyles() {
  return (
    <AlertDialog>
      <Button variant="secondary">Sign out</Button>
      <AlertDialogBackdrop className="bg-black/50" variant="blur">
        <AlertDialogContainer>
          <AlertDialogDialog className="relative overflow-hidden border border-border/80 bg-background shadow-2xl sm:max-w-[400px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/5 to-transparent" />
            <AlertDialogHeader className="relative">
              <AlertDialogIcon status="accent" />
              <AlertDialogHeading>Sign out of your account?</AlertDialogHeading>
            </AlertDialogHeader>
            <AlertDialogBody className="relative">
              <p>You will be signed out on this device. Unsaved work may be lost.</p>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button variant="tertiary" onPress={() => {}}>Stay signed in</Button>
              <Button onPress={() => {}}>Sign out</Button>
            </AlertDialogFooter>
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  )
}

export { AlertDialogCustomStyles }
