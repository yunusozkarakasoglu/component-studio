/**
 * PopoverPlacement
 * Konum örneği: top/bottom/left/right (saf React).
 * @id 451
 * @category Overlay
 * @subcategory Popover
 */
import { Button } from "@/components/ui/button"
import { Popover, PopoverArrow, PopoverContent, PopoverDialog } from "@/components/ui/popover"

function PopoverPlacement() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div />
      <Popover>
        <Button className="w-full" variant="tertiary">Top</Button>
        <PopoverContent placement="top">
          <PopoverDialog>
            <PopoverArrow />
            <p className="text-sm">Top placement</p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>
      <div />

      <Popover>
        <Button className="w-full" variant="tertiary">Left</Button>
        <PopoverContent placement="left">
          <PopoverDialog>
            <PopoverArrow />
            <p className="text-sm">Left placement</p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>

      <div className="flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Click buttons</span>
      </div>

      <Popover>
        <Button className="w-full" variant="tertiary">Right</Button>
        <PopoverContent placement="right">
          <PopoverDialog>
            <PopoverArrow />
            <p className="text-sm">Right placement</p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>

      <div />
      <Popover>
        <Button className="w-full" variant="tertiary">Bottom</Button>
        <PopoverContent placement="bottom">
          <PopoverDialog>
            <PopoverArrow />
            <p className="text-sm">Bottom placement</p>
          </PopoverDialog>
        </PopoverContent>
      </Popover>
      <div />
    </div>
  )
}

export { PopoverPlacement }
