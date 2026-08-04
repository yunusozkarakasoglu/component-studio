/**
 * AlertDialogSizes
 * HeroUI Sizes örneği — xs/sm/md/lg/cover (saf React).
 * @id 124
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Rocket } from "@/components/ui/icons"

const sizes = ["xs", "sm", "md", "lg", "cover"] as const

function AlertDialogSizes() {
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <AlertDialog key={size}>
          <Button variant="secondary">{size.charAt(0).toUpperCase() + size.slice(1)}</Button>
          <AlertDialogBackdrop>
            <AlertDialogContainer size={size}>
              <AlertDialogDialog>
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon className="bg-muted text-foreground">
                        <Rocket className="size-5" />
                      </AlertDialogIcon>
                      <AlertDialogHeading>Size: {size.charAt(0).toUpperCase() + size.slice(1)}</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      <p>{size === "cover" ? "Spans the full screen with margins." : "On mobile, all sizes adapt to near full-width."}</p>
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

export { AlertDialogSizes }
