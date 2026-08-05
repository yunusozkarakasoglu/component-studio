/**
 * TabsOverflow
 * Taşma örneği — çok sayıda sekme (saf React).
 * @id 501
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

const TABS = ["Overview", "Analytics", "Reports", "Customers", "Products", "Orders", "Settings", "Billing", "Team", "Integrations", "API", "Docs"]

function TabsOverflow() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="overview">
      <TabsListContainer>
        <TabsList aria-label="Dashboard">
          {TABS.map((t) => (
            <TabsTab key={t.toLowerCase()} id={t.toLowerCase()}>
              {t}
              <TabsIndicator />
            </TabsTab>
          ))}
        </TabsList>
      </TabsListContainer>
      {TABS.map((t, i) => (
        <TabsPanel className="pt-4" id={t.toLowerCase()} key={t}>
          <p>{t} panel content — {i + 1} of {TABS.length} sections.</p>
        </TabsPanel>
      ))}
    </Tabs>
  )
}

export { TabsOverflow }
