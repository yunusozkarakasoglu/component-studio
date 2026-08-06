/**
 * ShadcnInputOTPAlphanumeric
 * Harf + rakam deseni (saf React, shadcn kaynaklı).
 * @id 683
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

const REGEXP_ONLY_DIGITS_AND_CHARS = /^[a-zA-Z0-9]+$/

function ShadcnInputOTPAlphanumeric() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
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
  )
}

export { ShadcnInputOTPAlphanumeric }
