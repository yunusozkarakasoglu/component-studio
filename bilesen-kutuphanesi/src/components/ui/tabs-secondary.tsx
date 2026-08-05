/**
 * TabsSecondary
 * Secondary (underline) variant örneği (saf React).
 * @id 499
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsSecondary() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="preview" variant="secondary">
      <TabsListContainer>
        <TabsList aria-label="Document">
          <TabsTab id="preview">Preview<TabsIndicator /></TabsTab>
          <TabsTab id="code">Code<TabsIndicator /></TabsTab>
          <TabsTab id="history">History<TabsIndicator /></TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-4" id="preview">
        <p>Live preview of your document.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="code">
        <p>Raw markdown source.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="history">
        <p>Revision history and changes.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsSecondary }
