/**
 * ShadcnInputOTPDemo
 * Temel örnek — 6 haneli OTP (saf React, shadcn kaynaklı).
 * InputOTP: kütüphanenin mevcut bileşeni (Heroui — saf React, API uyumlu).
 * @id 676
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

function ShadcnInputOTPDemo() {
  return (
    <InputOTP maxLength={6} defaultValue="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export { ShadcnInputOTPDemo }
