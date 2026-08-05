/**
 * ModalCustomStyles
 * Özelleştirilmiş modal örneği — değişiklikler kaydedildi (saf React).
 * @id 446
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { CheckCircle } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

function ModalCustomStyles() {
  return (
    <Modal>
      <Button variant="secondary">Open</Button>
      <ModalBackdrop className="bg-black/50" variant="blur">
        <ModalContainer>
          <ModalDialog className="relative overflow-hidden border border-border/80 bg-background/90 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl sm:max-w-[340px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-neutral-500/8 to-transparent" />
            <ModalCloseTrigger />
            <ModalHeader className="relative">
              <ModalIcon className="bg-neutral-100 text-neutral-700">
                <CheckCircle className="size-5" />
              </ModalIcon>
              <ModalHeading>Changes saved</ModalHeading>
            </ModalHeader>
            <ModalBody className="relative">
              <p className="text-sm text-muted-foreground">Your draft is synced across devices.</p>
            </ModalBody>
            <ModalFooter>
              <Button className="w-full" slot="close">Done</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  )
}

export { ModalCustomStyles }
