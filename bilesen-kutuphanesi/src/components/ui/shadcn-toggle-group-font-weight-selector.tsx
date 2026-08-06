/**
 * ShadcnToggleGroupFontWeightSelector
 * Özel — yazı tipi ağırlığı seçici (saf React, shadcn kaynaklı).
 * @id 739
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { useState } from "react"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = useState("normal")

  return (
    <ShadcnField>
      <ShadcnFieldLabel>Font Weight</ShadcnFieldLabel>
      <ShadcnToggleGroup
        value={[fontWeight]}
        onValueChange={(v) => setFontWeight(v[0])}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ShadcnToggleGroupItem value="light" aria-label="Light" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground">Light</span>
        </ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="normal" aria-label="Normal" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground">Normal</span>
        </ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="medium" aria-label="Medium" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground">Medium</span>
        </ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="bold" aria-label="Bold" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground">Bold</span>
        </ShadcnToggleGroupItem>
      </ShadcnToggleGroup>
      <ShadcnFieldDescription>
        Use{" "}
        <code className="rounded-md bg-muted px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        to set the font weight.
      </ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnToggleGroupFontWeightSelector }
