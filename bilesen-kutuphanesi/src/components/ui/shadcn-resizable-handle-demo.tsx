/**
 * ShadcnResizableHandleDemo
 * Tutamaçsız ayraç (saf React, shadcn kaynaklı).
 * @id 987
 * @category Genel
 * @subcategory ShadcnResizable
 * @source shadcn
 */
import {
  ShadcnResizableHandle,
  ShadcnResizablePanel,
  ShadcnResizablePanelGroup,
} from "@/components/ui/shadcn-resizable"

function ShadcnResizableHandleDemo() {
  return (
    <ShadcnResizablePanelGroup orientation="horizontal" className="max-w-sm rounded-lg border">
      <ShadcnResizablePanel defaultSize={40}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-semibold">A</span>
        </div>
      </ShadcnResizablePanel>
      <ShadcnResizableHandle />
      <ShadcnResizablePanel defaultSize={60}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-semibold">B</span>
        </div>
      </ShadcnResizablePanel>
    </ShadcnResizablePanelGroup>
  )
}

export { ShadcnResizableHandleDemo }
