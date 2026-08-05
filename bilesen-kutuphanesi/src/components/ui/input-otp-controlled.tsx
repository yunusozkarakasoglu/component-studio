/**
 * InputOTPControlled
 * Kontrollü örnek — değer göstergesi + temizleme (saf React).
 * @id 361
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPControlled() {
  const [value, setValue] = useState("")

  return (
    <div className="flex w-[280px] flex-col gap-2">
      <Label>Verify account</Label>
      <InputOTP maxLength={6} value={value} onChange={setValue}>
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
      <Description>
        {value.length > 0 ? (
          <>
            Value: {value} ({value.length}/6) •{" "}
            <button className="font-medium text-foreground underline" onClick={() => setValue("")}>
              Clear
            </button>
          </>
        ) : (
          "Enter a 6-digit code"
        )}
      </Description>
    </div>
  )
}

export { InputOTPControlled }
