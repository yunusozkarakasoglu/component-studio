/**
 * ShadcnButtonGroupInputGroup
 * Karmaşık giriş düzeni — yuvarlak mesaj kutusu (saf React, shadcn kaynaklı).
 * @id 763
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { useState } from "react"
import { AudioLines, Plus } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = useState(false)

  return (
    <ShadcnButtonGroup className="rounded-full">
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline" size="icon" className="rounded-full" aria-label="Plus">
          <Plus className="size-4" />
        </ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnInputGroup className="flex-row items-center gap-0 rounded-full border border-border p-1">
          <ShadcnInputGroupInput
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
            className="flex-1 border-0 shadow-none focus-visible:ring-0 group-focus-within:ring-0"
          />
          <ShadcnInputGroupAddon align="inline-end" className="static right-0 h-auto p-0 pr-1">
            <ShadcnInputGroupButton
              variant="secondary"
              size="icon-xs"
              aria-label="Voice Mode"
              className="rounded-full"
              onClick={() => setVoiceEnabled((v) => !v)}
            >
              <AudioLines className="size-3.5" />
            </ShadcnInputGroupButton>
          </ShadcnInputGroupAddon>
        </ShadcnInputGroup>
      </ShadcnButtonGroup>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupInputGroup }
