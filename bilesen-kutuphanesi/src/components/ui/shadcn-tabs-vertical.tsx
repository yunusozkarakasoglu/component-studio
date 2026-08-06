/**
 * ShadcnTabsVertical
 * Dikey sekmeler (saf React, shadcn kaynaklı).
 * @id 837
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

function ShadcnTabsVertical() {
  return (
    <ShadcnTabs defaultValue="one" className="flex gap-4">
      <ShadcnTabsList className="flex h-auto w-32 flex-col items-stretch gap-1 bg-transparent p-0">
        <ShadcnTabsTrigger value="one" className="justify-start rounded-md px-3 text-left">Tab One</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="two" className="justify-start rounded-md px-3 text-left">Tab Two</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="three" className="justify-start rounded-md px-3 text-left">Tab Three</ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="one" className="mt-0 text-sm">Content of tab one.</ShadcnTabsContent>
      <ShadcnTabsContent value="two" className="mt-0 text-sm">Content of tab two.</ShadcnTabsContent>
      <ShadcnTabsContent value="three" className="mt-0 text-sm">Content of tab three.</ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsVertical }
