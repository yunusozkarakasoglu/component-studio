/**
 * ShadcnButtonGroupPopover
 * Popover ekli grup — Copilot (saf React, shadcn kaynaklı).
 * Popover: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 766
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { Bot, ChevronDown } from "@/components/ui/icons"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnButtonGroupPopover() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButton variant="outline">
        <Bot className="size-4" /> Copilot
      </ShadcnButton>
      <Popover>
        <ShadcnButton variant="outline" size="icon" aria-label="Open Popover">
          <ChevronDown className="size-4" />
        </ShadcnButton>
        <PopoverContent>
          <div className="flex w-72 flex-col gap-2 p-4 text-sm">
            <div className="font-medium">Start a new task with Copilot</div>
            <ShadcnField>
              <ShadcnFieldLabel htmlFor="task" className="sr-only">
                Task Description
              </ShadcnFieldLabel>
              <ShadcnTextarea id="task" placeholder="I need to..." className="resize-none" />
              <ShadcnFieldDescription>
                Copilot will open a pull request for review.
              </ShadcnFieldDescription>
            </ShadcnField>
          </div>
        </PopoverContent>
      </Popover>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupPopover }
