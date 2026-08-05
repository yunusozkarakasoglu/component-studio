/**
 * TabsRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 502
 * @category Navigasyon
 * @subcategory Tabs
 */
import { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsTab } from "@/components/ui/tabs"

function TabsRenderFunction() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="getting-started" render={(props) => <div {...props} data-custom="foo" />}>
      <TabsListContainer>
        <TabsList aria-label="Options">
          <TabsTab id="getting-started">
            Getting Started
            <TabsIndicator />
          </TabsTab>
          <TabsTab id="components">
            Components
            <TabsIndicator />
          </TabsTab>
          <TabsTab id="releases">
            Releases
            <TabsIndicator />
          </TabsTab>
        </TabsList>
      </TabsListContainer>
      <TabsPanel className="pt-4" id="getting-started">
        <p>View your project overview and recent activity.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="components">
        <p>Browse the component library and API docs.</p>
      </TabsPanel>
      <TabsPanel className="pt-4" id="releases">
        <p>Release notes and version history.</p>
      </TabsPanel>
    </Tabs>
  )
}

export { TabsRenderFunction }
