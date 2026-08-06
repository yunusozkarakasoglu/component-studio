/**
 * ShadcnInputGroupBlockEnd
 * align=block-end — altta ayak (saf React, shadcn kaynaklı).
 * @id 667
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupInput,
  ShadcnInputGroupText,
  ShadcnInputGroupTextarea,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupBlockEnd() {
  return (
    <ShadcnFieldGroup className="max-w-sm">
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="ig-block-end-input">Input</ShadcnFieldLabel>
        <ShadcnInputGroup className="h-auto">
          <ShadcnInputGroupInput id="ig-block-end-input" placeholder="Enter amount" />
          <ShadcnInputGroupAddon align="block-end">
            <ShadcnInputGroupText>USD</ShadcnInputGroupText>
          </ShadcnInputGroupAddon>
        </ShadcnInputGroup>
        <ShadcnFieldDescription>Footer positioned below the input.</ShadcnFieldDescription>
      </ShadcnField>
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="ig-block-end-textarea">Textarea</ShadcnFieldLabel>
        <ShadcnInputGroup>
          <ShadcnInputGroupTextarea id="ig-block-end-textarea" placeholder="Write a comment..." />
          <ShadcnInputGroupAddon align="block-end">
            <ShadcnInputGroupText>0/280</ShadcnInputGroupText>
            <ShadcnInputGroupButton variant="default" size="sm" className="ml-auto">
              Post
            </ShadcnInputGroupButton>
          </ShadcnInputGroupAddon>
        </ShadcnInputGroup>
        <ShadcnFieldDescription>Footer positioned below the textarea.</ShadcnFieldDescription>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnInputGroupBlockEnd }
