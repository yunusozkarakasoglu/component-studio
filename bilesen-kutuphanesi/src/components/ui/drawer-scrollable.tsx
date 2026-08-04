/**
 * DrawerScrollable
 * Kaydırılabilir içerikli panel (saf React).
 * DrawerBody otomatik overflow yönetir (native scroll).
 * @id 279
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerFooter, DrawerHandle, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"

function DrawerScrollable() {
  return (
    <Drawer>
      <Button variant="secondary">Terms &amp; Conditions</Button>
      <DrawerBackdrop>
        <DrawerContent>
          <DrawerDialog>
            <DrawerHandle />
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Terms &amp; Conditions</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="mb-3">
                  Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
                  risus, sed porttitor quam.
                </p>
              ))}
            </DrawerBody>
            <DrawerFooter>
              <Button slot="close" variant="secondary">Decline</Button>
              <Button slot="close">Accept</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  )
}

export { DrawerScrollable }
