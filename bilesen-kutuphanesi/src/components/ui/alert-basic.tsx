/**
 * AlertBasic
 * Usage örneği — 6 alert varyasyonu (saf React).
 * @id 118
 * @category Alert & Dialog
 */
import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CloseButton } from "@/components/ui/close-button"
import { Spinner } from "@/components/ui/spinner"

function AlertBasic() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <Alert>
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>New features available</AlertTitle>
          <AlertDescription>Check out our latest updates including dark mode support.</AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="accent">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Update available</AlertTitle>
          <AlertDescription>A new version of the application is available.</AlertDescription>
          <Button className="mt-2" size="sm">Refresh</Button>
        </AlertContent>
      </Alert>

      <Alert status="danger">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Unable to connect to server</AlertTitle>
          <AlertDescription>
            We&apos;re experiencing connection issues. Please try the following:
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Check your internet connection</li>
              <li>Refresh the page</li>
            </ul>
          </AlertDescription>
          <Button className="mt-2" size="sm" variant="danger">Retry</Button>
        </AlertContent>
      </Alert>

      <Alert status="success">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Profile updated successfully</AlertTitle>
        </AlertContent>
        <CloseButton />
      </Alert>

      <Alert status="accent">
        <AlertIndicator>
          <Spinner size="sm" />
        </AlertIndicator>
        <AlertContent>
          <AlertTitle>Processing your request</AlertTitle>
          <AlertDescription>Please wait while we sync your data.</AlertDescription>
        </AlertContent>
      </Alert>

      <Alert status="warning">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Scheduled maintenance</AlertTitle>
          <AlertDescription>Our services will be unavailable on Sunday, March 15th.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}

export { AlertBasic }
