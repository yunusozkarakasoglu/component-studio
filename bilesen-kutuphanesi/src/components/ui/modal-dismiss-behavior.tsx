/**
 * ModalDismissBehavior
 * Kapatma davranışı örneği: isDismissable + isKeyboardDismissDisabled (saf React).
 * @id 442
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Info } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

function ModalDismissBehavior() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">isDismissable</h3>
        <p className="text-sm text-muted-foreground">
          Set to <code>false</code> to require explicit close action.
        </p>
        <Modal>
          <Button variant="secondary">Open Modal</Button>
          <ModalBackdrop isDismissable={false}>
            <ModalContainer>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    <Info className="size-5" />
                  </ModalIcon>
                  <ModalHeading>isDismissable = false</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Clicking the backdrop won&apos;t close this modal. Use the close button or ESC.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" slot="close">Close</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">isKeyboardDismissDisabled</h3>
        <p className="text-sm text-muted-foreground">
          When <code>true</code>, the ESC key is disabled.
        </p>
        <Modal>
          <Button variant="secondary">Open Modal</Button>
          <ModalBackdrop isKeyboardDismissDisabled>
            <ModalContainer>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    <Info className="size-5" />
                  </ModalIcon>
                  <ModalHeading>isKeyboardDismissDisabled = true</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>Press ESC — nothing happens. Use the close button instead.</p>
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" slot="close">Close</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      </div>
    </div>
  )
}

export { ModalDismissBehavior }
