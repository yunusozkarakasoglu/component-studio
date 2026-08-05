/**
 * InputOTPFormExample
 * İki faktörlü doğrulama formu örneği (saf React).
 * @id 363
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"

function InputOTPFormExample() {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (value.length !== 6) {
      setError("Please enter all 6 digits")
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      if (value === "123456") {
        console.log("Code verified successfully!")
        setValue("")
      } else {
        setError("Invalid code. Please try again.")
      }
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form className="flex w-[280px] flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Label>Two-factor authentication</Label>
        <Description>Enter the 6-digit code from your authenticator app</Description>
        <InputOTP
          isInvalid={!!error}
          maxLength={6}
          value={value}
          onChange={(val) => {
            setValue(val)
            setError("")
          }}
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
        <span className={`text-xs text-red-500 ${error ? "visible" : "invisible"}`} id="code-error" role="alert">
          {error}
        </span>
      </div>
      <Button className="w-full" isDisabled={value.length !== 6} isPending={isSubmitting} type="submit" variant="primary">
        {isSubmitting ? (
          <>
            <Spinner size="sm" />
            Verifying...
          </>
        ) : (
          "Verify"
        )}
      </Button>
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm text-muted-foreground">Having trouble?</p>
        <a className="text-sm text-foreground underline" href="#">
          Use backup code
        </a>
      </div>
    </form>
  )
}

export { InputOTPFormExample }
