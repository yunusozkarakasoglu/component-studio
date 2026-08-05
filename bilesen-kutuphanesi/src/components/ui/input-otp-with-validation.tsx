/**
 * InputOTPWithValidation
 * Form doğrulama örneği — 123456 kodu (saf React).
 * @id 365
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPWithValidation() {
  const [value, setValue] = useState("")
  const [isInvalid, setIsInvalid] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const code = formData.get("code")

    if (code !== "123456") {
      setIsInvalid(true)
      return
    }

    setIsInvalid(false)
    setValue("")
    alert("Code verified successfully!")
  }

  const handleChange = (val: string) => {
    setValue(val)
    setIsInvalid(false)
  }

  return (
    <div className="flex w-[280px] flex-col gap-2">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <Label>Verify account</Label>
        <Description>Hint: The code is 123456</Description>
        <InputOTP
          aria-describedby={isInvalid ? "code-error" : undefined}
          isInvalid={isInvalid}
          maxLength={6}
          name="code"
          value={value}
          onChange={handleChange}
        >
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
        <span className={`text-xs text-red-500 ${isInvalid ? "visible" : "invisible"}`} id="code-error" role="alert">
          Invalid code. Please try again.
        </span>
        <Button isDisabled={value.length !== 6} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export { InputOTPWithValidation }
