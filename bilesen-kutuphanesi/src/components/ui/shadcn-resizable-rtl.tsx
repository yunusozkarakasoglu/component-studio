/**
 * ShadcnResizableRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 988
 * @category Genel
 * @subcategory ShadcnResizable
 * @source shadcn
 */
import {
  ShadcnResizableHandle,
  ShadcnResizablePanel,
  ShadcnResizablePanelGroup,
} from "@/components/ui/shadcn-resizable"

function ShadcnResizableRtl() {
  return (
    <ShadcnResizablePanelGroup orientation="horizontal" className="max-w-sm rounded-lg border" dir="rtl">
      <ShadcnResizablePanel defaultSize={50}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-semibold">يمين</span>
        </div>
      </ShadcnResizablePanel>
      <ShadcnResizableHandle withHandle />
      <ShadcnResizablePanel defaultSize={50}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-semibold">يسار</span>
        </div>
      </ShadcnResizablePanel>
    </ShadcnResizablePanelGroup>
  )
}

export { ShadcnResizableRtl }
