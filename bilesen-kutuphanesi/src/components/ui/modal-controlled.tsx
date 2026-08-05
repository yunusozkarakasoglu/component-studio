/**
 * ModalControlled
 * Kontrollü örnek: useState + useOverlayState (saf React).
 * @id 437
 * @category Overlay
 * @subcategory Modal
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "@/components/ui/icons"
import { ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon, useOverlayState } from "@/components/ui/modal"

function ModalControlled() {
  const [isOpen, setIsOpen] = useState(false)
  const state = useOverlayState()

  return (
    <div className="flex max-w-md flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">With React.useState()</h3>
        <div className="flex flex-col items-start gap-3 rounded-xl bg-muted/40 p-4">
          <p className="text-xs text-muted-foreground">
            Status: <span className="font-mono font-medium text-foreground">{isOpen ? "open" : "closed"}</span>
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={() => setIsOpen(true)}>Open Modal</Button>
            <Button size="sm" variant="tertiary" onPress={() => setIsOpen(!isOpen)}>Toggle</Button>
          </div>
        </div>

        <ModalBackdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <ModalContainer>
            <ModalDialog className="sm:max-w-[360px]">
              <ModalCloseTrigger />
              <ModalHeader>
                <ModalIcon className="bg-blue-100 text-blue-700">
                  <CheckCircle className="size-5" />
                </ModalIcon>
                <ModalHeading>Controlled with useState()</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p>This modal is controlled by React&apos;s <code>useState</code> hook.</p>
              </ModalBody>
              <ModalFooter>
                <Button slot="close" variant="secondary">Cancel</Button>
                <Button slot="close">Confirm</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">With useOverlayState()</h3>
        <div className="flex flex-col items-start gap-3 rounded-xl bg-muted/40 p-4">
          <p className="text-xs text-muted-foreground">
            Status: <span className="font-mono font-medium text-foreground">{state.isOpen ? "open" : "closed"}</span>
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={state.open}>Open Modal</Button>
            <Button size="sm" variant="tertiary" onPress={state.toggle}>Toggle</Button>
          </div>
        </div>

        <ModalBackdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
          <ModalContainer>
            <ModalDialog className="sm:max-w-[360px]">
              <ModalCloseTrigger />
              <ModalHeader>
                <ModalIcon className="bg-emerald-100 text-emerald-700">
                  <CheckCircle className="size-5" />
                </ModalIcon>
                <ModalHeading>Controlled with useOverlayState()</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p>The <code>useOverlayState</code> hook provides convenient methods.</p>
              </ModalBody>
              <ModalFooter>
                <Button slot="close" variant="secondary">Cancel</Button>
                <Button slot="close">Confirm</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </div>
    </div>
  )
}

export { ModalControlled }
