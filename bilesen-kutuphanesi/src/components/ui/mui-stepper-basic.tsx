/**
 * MuiStepperBasic
 * @id 2003
 * @category Navigasyon
 * @subcategory MuiStepper
 * @source mui
 */
import { useState } from "react"
import { MuiStepper } from "@/components/ui/mui-stepper"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStepperBasic() {
  const [step, setStep] = useState(1)
  return (
    <MuiStack spacing={4} className="w-full max-w-md">
      <MuiStepper
        activeStep={step}
        steps={[
          { label: "Bilgiler", content: "Kişisel bilgilerinizi girin." },
          { label: "Adres", content: "Teslimat adresini girin." },
          { label: "Ödeme", content: "Ödeme yöntemini seçin." },
        ]}
      />
      <div className="flex gap-2">
        <MuiButton variant="outlined" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Geri</MuiButton>
        <MuiButton variant="contained" disabled={step === 2} onClick={() => setStep((s) => s + 1)}>İleri</MuiButton>
      </div>
    </MuiStack>
  )
}

export { MuiStepperBasic }
