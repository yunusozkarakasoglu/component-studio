/**
 * InputOTPWithPattern
 * Harf kısıtlamalı örnek (REGEXP_ONLY_CHARS — saf React).
 * @id 364
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { Description } from "@/components/ui/description"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, REGEXP_ONLY_CHARS } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPWithPattern() {
  return (
    <div className="flex w-[280px] flex-col gap-2">
      <Label>Enter code (letters only)</Label>
      <Description>Only alphabetic characters are allowed</Description>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_CHARS}>
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

export { InputOTPWithPattern }
