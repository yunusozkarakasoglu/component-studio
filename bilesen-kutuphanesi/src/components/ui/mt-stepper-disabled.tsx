/**
 * MtStepperDisabled
 * Devre dışı adım (saf React, Mantine kaynaklı).
 * @id 1418
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperDisabled() {
  return (
    <MtStepper active={0} className="max-w-xl">
      <MtStepperStep label="Completed" />
      <MtStepperStep label="Disabled" disabled />
      <MtStepperStep label="Available" />
    </MtStepper>
  )
}

export { MtStepperDisabled }
