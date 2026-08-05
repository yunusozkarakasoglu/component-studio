/**
 * InputOTPDisabled
 * Devre dışı örnek (saf React).
 * @id 359
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { Description } from "@/components/ui/description"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPDisabled() {
  return (
    <div className="flex w-[280px] flex-col gap-2">
      <Label>Verify account</Label>
      <Description>Code verification is currently disabled</Description>
      <InputOTP isDisabled maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export { InputOTPDisabled }
