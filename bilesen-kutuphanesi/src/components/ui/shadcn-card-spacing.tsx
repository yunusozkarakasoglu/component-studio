/**
 * ShadcnCardSpacing
 * --card-spacing değişkeni — seçilebilir aralık (saf React, shadcn kaynaklı).
 * @id 770
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { useState } from "react"
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
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

const spacingOptions = [
  { className: "[--card-spacing:1rem]", label: "16px", value: "4" },
  { className: "[--card-spacing:1.25rem]", label: "20px", value: "5" },
  { className: "[--card-spacing:1.5rem]", label: "24px", value: "6" },
  { className: "[--card-spacing:2rem]", label: "32px", value: "8" },
]

function ShadcnCardSpacing() {
  const [spacing, setSpacing] = useState("4")
  const selected = spacingOptions.find((o) => o.value === spacing)

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <ShadcnToggleGroup value={[spacing]} onValueChange={(v) => v[0] && setSpacing(v[0])} variant="outline" size="sm" className="justify-center">
        {spacingOptions.map((o) => (
          <ShadcnToggleGroupItem key={o.value} value={o.value}>{o.label}</ShadcnToggleGroupItem>
        ))}
      </ShadcnToggleGroup>
      <ShadcnCard className={selected?.className}>
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
                <ShadcnLabel htmlFor="shadcn-card-spacing-email">Email</ShadcnLabel>
                <ShadcnInput id="shadcn-card-spacing-email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <ShadcnLabel htmlFor="shadcn-card-spacing-password">Password</ShadcnLabel>
                <ShadcnInput id="shadcn-card-spacing-password" type="password" />
              </div>
            </div>
          </form>
        </ShadcnCardContent>
        <ShadcnCardFooter className="flex-col gap-2">
          <ShadcnButton type="submit" className="w-full">Login</ShadcnButton>
          <ShadcnButton variant="outline" className="w-full">Login with Google</ShadcnButton>
        </ShadcnCardFooter>
      </ShadcnCard>
    </div>
  )
}

export { ShadcnCardSpacing }
