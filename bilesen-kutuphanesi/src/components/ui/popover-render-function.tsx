/**
 * PopoverRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 452
 * @category Overlay
 * @subcategory Popover
 */
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDialog, PopoverHeading } from "@/components/ui/popover"

function PopoverRenderFunction() {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <Button>Click me</Button>
        <PopoverContent className="max-w-64" render={(props) => <div {...props} data-custom="foo" />}>
          <PopoverDialog>
            <PopoverHeading>Popover Title</PopoverHeading>
            <p className="mt-2 text-sm text-muted-foreground">
              This is the popover content. You can put any content here.
            </p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { PopoverRenderFunction }
