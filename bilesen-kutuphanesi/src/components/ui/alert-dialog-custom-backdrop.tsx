/**
 * AlertDialogCustomBackdrop
 * Custom Backdrop örneği — gradyan arka plan (saf React).
 * @id 129
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "@/components/ui/icons"

function AlertDialogCustomBackdrop() {
  return (
    <AlertDialog>
      <Button variant="danger">Delete Account</Button>
      <AlertDialogBackdrop
        className="bg-gradient-to-t from-red-950/90 via-red-950/50 to-transparent"
        variant="blur"
      >
        <AlertDialogContainer>
          <AlertDialogDialog className="sm:max-w-[420px]">
            {(close) => (
              <>
                <AlertDialogCloseTrigger />
                <AlertDialogHeader className="items-center text-center">
                  <AlertDialogIcon status="danger">
                    <AlertTriangle className="size-5" />
                  </AlertDialogIcon>
                  <AlertDialogHeading>Permanently delete your account?</AlertDialogHeading>
                </AlertDialogHeader>
                <AlertDialogBody>
                  <p>This action cannot be undone. All your data will be permanently removed.</p>
                </AlertDialogBody>
                <AlertDialogFooter className="flex-col-reverse">
                  <Button className="w-full" onPress={close}>Keep Account</Button>
                  <Button className="w-full" variant="danger" onPress={close}>Delete Forever</Button>
                </AlertDialogFooter>
              </>
            )}
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  )
}

export { AlertDialogCustomBackdrop }
