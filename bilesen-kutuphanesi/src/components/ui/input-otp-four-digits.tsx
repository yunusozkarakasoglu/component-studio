/**
 * InputOTPFourDigits
 * 4 haneli PIN örneği (saf React).
 * @id 360
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPFourDigits() {
  return (
    <div className="flex w-[280px] flex-col gap-2">
      <Label>Enter PIN</Label>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export { InputOTPFourDigits }
