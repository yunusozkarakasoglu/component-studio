/**
 * InputOTPCustomStyles
 * Özelleştirilmiş slot örneği (saf React).
 * @id 366
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

const slotClass =
  "rounded-xl border-border/80 bg-muted/60 data-[active=true]:border-blue-400 data-[active=true]:bg-blue-50"

function InputOTPCustomStyles() {
  return (
    <div className="flex w-72 flex-col gap-2">
      <Label>Verify account</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot className={slotClass} index={0} />
          <InputOTPSlot className={slotClass} index={1} />
          <InputOTPSlot className={slotClass} index={2} />
        </InputOTPGroup>
        <InputOTPSeparator className="bg-border" />
        <InputOTPGroup>
          <InputOTPSlot className={slotClass} index={3} />
          <InputOTPSlot className={slotClass} index={4} />
          <InputOTPSlot className={slotClass} index={5} />
        </InputOTPGroup>
      </InputOTP>
      <a className="text-sm text-blue-600 underline" href="#">
        Resend code
      </a>
    </div>
  )
}

export { InputOTPCustomStyles }
