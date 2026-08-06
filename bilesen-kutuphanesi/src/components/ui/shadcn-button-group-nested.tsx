/**
 * ShadcnButtonGroupNested
 * İç içe gruplar — mesaj gönderme + ses modu (saf React, shadcn kaynaklı).
 * Tooltip/InputGroup: kütüphanenin mevcut bileşenleri (Heroui — saf React).
 * @id 759
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { AudioLines, Plus } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

function ShadcnButtonGroupNested() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline" size="icon" aria-label="Plus">
          <Plus className="size-4" />
        </ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <InputGroupSuffix>
            <Tooltip delay={0}>
              <button className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted" aria-label="Voice Mode">
                <AudioLines className="size-4" />
              </button>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupSuffix>
        </InputGroup>
      </ShadcnButtonGroup>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupNested }
