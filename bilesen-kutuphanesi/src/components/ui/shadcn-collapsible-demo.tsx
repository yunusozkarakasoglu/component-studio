/**
 * ShadcnCollapsibleDemo
 * Temel örnek — sipariş detayları (saf React, shadcn kaynaklı).
 * @id 932
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { ChevronsUpDown } from "@/components/ui/icons"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleDemo() {
  return (
    <ShadcnCollapsible className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Order #4189</h4>
        <ShadcnCollapsibleTrigger className="size-8 items-center justify-center rounded-md hover:bg-muted">
          <ChevronsUpDown className="size-4" />
          <span className="sr-only">Toggle details</span>
        </ShadcnCollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Shipped</span>
      </div>
      <ShadcnCollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Shipping address</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Tracking number</p>
          <p className="text-muted-foreground">1Z999AA10123456784</p>
        </div>
      </ShadcnCollapsibleContent>
    </ShadcnCollapsible>
  )
}

export { ShadcnCollapsibleDemo }
