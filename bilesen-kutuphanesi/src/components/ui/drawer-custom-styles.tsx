/**
 * DrawerCustomStyles
 * Özelleştirilmiş panel örneği (saf React).
 * blur backdrop + sağdan panel + filtre içeriği.
 * @id 284
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerDialog, DrawerFooter, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"

function DrawerCustomStyles() {
  return (
    <Drawer>
      <Button variant="secondary">Open filters</Button>
      <DrawerBackdrop variant="blur">
        <DrawerContent placement="right">
          <DrawerDialog className="border-l border-border bg-background">
            <DrawerHeader>
              <DrawerHeading className="text-foreground">Filters</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p className="text-sm text-muted-foreground">Narrow results by status, owner, or date.</p>
            </DrawerBody>
            <DrawerFooter>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Apply</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  )
}

export { DrawerCustomStyles }
