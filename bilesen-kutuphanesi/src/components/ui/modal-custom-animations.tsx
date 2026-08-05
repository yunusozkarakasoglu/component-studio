/**
 * ModalCustomAnimations
 * Özel animasyon örneği: Kinematic Scale + Fluid Slide (saf React).
 * @id 444
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { ArrowUpFromLine, Sparkles } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"

const animations = [
  {
    backdrop: "data-[entering]:duration-400 data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]",
    container: "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-400 data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]",
    description: "Physics-based elastic scaling — ideal for Modals and Popovers.",
    icon: "sparkles",
    name: "Kinematic Scale",
  },
  {
    backdrop: "data-[entering]:duration-500 data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]",
    container: "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:slide-in-from-bottom-4 data-[entering]:duration-500 data-[entering]:ease-[cubic-bezier(0.25,1,0.5,1)]",
    description: "Fluid slide through a medium with resistance — perfect for Bottom Sheets or Toasts.",
    icon: "arrow-up",
    name: "Fluid Slide",
  },
] as const

function ModalCustomAnimations() {
  return (
    <div className="flex flex-wrap gap-4">
      {animations.map(({ backdrop, container, description, icon, name }) => (
        <Modal key={name}>
          <Button variant="secondary">{name}</Button>
          <ModalBackdrop className={backdrop}>
            <ModalContainer className={container}>
              <ModalDialog className="sm:max-w-[360px]">
                <ModalCloseTrigger />
                <ModalHeader>
                  <ModalIcon className="bg-muted text-foreground">
                    {icon === "sparkles" ? <Sparkles className="size-5" /> : <ArrowUpFromLine className="size-5" />}
                  </ModalIcon>
                  <ModalHeading>{name} Animation</ModalHeading>
                </ModalHeader>
                <ModalBody>
                  <p className="mt-1">{description}</p>
                </ModalBody>
                <ModalFooter>
                  <Button slot="close" variant="tertiary">Close</Button>
                  <Button slot="close">Try Again</Button>
                </ModalFooter>
              </ModalDialog>
            </ModalContainer>
          </ModalBackdrop>
        </Modal>
      ))}
    </div>
  )
}

export { ModalCustomAnimations }
