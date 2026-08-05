/**
 * ModalPlacements
 * Konum örneği: auto/top/center/bottom (saf React).
 * @id 435
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Rocket } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon, type ModalPlacement } from "@/components/ui/modal"

const placements: ModalPlacement[] = ["auto", "top", "center", "bottom"]

function ModalPlacements() {
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Modal key={placement}>
          <Button variant="secondary">{placement.charAt(0).toUpperCase() + placement.slice(1)}</Button>
          <ModalBackdrop>
            <ModalContainer placement={placement}>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    <Rocket className="size-5" />
                  </ModalIcon>
                  <ModalHeading>Placement: {placement.charAt(0).toUpperCase() + placement.slice(1)}</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p>
                    This modal uses the <code>{placement}</code> placement option.
                  </p>
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

export { ModalPlacements }
