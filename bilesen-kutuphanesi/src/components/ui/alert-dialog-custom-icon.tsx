/**
 * AlertDialogCustomIcon
 * Custom Icon örneği — LockOpen (GravityUI→lucide eşleştirmesi, saf React).
 * @id 126
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LockOpen } from "@/components/ui/icons"

function AlertDialogCustomIcon() {
  return (
    <AlertDialog>
      <Button variant="secondary">Reset Password</Button>
      <AlertDialogBackdrop>
        <AlertDialogContainer>
          <AlertDialogDialog className="sm:max-w-[400px]">
            {(close) => (
              <>
                <AlertDialogCloseTrigger />
                <AlertDialogHeader>
                  <AlertDialogIcon status="warning">
                    <LockOpen className="size-5" />
                  </AlertDialogIcon>
                  <AlertDialogHeading>Reset your password?</AlertDialogHeading>
                </AlertDialogHeader>
                <AlertDialogBody>
                  <p>We'll send a password reset link to your email address.</p>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button variant="tertiary" onPress={close}>Cancel</Button>
                  <Button onPress={close}>Send Reset Link</Button>
                </AlertDialogFooter>
              </>
            )}
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  )
}

export { AlertDialogCustomIcon }
