/**
 * ModalBackdropVariants
 * Backdrop varyantları örneği (saf React).
 * @id 440
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Rocket } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon, type BackdropVariant } from "@/components/ui/modal"

const variants: BackdropVariant[] = ["opaque", "blur", "transparent"]

function ModalBackdropVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Modal key={variant}>
          <Button variant="secondary">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
          <ModalBackdrop variant={variant}>
            <ModalContainer>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    <Rocket className="size-5" />
                  </ModalIcon>
                  <ModalHeading>Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>This modal uses the <code>{variant}</code> backdrop variant.</p>
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" slot="close">Continue</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      ))}
    </div>
  )
}

export { ModalBackdropVariants }
