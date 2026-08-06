/**
 * ShadcnTabsDisabled
 * Devre dışı sekme (saf React, shadcn kaynaklı).
 * @id 838
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

function ShadcnTabsDisabled() {
  return (
    <ShadcnTabs defaultValue="enabled" className="w-[320px]">
      <ShadcnTabsList>
        <ShadcnTabsTrigger value="enabled">Enabled</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="disabled" isDisabled>
          Disabled
        </ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="enabled" className="text-sm">
        This tab is enabled and can be selected.
      </ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsDisabled }
