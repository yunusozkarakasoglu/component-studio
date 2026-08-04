/**
 * AlertDialogDefault
 * HeroUI Usage örneği — temel alert dialog (saf React).
 * @id 121
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function AlertDialogDefault() {
  return (
    <AlertDialog>
      <Button variant="danger">Delete Project</Button>
      <AlertDialogBackdrop>
        <AlertDialogContainer>
          <AlertDialogDialog className="sm:max-w-[400px]">
            {(close) => (
              <>
                <AlertDialogCloseTrigger />
                <AlertDialogHeader>
                  <AlertDialogIcon status="danger" />
                  <AlertDialogHeading>Delete project permanently?</AlertDialogHeading>
                </AlertDialogHeader>
                <AlertDialogBody>
                  <p>This will permanently delete <strong>My Awesome Project</strong> and all of its data. This action cannot be undone.</p>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button variant="tertiary" onPress={close}>Cancel</Button>
                  <Button variant="danger" onPress={close}>Delete Project</Button>
                </AlertDialogFooter>
              </>
            )}
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  )
}

export { AlertDialogDefault }
