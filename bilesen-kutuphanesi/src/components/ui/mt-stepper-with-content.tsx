/**
 * MtStepperWithContent
 * Adım içerikleri (saf React, Mantine kaynaklı).
 * @id 1419
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtStepperWithContent() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <MtStepper active={active} onStepClick={setActive}>
        <MtStepperStep label="Personal" />
        <MtStepperStep label="Contact" />
        <MtStepperStep label="Done" />
      </MtStepper>
      {active === 0 && <MtTextInput label="Full name" placeholder="John Doe" className="max-w-sm" />}
      {active === 1 && <MtTextInput label="Email" placeholder="john@example.com" className="max-w-sm" />}
      {active === 2 && <p className="text-sm text-emerald-600">🎉 Registration complete!</p>}
      <div className="flex gap-2">
        <MtButton variant="default" onClick={() => setActive((a) => Math.max(0, a - 1))}>Back</MtButton>
        <MtButton onClick={() => setActive((a) => Math.min(2, a + 1))}>Next</MtButton>
      </div>
    </div>
  )
}

export { MtStepperWithContent }
