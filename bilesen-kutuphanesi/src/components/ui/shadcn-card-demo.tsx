/**
 * ShadcnCardDemo
 * Giriş formu kartı (saf React, shadcn kaynaklı).
 * @id 768
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnCard,
  ShadcnCardAction,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnCardDemo() {
  return (
    <ShadcnCard className="w-full max-w-sm">
      <ShadcnCardHeader>
        <ShadcnCardTitle>Login to your account</ShadcnCardTitle>
        <ShadcnCardDescription>
          Enter your email below to login to your account
        </ShadcnCardDescription>
        <ShadcnCardAction>
          <ShadcnButton variant="link" className="h-auto p-0">Sign Up</ShadcnButton>
        </ShadcnCardAction>
      </ShadcnCardHeader>
      <ShadcnCardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <ShadcnLabel htmlFor="shadcn-card-email">Email</ShadcnLabel>
              <ShadcnInput id="shadcn-card-email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <ShadcnLabel htmlFor="shadcn-card-password">Password</ShadcnLabel>
                <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <ShadcnInput id="shadcn-card-password" type="password" required />
            </div>
          </div>
        </form>
      </ShadcnCardContent>
      <ShadcnCardFooter className="flex-col gap-2">
        <ShadcnButton type="submit" className="w-full">Login</ShadcnButton>
        <ShadcnButton variant="outline" className="w-full">Login with Google</ShadcnButton>
      </ShadcnCardFooter>
    </ShadcnCard>
  )
}

export { ShadcnCardDemo }
