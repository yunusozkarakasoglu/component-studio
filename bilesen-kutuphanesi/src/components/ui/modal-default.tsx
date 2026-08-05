/**
 * ModalDefault
 * Temel örnek: karşılama modalı (saf React).
 * @id 433
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Rocket } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

function ModalDefault() {
  return (
    <Modal>
      <Button variant="secondary">Open Modal</Button>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="sm:max-w-[360px]">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon className="bg-muted text-foreground">
                <Rocket className="size-5" />
              </ModalIcon>
              <ModalHeading>Welcome to HeroUI</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                A beautiful, fast, and modern React UI library for building accessible and
                customizable web applications with ease.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  )
}

export { ModalDefault }
