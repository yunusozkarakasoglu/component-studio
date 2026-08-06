/**
 * ShadcnInputGroupTextarea
 * Kod düzenleyici — başlık + alt bilgi çubuğu (saf React, shadcn kaynaklı).
 * @id 674
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Copy, CornerDownLeft, FileCode, RefreshCw } from "@/components/ui/icons"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupText,
  ShadcnInputGroupTextarea,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <ShadcnInputGroup>
        <ShadcnInputGroupTextarea
          id="ig-textarea-code"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px] font-mono text-sm"
        />
        <ShadcnInputGroupAddon align="block-end" className="border-t">
          <ShadcnInputGroupText>Line 1, Column 1</ShadcnInputGroupText>
          <ShadcnInputGroupButton size="sm" className="ml-auto" variant="default">
            Run <CornerDownLeft className="size-3.5" />
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupAddon align="block-start" className="border-b">
          <ShadcnInputGroupText className="font-mono font-medium">
            <FileCode className="size-3.5" />
            script.js
          </ShadcnInputGroupText>
          <ShadcnInputGroupButton className="ml-auto" size="icon-xs" aria-label="Refresh">
            <RefreshCw className="size-3.5" />
          </ShadcnInputGroupButton>
          <ShadcnInputGroupButton variant="ghost" size="icon-xs" aria-label="Copy">
            <Copy className="size-3.5" />
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupTextareaExample }
