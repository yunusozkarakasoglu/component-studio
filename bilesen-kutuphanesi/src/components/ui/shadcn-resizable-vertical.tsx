/**
 * ShadcnResizableVertical
 * Dikey paneller (saf React, shadcn kaynaklı).
 * @id 986
 * @category Genel
 * @subcategory ShadcnResizable
 * @source shadcn
 */
import {
  ShadcnResizableHandle,
  ShadcnResizablePanel,
  ShadcnResizablePanelGroup,
} from "@/components/ui/shadcn-resizable"

function ShadcnResizableVertical() {
  return (
    <ShadcnResizablePanelGroup orientation="vertical" className="max-w-sm rounded-lg border">
      <ShadcnResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ShadcnResizablePanel>
      <ShadcnResizableHandle withHandle />
      <ShadcnResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ShadcnResizablePanel>
    </ShadcnResizablePanelGroup>
  )
}

export { ShadcnResizableVertical }
