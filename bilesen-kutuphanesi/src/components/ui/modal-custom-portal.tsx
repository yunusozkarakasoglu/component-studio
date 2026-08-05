/**
 * ModalCustomPortal
 * Özel portal örneği — kendi konteynerinde render (saf React).
 * @id 445
 * @category Overlay
 * @subcategory Modal
 */
import { useCallback, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading } from "@/components/ui/modal"

function ModalCustomPortal() {
  const portalRef = useRef<HTMLDivElement>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  const setPortalRef = useCallback((node: HTMLDivElement | null) => {
    portalRef.current = node
    setPortalContainer(node)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-foreground">
          Render modals inside a custom container instead of <code>document.body</code>
        </p>
      </div>
      <div
        ref={setPortalRef}
        className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-lg bg-muted/20"
        style={{ transform: "translate(0)" }}
      >
        {!!portalContainer && (
          <Modal>
            <Button>Open Modal</Button>
            <ModalBackdrop className="h-full" UNSTABLE_portalContainer={portalContainer}>
              <ModalContainer className="h-full max-h-full">
                <ModalDialog className="h-full max-h-full sm:max-w-md">
                  <ModalCloseTrigger />
                  <ModalHeader>
                    <ModalHeading>Custom Portal</ModalHeading>
                  </ModalHeader>
                  <ModalBody>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button slot="close" variant="secondary">Close</Button>
                  </ModalFooter>
                </ModalDialog>
              </ModalContainer>
            </ModalBackdrop>
          </Modal>
        )}
      </div>
    </div>
  )
}

export { ModalCustomPortal }
