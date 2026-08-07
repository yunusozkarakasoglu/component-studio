/**
 * MtStepperIcons
 * İkonlu adımlar (saf React, Mantine kaynaklı).
 * @id 1416
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { Home, Settings, User } from "@/components/ui/icons"
import { MtStepper, MtStepperStep } from "@/components/ui/mt-stepper"

function MtStepperIcons() {
  return (
    <MtStepper active={1} className="max-w-xl">
      <MtStepperStep label="Account" icon={<User className="size-4" />} />
      <MtStepperStep label="Settings" icon={<Settings className="size-4" />} />
      <MtStepperStep label="Done" icon={<Home className="size-4" />} />
    </MtStepper>
  )
}

export { MtStepperIcons }
