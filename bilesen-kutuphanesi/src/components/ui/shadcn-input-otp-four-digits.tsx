/**
 * ShadcnInputOTPFourDigits
 * 4 haneli PIN deseni (saf React, shadcn kaynaklı).
 * @id 682
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const REGEXP_ONLY_DIGITS = /^\d+$/

function ShadcnInputOTPFourDigits() {
  return (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export { ShadcnInputOTPFourDigits }
