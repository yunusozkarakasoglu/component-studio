/**
 * DrawerBasic
 * Temel örnek: sağdan kayan panel (saf React).
 * @id 276
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerDialog, DrawerFooter, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"

function DrawerBasic() {
  return (
    <Drawer>
      <Button variant="secondary">Open Drawer</Button>
      <DrawerBackdrop>
        <DrawerContent placement="right">
          <DrawerDialog>
            <DrawerHeader>
              <DrawerHeading>Drawer Title</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                This is a drawer built with React. It slides in from the right edge of the
                screen with a smooth CSS transition.
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

export { DrawerBasic }
