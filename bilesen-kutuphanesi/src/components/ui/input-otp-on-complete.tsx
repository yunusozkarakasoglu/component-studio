/**
 * InputOTPOnComplete
 * onComplete örneği — kod tamamlanınca doğrulama (saf React).
 * Form gelmediği için native <form> kullanılır.
 * @id 362
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"

function InputOTPOnComplete() {
  const [value, setValue] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleComplete = (code: string) => {
    setIsComplete(true)
    console.log("Code complete:", code)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setValue("")
      setIsComplete(false)
    }, 2000)
  }

  return (
    <form className="flex w-[280px] flex-col gap-2" onSubmit={handleSubmit}>
      <Label>Verify account</Label>
      <InputOTP
        maxLength={6}
        value={value}
        onComplete={handleComplete}
        onChange={(val) => {
          setValue(val)
          setIsComplete(false)
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
      <Button className="mt-2 w-full" isDisabled={!isComplete} isPending={isSubmitting} type="submit" variant="primary">
        {isSubmitting ? (
          <>
            <Spinner size="sm" />
            Verifying...
          </>
        ) : (
          "Verify Code"
        )}
      </Button>
    </form>
  )
}

export { InputOTPOnComplete }
