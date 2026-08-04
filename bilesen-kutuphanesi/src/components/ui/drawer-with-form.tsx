/**
 * DrawerWithForm
 * Form içeren panel örneği (saf React).
 * Label + native input kullanır (üçüncü parti yok).
 * @id 281
 * @category Panel & Drawer
 */
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerFooter, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"

function DrawerWithForm() {
  return (
    <Drawer>
      <Button variant="secondary">Edit Profile</Button>
      <DrawerBackdrop>
        <DrawerContent placement="right">
          <DrawerDialog>
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Edit Profile</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="drawer-name">Name</Label>
                  <input
                    id="drawer-name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="drawer-email">Email</Label>
                  <input
                    id="drawer-email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="drawer-bio">Bio</Label>
                  <textarea
                    id="drawer-bio"
                    placeholder="Tell us about yourself"
                    rows={3}
                    className="resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/40"
                  />
                </div>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Save Changes</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  )
}

export { DrawerWithForm }
