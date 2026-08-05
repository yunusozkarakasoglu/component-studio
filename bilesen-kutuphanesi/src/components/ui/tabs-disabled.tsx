/**
 * TabsDisabled
 * Devre dışı sekme örneği (saf React).
 * @id 497
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsDisabled() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="general">
      <TabsListContainer>
        <TabsList aria-label="Settings">
          <TabsTab id="general">General<TabsIndicator /></TabsTab>
          <TabsTab id="advanced" isDisabled>Advanced<TabsIndicator /></TabsTab>
          <TabsTab id="beta">Beta<TabsIndicator /></TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-4" id="general">
        <p>General settings — works as expected.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="advanced">
        <p>Advanced settings — disabled tab, not reachable.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="beta">
        <p>Beta features — try the latest experiments.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsDisabled }
