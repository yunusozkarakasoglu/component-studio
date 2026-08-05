/**
 * TabsSecondaryVertical
 * Secondary + dikey örnek (saf React).
 * @id 500
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsSecondaryVertical() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="account" orientation="vertical" variant="secondary">
      <TabsListContainer>
        <TabsList aria-label="Account">
          <TabsTab id="account">Account<TabsIndicator /></TabsTab>
          <TabsTab id="billing">Billing<TabsIndicator /></TabsTab>
          <TabsTab id="team">Team<TabsIndicator /></TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-1" id="account">
        <p>Account details and email preferences.</p>
      </TabsPanel>
      <TabsPanel className="pt-1" id="billing">
        <p>Invoices, payment methods and plans.</p>
      </TabsPanel>
      <TabsPanel className="pt-1" id="team">
        <p>Invite members and manage roles.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsSecondaryVertical }
