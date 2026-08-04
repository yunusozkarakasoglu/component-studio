/**
 * AlertDialogBackdropVariants
 * HeroUI Backdrop Variants örneği — opaque/blur/transparent (saf React).
 * @id 128
 * @category Alert & Dialog
 */
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const variants = ["opaque", "blur", "transparent"] as const

function AlertDialogBackdropVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <AlertDialog key={variant}>
          <Button variant="secondary">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
          <AlertDialogBackdrop variant={variant}>
            <AlertDialogContainer>
              <AlertDialogDialog className="sm:max-w-[400px]">
                {(close) => (
                  <>
                    <AlertDialogCloseTrigger />
                    <AlertDialogHeader>
                      <AlertDialogIcon status="accent" />
                      <AlertDialogHeading>Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}</AlertDialogHeading>
                    </AlertDialogHeader>
                    <AlertDialogBody><p>Backdrop variant demonstration.</p></AlertDialogBody>
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

export { AlertDialogBackdropVariants }
