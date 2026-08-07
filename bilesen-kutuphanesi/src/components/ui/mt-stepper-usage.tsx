/**
 * MtStepperUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1414
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperUsage() {
  const [active, setActive] = useState(1)

  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <MtStepper active={active} onStepClick={setActive}>
        <MtStepperStep label="First step" description="Create an account" />
        <MtStepperStep label="Second step" description="Verify email" />
        <MtStepperStep label="Third step" description="Get full access" />
      </MtStepper>
      <div className="flex gap-2">
        <MtButton variant="default" onClick={() => setActive((a) => Math.max(0, a - 1))}>Back</MtButton>
        <MtButton onClick={() => setActive((a) => Math.min(2, a + 1))}>Next</MtButton>
      </div>
    </div>
  )
}

export { MtStepperUsage }
