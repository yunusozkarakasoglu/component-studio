/**
 * ModalSizes
 * Boyut örneği: xs/sm/md/lg/cover/full (saf React).
 * @id 434
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Rocket } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon, type ModalSize } from "@/components/ui/modal"

const sizes: ModalSize[] = ["xs", "sm", "md", "lg", "cover", "full"]

function ModalSizes() {
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Modal key={size}>
          <Button variant="secondary">{size.charAt(0).toUpperCase() + size.slice(1)}</Button>
          <ModalBackdrop>
            <ModalContainer size={size}>
              <ModalDialog>
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    <Rocket className="size-5" />
                  </ModalIcon>
                  <ModalHeading>Size: {size.charAt(0).toUpperCase() + size.slice(1)}</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>
                    {size === "cover" ? (
                      <>This modal uses the <code>cover</code> size variant.</>
                    ) : size === "full" ? (
                      <>This modal uses the <code>full</code> size variant — fullscreen.</>
                    ) : (
                      <>This modal uses the <code>{size}</code> size variant.</>
                    )}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button slot="close" variant="secondary">Cancel</Button>
                  <Button slot="close">Confirm</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      ))}
    </div>
  )
}

export { ModalSizes }
