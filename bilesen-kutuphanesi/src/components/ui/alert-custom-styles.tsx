/**
 * AlertCustomStyles
 * HeroUI Tailwind CSS örneği — özelleştirilmiş warning alert (saf React).
 * @id 119
 * @category Alert & Dialog
 */
import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CloseButton } from "@/components/ui/close-button"

function AlertCustomStyles() {
  return (
    <div className="w-full max-w-xl">
      <Alert
        className="relative overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-background to-background shadow-sm"
        status="warning"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-amber-400/15 blur-2xl"
        />
        <AlertIndicator className="relative" />
        <AlertContent className="relative">
          <AlertTitle>Payment method expires soon</AlertTitle>
          <AlertDescription>
            Your Visa ending in 4242 expires on March 28. Update billing to avoid interrupting your
            Pro subscription.
          </AlertDescription>
          <Button className="mt-3" size="sm" variant="tertiary">Update billing</Button>
        </AlertContent>
        <CloseButton className="relative" />
      </Alert>
    </div>
  )
}

export { AlertCustomStyles }
