/**
 * DrawerBackdropVariants
 * Backdrop varyantları örneği (opaque/blur/transparent — saf React).
 * @id 283
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerFooter, DrawerHandle, DrawerHeader, DrawerHeading, type DrawerBackdropVariant } from "@/components/ui/drawer"

const variants: DrawerBackdropVariant[] = ["opaque", "blur", "transparent"]

function DrawerBackdropVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Drawer key={variant}>
          <Button variant="secondary">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
          <DrawerBackdrop variant={variant}>
            <DrawerContent>
              <DrawerDialog>
                <DrawerHandle />
                <DrawerCloseTrigger />
                <DrawerHeader>
                  <DrawerHeading>
                    Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </DrawerHeading>
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    This drawer uses the <code>{variant}</code> backdrop variant.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button className="w-full" slot="close">Close</Button>
                </DrawerFooter>
              </DrawerDialog>
            </DrawerContent>
          </DrawerBackdrop>
        </Drawer>
      ))}
    </div>
  )
}

export { DrawerBackdropVariants }
