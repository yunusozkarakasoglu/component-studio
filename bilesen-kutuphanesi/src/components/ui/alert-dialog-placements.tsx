/**
 * AlertDialogPlacements
 * Placements örneği — auto/top/center/bottom (saf React).
 * @id 123
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const placements = ["auto", "top", "center", "bottom"] as const

function AlertDialogPlacements() {
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <AlertDialog key={placement}>
          <Button variant="secondary">{placement.charAt(0).toUpperCase() + placement.slice(1)}</Button>
          <AlertDialogBackdrop>
            <AlertDialogContainer placement={placement}>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status="accent" />
                      <AlertDialogHeading>{placement} Position</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      <p>This dialog is positioned at the {placement} of the viewport.</p>
                    </AlertDialogBody>
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
      ))}
    </div>
  )
}

export { AlertDialogPlacements }
