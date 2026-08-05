/**
 * ModalWithForm
 * Form içeren modal örneği (saf React).
 * @id 438
 * @category Overlay
 * @subcategory Modal
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "@/components/ui/icons"
import { Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, ModalFooter, ModalHeader, ModalHeading, ModalIcon } from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"

function ModalWithForm() {
  return (
    <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <ModalBackdrop>
        <ModalContainer placement="auto">
          <ModalDialog className="sm:max-w-md">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon className="bg-blue-100 text-blue-700">
                <Mail className="size-5" />
              </ModalIcon>
              <div className="flex flex-col gap-1">
                <ModalHeading>Contact Us</ModalHeading>
                <p className="text-sm leading-5 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you.
                </p>
              </div>
            </ModalHeader>
            <ModalBody className="p-6">
              <form className="flex flex-col gap-4">
                <TextField className="w-full" name="name" type="text" variant="secondary">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" type="email" variant="secondary">
                  <Label>Email</Label>
                  <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" name="message" variant="secondary">
                  <Label>Message</Label>
                  <Input placeholder="Enter your message" />
                </TextField>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Send Message</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  )
}

export { ModalWithForm }
