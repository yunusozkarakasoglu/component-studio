/**
 * MtStepperVertical
 * Dikey adımlar (saf React, Mantine kaynaklı).
 * @id 1415
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperVertical() {
  return (
    <MtStepper active={1} orientation="vertical" className="max-w-sm">
      <MtStepperStep label="First step" description="Create an account" />
      <MtStepperStep label="Second step" description="Verify email" />
      <MtStepperStep label="Third step" description="Get full access" />
    </MtStepper>
  )
}

export { MtStepperVertical }
