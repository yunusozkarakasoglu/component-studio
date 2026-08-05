/**
 * TabsWithSeparator
 * Ayraçlı sekme örneği (saf React).
 * @id 498
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsSeparator, TabsTab } from "@/components/ui/tabs"

function TabsWithSeparator() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="edit">
      <TabsListContainer>
        <TabsList aria-label="Editor tools">
          <TabsTab id="edit">Edit<TabsIndicator /></TabsTab>
          <TabsTab id="view">
            <TabsSeparator />
            View
            <TabsIndicator />
          </TabsTab>
          <TabsTab id="export">
            <TabsSeparator />
            Export
            <TabsIndicator />
          </TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-4" id="edit">
        <p>Edit mode — modify your document.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="view">
        <p>View mode — read-only preview.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="export">
        <p>Export your document in multiple formats.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsWithSeparator }
