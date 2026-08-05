/**
 * ModalScrollBehavior
 * Kaydırma davranışı örneği: inside/outside (saf React).
 * @id 436
 * @category Overlay
 * @subcategory Modal
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading } from "@/components/ui/modal"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function ModalScrollBehavior() {
  const [scroll, setScroll] = useState<"inside" | "outside">("inside")

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup orientation="horizontal" value={scroll} onChange={(v) => setScroll(v as "inside" | "outside")}>
        <Radio value="inside">
          <RadioContent>
            <RadioControl>
              <RadioIndicator />
            </RadioControl>
            Inside
          </RadioContent>
        </Radio>
        <Radio value="outside">
          <RadioContent>
            <RadioControl>
              <RadioIndicator />
            </RadioControl>
            Outside
          </RadioContent>
        </Radio>
      </RadioGroup>

      <Modal>
        <Button variant="secondary">Open Modal ({scroll.charAt(0).toUpperCase() + scroll.slice(1)})</Button>
        <ModalBackdrop>
          <ModalContainer scroll={scroll}>
            <ModalDialog className="sm:max-w-[360px]">
              <ModalHeader>
                <ModalHeading>Scroll: {scroll.charAt(0).toUpperCase() + scroll.slice(1)}</ModalHeading>
                <p className="text-sm leading-5 text-muted-foreground">
                  Compare scroll behaviors — inside keeps content scrollable within the modal.
                </p>
              </ModalHeader>
              <ModalBody>
                {Array.from({ length: 30 }).map((_, i) => (
                  <p key={i} className="mb-3">
                    Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button slot="close" variant="secondary">Cancel</Button>
                <Button slot="close">Confirm</Button>
              </ModalFooter>
              <ModalCloseTrigger />
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </div>
  )
}

export { ModalScrollBehavior }
