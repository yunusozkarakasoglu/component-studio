/**
 * ShadcnPopoverForm
 * Form alanlı popover (saf React, shadcn kaynaklı).
 * @id 793
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverDescription,
  ShadcnPopoverHeader,
  ShadcnPopoverTitle,
  ShadcnPopoverTrigger,
} from "@/components/ui/shadcn-popover"

function ShadcnPopoverForm() {
  return (
    <ShadcnPopover>
      <ShadcnPopoverTrigger>Open Popover</ShadcnPopoverTrigger>
      <ShadcnPopoverContent className="w-64" align="start">
        <ShadcnPopoverHeader>
          <ShadcnPopoverTitle>Dimensions</ShadcnPopoverTitle>
          <ShadcnPopoverDescription>
            Set the dimensions for the layer.
          </ShadcnPopoverDescription>
        </ShadcnPopoverHeader>
        <ShadcnFieldGroup className="gap-4">
          <ShadcnField orientation="horizontal">
            <ShadcnFieldLabel htmlFor="popover-form-width" className="w-1/2">Width</ShadcnFieldLabel>
            <ShadcnInput id="popover-form-width" defaultValue="100%" />
          </ShadcnField>
          <ShadcnField orientation="horizontal">
            <ShadcnFieldLabel htmlFor="popover-form-height" className="w-1/2">Height</ShadcnFieldLabel>
            <ShadcnInput id="popover-form-height" defaultValue="25px" />
          </ShadcnField>
        </ShadcnFieldGroup>
      </ShadcnPopoverContent>
    </ShadcnPopover>
  )
}

export { ShadcnPopoverForm }
