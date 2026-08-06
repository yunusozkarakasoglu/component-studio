/**
 * ShadcnInputOTPPattern
 * Sadece rakam deseni (saf React, shadcn kaynaklı).
 * InputOTP: kütüphanenin mevcut bileşeni (Heroui — saf React, API uyumlu).
 * @id 677
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"

const REGEXP_ONLY_DIGITS = /^\d+$/

function ShadcnInputOTPPattern() {
  return (
    <ShadcnField className="w-fit">
      <ShadcnFieldLabel htmlFor="shadcn-otp-digits">Digits Only</ShadcnFieldLabel>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </ShadcnField>
  )
}

export { ShadcnInputOTPPattern }
