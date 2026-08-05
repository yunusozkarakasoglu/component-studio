/**
 * PopoverWithArrow
 * Ok işaretli örnek (saf React).
 * @id 449
 * @category Overlay
 * @subcategory Popover
 */
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "@/components/ui/icons"
import { Popover, PopoverArrow, PopoverContent, PopoverDialog, PopoverHeading } from "@/components/ui/popover"

function PopoverWithArrow() {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <Button variant="secondary">With Arrow</Button>
        <PopoverContent className="max-w-64">
          <PopoverDialog>
            <PopoverArrow />
            <PopoverHeading>Popover with Arrow</PopoverHeading>
            <p className="mt-2 text-sm text-muted-foreground">
              The arrow shows which element triggered the popover.
            </p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>

      <Popover>
        <Button isIconOnly variant="tertiary" aria-label="More">
          <MoreHorizontal className="size-4" />
        </Button>
        <PopoverContent className="max-w-64" offset={10}>
          <PopoverDialog>
            <PopoverArrow />
            <PopoverHeading>Popover with Arrow</PopoverHeading>
            <p className="mt-2 text-sm text-muted-foreground">
              The arrow shows which element triggered the popover.
            </p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { PopoverWithArrow }
