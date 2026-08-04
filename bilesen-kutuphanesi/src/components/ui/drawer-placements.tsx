/**
 * DrawerPlacements
 * Dört kenardan açılan panel örneği (saf React).
 * @id 277
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerFooter, DrawerHandle, DrawerHeader, DrawerHeading, type DrawerPlacement } from "@/components/ui/drawer"

const placements: DrawerPlacement[] = ["bottom", "top", "left", "right"]

function DrawerPlacements() {
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Drawer key={placement}>
          <Button variant="secondary">
            {placement.charAt(0).toUpperCase() + placement.slice(1)}
          </Button>
          <DrawerBackdrop>
            <DrawerContent placement={placement}>
              <DrawerDialog>
                <DrawerCloseTrigger />
                {placement === "bottom" && <DrawerHandle />}
                <DrawerHeader>
                  <DrawerHeading>
                    {placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer
                  </DrawerHeading>
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    This drawer slides in from the <strong>{placement}</strong> edge of the screen.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button slot="close" variant="secondary">Cancel</Button>
                  <Button slot="close">Done</Button>
                </DrawerFooter>
                {placement === "top" && <DrawerHandle />}
              </DrawerDialog>
            </DrawerContent>
          </DrawerBackdrop>
        </Drawer>
      ))}
    </div>
  )
}

export { DrawerPlacements }
