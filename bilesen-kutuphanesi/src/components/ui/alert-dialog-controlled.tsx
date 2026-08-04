/**
 * AlertDialogControlled
 * HeroUI Controlled State örneği — useState + useOverlayState (saf React).
 * @id 125
 * @category Alert & Dialog
 */
import { useState } from "react"
import {
  AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseTrigger,
  AlertDialogContainer, AlertDialogDialog, AlertDialogFooter, AlertDialogHeader,
  AlertDialogHeading, AlertDialogIcon, useOverlayState,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

function AlertDialogControlled() {
  const [isOpen, setIsOpen] = useState(false)
  const state = useOverlayState()

  return (
    <div className="flex max-w-md flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">With useState()</h3>
        <p className="text-sm text-muted-foreground">Control the alert dialog using React's useState hook.</p>
        <div className="flex items-center justify-between rounded-2xl bg-muted/40 p-4">
          <p className="text-xs text-muted-foreground">Status: <span className="font-mono">{isOpen ? "open" : "closed"}</span></p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={() => setIsOpen(true)}>Open Dialog</Button>
            <Button size="sm" variant="tertiary" onPress={() => setIsOpen(!isOpen)}>Toggle</Button>
          </div>
        </div>
        <AlertDialogBackdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContainer>
            <AlertDialogDialog className="sm:max-w-[400px]">
              {(close) => (
                <>
                  <AlertDialogCloseTrigger />
                  <AlertDialogHeader>
                    <AlertDialogIcon status="accent" />
                    <AlertDialogHeading>Controlled with useState()</AlertDialogHeading>
                  </AlertDialogHeader>
                  <AlertDialogBody><p>This dialog is controlled by React's useState hook.</p></AlertDialogBody>
                  <AlertDialogFooter>
                    <Button variant="tertiary" onPress={close}>Cancel</Button>
                    <Button onPress={close}>Confirm</Button>
                  </AlertDialogFooter>
                </>
              )}
            </AlertDialogDialog>
          </AlertDialogContainer>
        </AlertDialogBackdrop>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">With useOverlayState()</h3>
        <p className="text-sm text-muted-foreground">Use the useOverlayState hook for open()/close()/toggle() methods.</p>
        <div className="flex items-center justify-between rounded-2xl bg-muted/40 p-4">
          <p className="text-xs text-muted-foreground">Status: <span className="font-mono">{state.isOpen ? "open" : "closed"}</span></p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={state.open}>Open Dialog</Button>
            <Button size="sm" variant="tertiary" onPress={state.toggle}>Toggle</Button>
          </div>
        </div>
        <AlertDialogBackdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
          <AlertDialogContainer>
            <AlertDialogDialog className="sm:max-w-[400px]">
              {(close) => (
                <>
                  <AlertDialogCloseTrigger />
                  <AlertDialogHeader>
                    <AlertDialogIcon status="success" />
                    <AlertDialogHeading>Controlled with useOverlayState()</AlertDialogHeading>
                  </AlertDialogHeader>
                  <AlertDialogBody><p>state.open(), state.close(), state.toggle() methods.</p></AlertDialogBody>
                  <AlertDialogFooter>
                    <Button variant="tertiary" onPress={close}>Cancel</Button>
                    <Button onPress={close}>Confirm</Button>
                  </AlertDialogFooter>
                </>
              )}
            </AlertDialogDialog>
          </AlertDialogContainer>
        </AlertDialogBackdrop>
      </div>
    </div>
  )
}

export { AlertDialogControlled }
