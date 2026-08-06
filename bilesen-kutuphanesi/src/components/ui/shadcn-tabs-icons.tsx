/**
 * ShadcnTabsIcons
 * İkonlu sekmeler (saf React, shadcn kaynaklı).
 * @id 839
 * @category Navigasyon
 * @subcategory ShadcnTabs
 * @source shadcn
 */
import { CreditCard, Home, Settings, User } from "@/components/ui/icons"
import {
  ShadcnTabs,
  ShadcnTabsContent,
  ShadcnTabsList,
  ShadcnTabsTrigger,
} from "@/components/ui/shadcn-tabs"

function ShadcnTabsIcons() {
  return (
    <ShadcnTabs defaultValue="account" className="w-[400px]">
      <ShadcnTabsList>
        <ShadcnTabsTrigger value="account">
          <User className="size-4" /> Account
        </ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="password">
          <Settings className="size-4" /> Password
        </ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="billing">
          <CreditCard className="size-4" /> Billing
        </ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="home">
          <Home className="size-4" /> Home
        </ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="account" className="text-sm">
        Account settings with icon.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="password" className="text-sm">
        Password settings with icon.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="billing" className="text-sm">
        Billing settings with icon.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="home" className="text-sm">
        Home tab with icon.
      </ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsIcons }
