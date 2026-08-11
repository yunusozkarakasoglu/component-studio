/**
 * MuiStepperVertical
 * @id 2051
 * @category Navigasyon
 * @subcategory MuiStepper
 * @source mui
 */
import { useState } from "react"
import { MuiStepper } from "@/components/ui/mui-stepper"
import { MuiButton } from "@/components/ui/mui-button"

function MuiStepperVertical() {
  const [step, setStep] = useState(1)
  return (
    <div className="w-full max-w-sm space-y-4">
      <MuiStepper
        orientation="vertical"
        activeStep={step}
        steps={[
          { label: "Kişisel", content: "Ad ve iletişim bilgileri." },
          { label: "Adres", content: "Teslimat adresi." },
          { label: "Ödeme", content: "Ödeme yöntemi." },
        ]}
      />
      <div className="flex gap-2">
        <MuiButton variant="outlined" size="small" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Geri</MuiButton>
        <MuiButton variant="contained" size="small" disabled={step === 2} onClick={() => setStep((s) => s + 1)}>İleri</MuiButton>
      </div>
    </div>
  )
}

export { MuiStepperVertical }
