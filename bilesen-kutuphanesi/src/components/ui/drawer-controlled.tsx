/**
 * DrawerControlled
 * Kontrollü panel örneği (saf React).
 * useState ile ve useOverlayState hook'u ile iki varyant.
 * @id 280
 * @category Panel & Drawer
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerFooter, DrawerHeader, DrawerHeading, useOverlayState } from "@/components/ui/drawer"

function DrawerControlled() {
  const [isOpen, setIsOpen] = useState(false)
  const state = useOverlayState()

  return (
    <div className="flex max-w-md flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">With React.useState()</h3>
        <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
          Control the drawer using React&apos;s <code className="text-foreground">useState</code> hook
          for simple state management.
        </p>
        <div className="flex flex-col items-start gap-3 rounded-xl bg-muted/40 p-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Status:{" "}
              <span className="font-mono font-medium text-foreground">
                {isOpen ? "open" : "closed"}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={() => setIsOpen(true)}>Open Drawer</Button>
            <Button size="sm" variant="tertiary" onPress={() => setIsOpen(!isOpen)}>Toggle</Button>
          </div>
        </div>

        <DrawerBackdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent placement="right">
            <DrawerDialog>
              <DrawerCloseTrigger />
              <DrawerHeader>
                <DrawerHeading>Controlled with useState()</DrawerHeading>
              </DrawerHeader>
              <DrawerBody>
                <p>
                  This drawer is controlled by React&apos;s <code>useState</code> hook. Pass{" "}
                  <code>isOpen</code> and <code>onOpenChange</code> props to manage the drawer state
                  externally.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button slot="close" variant="secondary">Close</Button>
              </DrawerFooter>
            </DrawerDialog>
          </DrawerContent>
        </DrawerBackdrop>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">With useOverlayState()</h3>
        <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
          Use the <code className="text-foreground">useOverlayState</code> hook for a cleaner API
          with convenient methods like <code>open()</code>, <code>close()</code>, and{" "}
          <code>toggle()</code>.
        </p>
        <div className="flex flex-col items-start gap-3 rounded-xl bg-muted/40 p-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Status:{" "}
              <span className="font-mono font-medium text-foreground">
                {state.isOpen ? "open" : "closed"}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onPress={state.open}>Open Drawer</Button>
            <Button size="sm" variant="tertiary" onPress={state.toggle}>Toggle</Button>
          </div>
        </div>

        <DrawerBackdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
          <DrawerContent placement="right">
            <DrawerDialog>
              <DrawerCloseTrigger />
              <DrawerHeader>
                <DrawerHeading>Controlled with useOverlayState()</DrawerHeading>
              </DrawerHeader>
              <DrawerBody>
                <p>
                  The <code>useOverlayState</code> hook provides dedicated methods for common
                  operations. No need to manually create callbacks — just use{" "}
                  <code>state.open()</code>, <code>state.close()</code>, or{" "}
                  <code>state.toggle()</code>.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button slot="close" variant="secondary">Close</Button>
              </DrawerFooter>
            </DrawerDialog>
          </DrawerContent>
        </DrawerBackdrop>
      </div>
    </div>
  )
}

export { DrawerControlled }
