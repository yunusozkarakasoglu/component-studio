/**
 * MtStepperClickable
 * Tıklanabilir adımlar (saf React, Mantine kaynaklı).
 * @id 1420
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { useState } from "react"
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperClickable() {
  const [active, setActive] = useState(1)

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <MtStepper active={active} onStepClick={setActive}>
        <MtStepperStep label="Step 1" description="Click me" />
        <MtStepperStep label="Step 2" description="Click me" />
        <MtStepperStep label="Step 3" description="Click me" />
      </MtStepper>
      <p className="text-xs text-muted-foreground">Click any step to navigate. Active: {active}</p>
    </div>
  )
}

export { MtStepperClickable }
