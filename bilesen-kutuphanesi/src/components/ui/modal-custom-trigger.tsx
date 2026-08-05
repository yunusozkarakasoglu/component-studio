/**
 * ModalCustomTrigger
 * Özel trigger örneği — kart görünümlü (saf React).
 * @id 439
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Settings } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon, ModalTrigger } from "@/components/ui/modal"

function ModalCustomTrigger() {
  return (
    <Modal>
      <ModalTrigger className="group flex cursor-pointer items-center gap-3 rounded-2xl bg-muted/40 p-4 select-none hover:bg-muted/70">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
          <Settings className="size-6" />
        </div>
        <div className="flex flex-1 flex-col gap-0.5">
          <p className="text-sm font-semibold text-foreground">Settings</p>
          <p className="text-xs text-muted-foreground">Manage your preferences</p>
        </div>
      </ModalTrigger>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="sm:max-w-[360px]">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon className="bg-blue-100 text-blue-700">
                <Settings className="size-5" />
              </ModalIcon>
              <ModalHeading>Settings</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                Use <code>Modal.Trigger</code> to create custom trigger elements beyond standard buttons.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Save</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  )
}

export { ModalCustomTrigger }
