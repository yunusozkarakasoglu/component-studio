/**
 * ShadcnTabsLine
 * Çizgili sekme varyantı (saf React, shadcn kaynaklı).
 * @id 836
 * @category Navigasyon
 * @subcategory ShadcnTabs
 * @source shadcn
 */
import {
  ShadcnTabs,
  ShadcnTabsContent,
  ShadcnTabsList,
  ShadcnTabsTrigger,
} from "@/components/ui/shadcn-tabs"

function ShadcnTabsLine() {
  return (
    <ShadcnTabs defaultValue="account" className="w-[300px]">
      <ShadcnTabsList className="h-10 justify-start rounded-none border-b border-border bg-transparent p-0">
        <ShadcnTabsTrigger
          value="account"
          className="h-10 rounded-none border-b-2 border-transparent bg-transparent px-3 text-muted-foreground shadow-none hover:text-foreground data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-foreground"
        >
          Account
        </ShadcnTabsTrigger>
        <ShadcnTabsTrigger
          value="password"
          className="h-10 rounded-none border-b-2 border-transparent bg-transparent px-3 text-muted-foreground shadow-none hover:text-foreground data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-foreground"
        >
          Password
        </ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="account" className="text-sm">
        Account settings content.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="password" className="text-sm">
        Password settings content.
      </ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsLine }
