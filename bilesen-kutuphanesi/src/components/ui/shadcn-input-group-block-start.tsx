/**
 * ShadcnInputGroupBlockStart
 * align=block-start — üstte başlık (saf React, shadcn kaynaklı).
 * @id 666
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Copy, FileCode } from "@/components/ui/icons"
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

function ShadcnInputGroupBlockStart() {
  return (
    <ShadcnFieldGroup className="max-w-sm">
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="ig-block-start-input">Input</ShadcnFieldLabel>
        <ShadcnInputGroup className="h-auto">
          <ShadcnInputGroupInput id="ig-block-start-input" placeholder="Enter your name" />
          <ShadcnInputGroupAddon align="block-start">
            <ShadcnInputGroupText>Full Name</ShadcnInputGroupText>
          </ShadcnInputGroupAddon>
        </ShadcnInputGroup>
        <ShadcnFieldDescription>Header positioned above the input.</ShadcnFieldDescription>
      </ShadcnField>
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="ig-block-start-textarea">Textarea</ShadcnFieldLabel>
        <ShadcnInputGroup>
          <ShadcnInputGroupTextarea
            id="ig-block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <ShadcnInputGroupAddon align="block-start">
            <FileCode className="size-4 text-muted-foreground" />
            <ShadcnInputGroupText className="font-mono">script.js</ShadcnInputGroupText>
            <ShadcnInputGroupButton size="icon-xs" className="ml-auto" aria-label="Copy">
              <Copy className="size-3.5" />
            </ShadcnInputGroupButton>
          </ShadcnInputGroupAddon>
        </ShadcnInputGroup>
        <ShadcnFieldDescription>Header positioned above the textarea.</ShadcnFieldDescription>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnInputGroupBlockStart }
