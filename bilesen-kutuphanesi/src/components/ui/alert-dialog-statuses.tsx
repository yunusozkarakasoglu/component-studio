/**
 * AlertDialogStatuses
 * Statuses örneği — 4 durum (saf React).
 * @id 122
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const examples = [
  { status: "accent", trigger: "Sign Out", header: "Sign out of your account?", body: "You'll need to sign in again to access your account.", cancel: "Stay Signed In", confirm: "Sign Out" },
  { status: "success", trigger: "Complete Task", header: "Complete this task?", body: "This will mark the task as complete and notify all team members.", cancel: "Not Yet", confirm: "Mark Complete" },
  { status: "warning", trigger: "Discard Changes", header: "Discard unsaved changes?", body: "You have unsaved changes that will be permanently lost.", cancel: "Keep Editing", confirm: "Discard" },
  { status: "danger", trigger: "Delete Account", header: "Delete your account?", body: "This will permanently delete your account and remove all your data.", cancel: "Cancel", confirm: "Delete Account" },
] as const

function AlertDialogStatuses() {
  return (
    <div className="flex flex-wrap gap-4">
      {examples.map((ex) => (
        <AlertDialog key={ex.status}>
          <Button>{ex.trigger}</Button>
          <AlertDialogBackdrop>
            <AlertDialogContainer>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status={ex.status} />
                      <AlertDialogHeading>{ex.header}</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>{ex.body}</p></AlertDialogBody>
                    <AlertDialogFooter>
                      <Button variant="tertiary" onPress={close}>{ex.cancel}</Button>
                      <Button variant={ex.status === "danger" ? "danger" : "primary"} onPress={close}>{ex.confirm}</Button>
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

export { AlertDialogStatuses }
