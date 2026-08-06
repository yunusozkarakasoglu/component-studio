/**
 * ShadcnInputGroupButton
 * Butonlu gruplar — kopyala, favori, arama (saf React, shadcn kaynaklı).
 * @id 670
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { useState } from "react"
import { Check, Copy, Info, Search, Star } from "@/components/ui/icons"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupButtonExample() {
  const [isCopied, setIsCopied] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              setIsCopied(true)
              setTimeout(() => setIsCopied(false), 1500)
            }}
          >
            {isCopied ? <Check className="size-3.5 text-green-600" /> : <Copy className="size-3.5" />}
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupAddon>
          <ShadcnInputGroupButton variant="secondary" size="icon-xs" aria-label="Info">
            <Info className="size-3.5" />
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupAddon className="pl-8 text-muted-foreground">
          https://
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupInput aria-label="URL" />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupButton
            onClick={() => setIsFavorite((v) => !v)}
            size="icon-xs"
            aria-label="Favorite"
          >
            <Star className={`size-3.5 ${isFavorite ? "fill-blue-600 stroke-blue-600" : ""}`} />
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Type to search..." />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupButton variant="secondary">
            <Search className="size-3.5" />
            Search
          </ShadcnInputGroupButton>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupButtonExample }
