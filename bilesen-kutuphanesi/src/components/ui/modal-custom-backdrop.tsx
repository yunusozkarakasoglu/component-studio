/**
 * ModalCustomBackdrop
 * Özel gradyan backdrop örneği (saf React).
 * @id 441
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Sparkles } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

function ModalCustomBackdrop() {
  return (
    <Modal>
      <Button variant="secondary">Custom Backdrop</Button>
      <ModalBackdrop className="bg-linear-to-t from-black/80 via-black/40 to-transparent" variant="blur">
        <ModalContainer>
          <ModalDialog className="sm:max-w-[360px]">
            <ModalHeader className="items-center text-center">
              <ModalIcon className="bg-blue-100 text-blue-700">
                <Sparkles className="size-5" />
              </ModalIcon>
              <ModalHeading>Premium Backdrop</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                This backdrop features a gradient that transitions from dark to transparent, with a smooth blur effect.
              </p>
            </ModalBody>
            <ModalFooter className="flex-col-reverse">
              <Button className="w-full" slot="close">Amazing!</Button>
              <Button className="w-full" slot="close" variant="secondary">Close</Button>
            </ModalFooter>
            <ModalCloseTrigger />
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  )
}

export { ModalCustomBackdrop }
