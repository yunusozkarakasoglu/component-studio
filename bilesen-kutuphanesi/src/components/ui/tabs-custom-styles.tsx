/**
 * TabsCustomStyles
 * Özelleştirilmiş örnek — faturalama döngüsü (saf React).
 * @id 503
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

const listClassName =
  "rounded-xl border border-blue-500/10 bg-blue-500/5 p-1 [&_[data-slot=tabs-tab]]:rounded-lg [&_[data-slot=tabs-tab]]:bg-transparent [&_[data-slot=tabs-tab]]:text-muted-foreground [&_[data-slot=tabs-tab]]:data-[selected=true]:bg-blue-600 [&_[data-slot=tabs-tab]]:data-[selected=true]:text-white"

function TabsCustomStyles() {
  return (
    <Tabs className="w-full max-w-sm" defaultSelectedKey="yearly">
      <TabsListContainer className="rounded-none bg-transparent">
        <TabsList aria-label="Billing cycle" className={listClassName}>
          <TabsTab id="monthly">
            Monthly
            <TabsIndicator />
          </TabsTab>
          <TabsTab id="yearly">
            Yearly
            <TabsIndicator />
          </TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-3 text-sm text-muted-foreground" id="monthly">
        Billed monthly, cancel anytime.
      </TabsPanel>
      <TabsPanel className="pt-3 text-sm text-muted-foreground" id="yearly">
        Save 20% with annual billing.
      </TabsPanel>
    </Tabs>
  )
}

export { TabsCustomStyles }
