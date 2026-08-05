/**
 * ModalCloseMethods
 * Kapatma yöntemleri örneği: slot="close" + Dialog render props (saf React).
 * @id 443
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { CheckCircle, Info } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

function ModalCloseMethods() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">Using slot=&quot;close&quot;</h3>
        <p className="text-sm text-muted-foreground">
          Add <code>slot="close"</code> to any Button within the modal.
        </p>
        <Modal>
          <Button variant="secondary">Open Modal</Button>
          <ModalBackdrop>
            <ModalContainer>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalHeader>
                  <ModalIcon className="bg-blue-100 text-blue-700">
                    <Info className="size-5" />
                  </ModalIcon>
                  <ModalHeading>Using slot=&quot;close&quot;</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>Click either button below — both will close the modal automatically.</p>
                </ModalBody>
                <ModalFooter>
                  <Button slot="close" variant="secondary">Cancel</Button>
                  <Button slot="close">Confirm</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">Using Dialog render props</h3>
        <p className="text-sm text-muted-foreground">
          Access the <code>close</code> method from the Dialog&apos;s render props.
        </p>
        <Modal>
          <Button variant="secondary">Open Modal</Button>
          <ModalBackdrop>
            <ModalContainer>
              <ModalDialog className="sm:max-w-[360px]">
                {({ close }) => (
                  <>
                    <ModalHeader>
                      <ModalIcon className="bg-emerald-100 text-emerald-700">
                        <CheckCircle className="size-5" />
                      </ModalIcon>
                      <ModalHeading>Using Dialog render props</ModalHeading>
                    </ModalHeader>
                    <ModalBody>
                      <p>The buttons below use the <code>close</code> method from render props.</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="secondary" onPress={close}>Cancel</Button>
                      <Button onPress={close}>Confirm</Button>
                    </ModalFooter>
                  </>
                )}
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      </div>
    </div>
  )
}

export { ModalCloseMethods }
