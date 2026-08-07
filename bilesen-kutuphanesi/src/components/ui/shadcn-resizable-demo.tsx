/**
 * ShadcnResizableDemo
 * Temel örnek — iç içe paneller (saf React, shadcn kaynaklı).
 * @id 985
 * @category Genel
 * @subcategory ShadcnResizable
 * @source shadcn
 */
import {
  ShadcnResizableHandle,
  ShadcnResizablePanel,
  ShadcnResizablePanelGroup,
} from "@/components/ui/shadcn-resizable"

function ShadcnResizableDemo() {
  return (
    <ShadcnResizablePanelGroup orientation="horizontal" className="max-w-sm rounded-lg border">
      <ShadcnResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ShadcnResizablePanel>
      <ShadcnResizableHandle withHandle />
      <ShadcnResizablePanel defaultSize={50}>
        <ShadcnResizablePanelGroup orientation="vertical">
          <ShadcnResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ShadcnResizablePanel>
          <ShadcnResizableHandle withHandle />
          <ShadcnResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ShadcnResizablePanel>
        </ShadcnResizablePanelGroup>
      </ShadcnResizablePanel>
    </ShadcnResizablePanelGroup>
  )
}

export { ShadcnResizableDemo }
