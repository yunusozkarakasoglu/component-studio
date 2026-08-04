/**
 * AlertDialogCloseMethods
 * HeroUI Close Methods örneği — render props close() (saf React).
 * @id 131
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function AlertDialogCloseMethods() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold">Using Dialog render props</h3>
        <p className="mb-2 text-sm text-muted-foreground">
          Access the close method from render props — add custom logic before closing.
        </p>
        <AlertDialog>
          <Button variant="secondary">Open Dialog</Button>
          <AlertDialogBackdrop>
            <AlertDialogContainer>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogHeader>
                      <AlertDialogIcon status="success" />
                      <AlertDialogHeading>Using render props</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>The buttons below use the close method from render props.</p></AlertDialogBody>
                    <AlertDialogFooter>
                      <Button variant="tertiary" onPress={() => close()}>Cancel</Button>
                      <Button onPress={() => close()}>Confirm</Button>
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

export { AlertDialogCloseMethods }
