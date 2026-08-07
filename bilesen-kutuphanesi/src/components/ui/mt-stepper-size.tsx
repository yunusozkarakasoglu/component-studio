/**
 * MtStepperSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1417
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperSize() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <MtStepper active={1} size="sm">
        <MtStepperStep label="Small" description="Size sm" />
        <MtStepperStep label="Small" description="Size sm" />
      </MtStepper>
      <MtStepper active={1} size="lg">
        <MtStepperStep label="Large" description="Size lg" />
        <MtStepperStep label="Large" description="Size lg" />
      </MtStepper>
    </div>
  )
}

export { MtStepperSize }
