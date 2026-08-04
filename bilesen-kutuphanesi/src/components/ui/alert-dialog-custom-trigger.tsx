/**
 * AlertDialogCustomTrigger
 * HeroUI Custom Trigger örneği — kart tarzı tetikleyici (saf React).
 * @id 127
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "@/components/ui/icons"

function AlertDialogCustomTrigger() {
  return (
    <AlertDialog>
      <div className="flex cursor-pointer select-none items-center gap-3 rounded-2xl bg-muted/40 p-4 hover:bg-muted/70">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700">
          <Trash2 className="size-6" />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-sm font-semibold">Delete Item</p>
          <p className="text-xs text-muted-foreground">Permanently remove this item</p>
        </div>
      </div>
      <AlertDialogBackdrop>
        <AlertDialogContainer>
          <AlertDialogDialog className="sm:max-w-[400px]">
            {(close) => (
              <>
                <AlertDialogCloseTrigger />
                <AlertDialogHeader>
                  <AlertDialogIcon status="danger">
                    <Trash2 className="size-5" />
                  </AlertDialogIcon>
                  <AlertDialogHeading>Delete this item?</AlertDialogHeading>
                </AlertDialogHeader>
                <AlertDialogBody><p>Use a custom trigger element beyond standard buttons.</p></AlertDialogBody>
                <AlertDialogFooter>
                  <Button variant="tertiary" onPress={close}>Cancel</Button>
                  <Button variant="danger" onPress={close}>Delete Item</Button>
                </AlertDialogFooter>
              </>
            )}
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  )
}

export { AlertDialogCustomTrigger }
