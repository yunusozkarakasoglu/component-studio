/**
 * InputOTPOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * @id 358
 * @category Form Elemanları
 * @subcategory InputOTP
 */
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

function InputOTPOnSurface() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-3xl bg-muted/40 p-6">
      <div className="flex flex-col gap-1">
        <Label>Verify account</Label>
        <p className="text-sm text-muted-foreground">We&apos;ve sent a code to a****@gmail.com</p>
      </div>
      <InputOTP maxLength={6} variant="secondary">
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
      <div className="flex items-center gap-[5px] px-1 pt-1">
        <p className="text-sm text-muted-foreground">Didn&apos;t receive a code?</p>
        <a className="text-sm text-foreground underline" href="#">
          Resend
        </a>
      </div>
    </div>
  )
}

export { InputOTPOnSurface }
