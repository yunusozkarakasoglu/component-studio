/**
 * AlertDialogDismissBehavior
 * Dismiss Behavior örneği — isDismissable + isKeyboardDismissDisabled (saf React).
 * @id 130
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Info } from "@/components/ui/icons"

function AlertDialogDismissBehavior() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold">isDismissable = false</h3>
        <p className="mb-2 text-sm text-muted-foreground">Clicking the backdrop won't close this dialog.</p>
        <AlertDialog>
          <Button variant="secondary">Open Alert Dialog</Button>
          <AlertDialogBackdrop isDismissable={false}>
            <AlertDialogContainer>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status="danger"><Info className="size-5" /></AlertDialogIcon>
                      <AlertDialogHeading>isDismissable = false</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>Clicking outside won't close this dialog. Use the action buttons.</p></AlertDialogBody>
                    <AlertDialogFooter>
                      <Button variant="tertiary" onPress={close}>Cancel</Button>
                      <Button onPress={close}>Confirm</Button>
                    </AlertDialogFooter>
                  </>
                )}
              </AlertDialogDialog>
            </AlertDialogContainer>
          </AlertDialogBackdrop>
        </AlertDialog>
      </div>
      <div>
        <h3 className="text-lg font-semibold">isKeyboardDismissDisabled = true</h3>
        <p className="mb-2 text-sm text-muted-foreground">ESC key is disabled.</p>
        <AlertDialog>
          <Button variant="secondary">Open Alert Dialog</Button>
          <AlertDialogBackdrop isKeyboardDismissDisabled>
            <AlertDialogContainer>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status="accent"><Info className="size-5" /></AlertDialogIcon>
                      <AlertDialogHeading>ESC disabled</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>Press ESC — nothing happens.</p></AlertDialogBody>
                    <AlertDialogFooter>
                      <Button variant="tertiary" onPress={close}>Cancel</Button>
                      <Button onPress={close}>Confirm</Button>
                    </AlertDialogFooter>
                  </>
                )}
              </AlertDialogDialog>
            </AlertDialogContainer>
          </AlertDialogBackdrop>
        </AlertDialog>
      </div>
    </div>
  )
}

export { AlertDialogDismissBehavior }
