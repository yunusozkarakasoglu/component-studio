/**
 * ShadcnInputOTPInvalid
 * Geçersiz durum — hata mesajı ile (saf React, shadcn kaynaklı).
 * @id 681
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

function ShadcnInputOTPInvalid() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} value={value} onChange={setValue} isInvalid={value.length === 6 && value !== "123456"}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {value.length === 6 && value !== "123456" && (
        <p className="text-center text-sm text-red-500">Invalid code. Please try again.</p>
      )}
    </div>
  )
}

export { ShadcnInputOTPInvalid }
