/**
 * PopoverCustomStyles
 * Özelleştirilmiş örnek — klavye kısayolları (saf React).
 * @id 453
 * @category Overlay
 * @subcategory Popover
 */
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDialog, PopoverHeading } from "@/components/ui/popover"

function PopoverCustomStyles() {
  return (
    <Popover>
      <Button variant="secondary">Details</Button>
      <PopoverContent className="max-w-56 overflow-hidden rounded-xl border border-border/80 bg-background/90 p-0 shadow-xl ring-1 ring-black/5 backdrop-blur-xl">
        <PopoverDialog className="relative p-4">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-neutral-500/6 to-transparent" />
          <PopoverHeading className="relative font-medium text-neutral-800">
            Keyboard shortcuts
          </PopoverHeading>
          <dl className="relative mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Save</dt>
              <dd className="font-mono text-neutral-700">⌘ S</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Search</dt>
              <dd className="font-mono text-neutral-700">⌘ K</dd>
            </div>
          </dl>
        </PopoverDialog>
      </PopoverContent>
    </Popover>
  )
}

export { PopoverCustomStyles }
