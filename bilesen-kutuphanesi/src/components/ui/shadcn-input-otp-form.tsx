/**
 * ShadcnInputOTPForm
 * Form içinde OTP — gönder butonu (saf React, shadcn kaynaklı).
 * Button: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 684
 * @category Form Elemanları
 * @subcategory ShadcnInputOTP
 * @source shadcn
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"

function ShadcnInputOTPForm() {
  const [value, setValue] = useState("")

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`OTP submitted: ${value}`)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="shadcn-otp-form">One-Time Password</ShadcnFieldLabel>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <ShadcnFieldDescription>
          Enter the 6-digit code sent to your email.
        </ShadcnFieldDescription>
      </ShadcnField>
      <Button type="submit" className="w-fit">Verify</Button>
    </form>
  )
}

export { ShadcnInputOTPForm }
