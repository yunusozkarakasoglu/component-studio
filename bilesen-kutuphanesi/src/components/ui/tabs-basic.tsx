/**
 * TabsBasic
 * Temel örnek: 3 sekme + panel (saf React).
 * @id 495
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsBasic() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="overview">
      <TabsListContainer>
        <TabsList aria-label="Options">
          <TabsTab id="overview">Overview<TabsIndicator /></TabsTab>
          <TabsTab id="analytics">Analytics<TabsIndicator /></TabsTab>
          <TabsTab id="reports">Reports<TabsIndicator /></TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-4" id="overview">
        <p>View your project overview and recent activity.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="analytics">
        <p>Track your metrics and analyze performance data.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="reports">
        <p>Generate and download detailed reports.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsBasic }
