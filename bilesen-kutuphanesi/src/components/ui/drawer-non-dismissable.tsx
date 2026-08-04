/**
 * DrawerNonDismissable
 * Dışarı tıklamayla/drag ile kapanmayan panel (saf React).
 * Yalnızca butonlarla kapanır (isDismissable={false}).
 * @id 278
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerDialog, DrawerFooter, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"

function DrawerNonDismissable() {
  return (
    <Drawer>
      <Button variant="secondary">Important Action</Button>
      <DrawerBackdrop isDismissable={false}>
        <DrawerContent>
          <DrawerDialog>
            <DrawerHeader>
              <DrawerHeading>Confirm Action</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                This drawer cannot be dismissed by clicking outside or dragging. You must use one of
                the buttons below.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Confirm</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  )
}

export { DrawerNonDismissable }
