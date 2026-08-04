/**
 * AlertDialogCustomPortal
 * HeroUI Custom Portal örneği — özel kapsayıcı içinde render (saf React).
 * UNSTABLE_portalContainer → createPortal.
 * @id 133
 * @category Alert & Dialog
 */
import { useRef, useState } from "react"
import {
  AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function AlertDialogCustomPortal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Render dialogs inside a custom container instead of document.body.
      </p>
      <div
        ref={(node) => {
          containerRef.current = node
          setPortalContainer(node)
        }}
        className="relative flex h-[380px] items-center justify-center overflow-hidden rounded bg-muted/20"
        style={{ transform: "translate(0)" }}
      >
        {portalContainer && (
          <AlertDialog>
            <Button>Open Alert Dialog</Button>
            <AlertDialogBackdrop className="h-full" UNSTABLE_portalContainer={portalContainer}>
              <AlertDialogContainer className="h-full max-h-full">
                <AlertDialogDialog className="h-full max-h-full sm:max-w-md">
                  {(close) => (
                    <>
                      <AlertDialogCloseTrigger />
                      <AlertDialogHeader>
                        <AlertDialogIcon status="accent" />
                        <AlertDialogHeading>Custom Portal</AlertDialogHeading>
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        <p>This dialog renders inside a custom container via createPortal.</p>
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
        )}
      </div>
    </div>
  )
}

export { AlertDialogCustomPortal }
