/**
 * TabsVertical
 * Dikey sekme örneği (saf React).
 * @id 496
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsVertical() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="profile" orientation="vertical">
      <TabsListContainer>
        <TabsList aria-label="Settings">
          <TabsTab id="profile">Profile<TabsIndicator /></TabsTab>
          <TabsTab id="security">Security<TabsIndicator /></TabsTab>
          <TabsTab id="notifications">Notifications<TabsIndicator /></TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-1" id="profile">
        <p>Manage your profile information and preferences.</p>
      </TabsPanel>
      <TabsPanel className="pt-1" id="security">
        <p>Password, two-factor authentication and sessions.</p>
      </TabsPanel>
      <TabsPanel className="pt-1" id="notifications">
        <p>Choose how and when we notify you.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsVertical }
