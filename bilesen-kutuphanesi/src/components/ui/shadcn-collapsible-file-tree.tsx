/**
 * ShadcnCollapsibleFileTree
 * Dosya ağacı — iç içe açılır (saf React, shadcn kaynaklı).
 * @id 936
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { ChevronRight, FileText, Folder } from "@/components/ui/icons"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleFileTree() {
  return (
    <div className="w-72 rounded-md border p-2 font-mono text-sm">
      <ShadcnCollapsible defaultOpen>
        <ShadcnCollapsibleTrigger className="w-full items-center rounded-md px-2 py-1 hover:bg-muted">
          <ChevronRight className="size-4 text-muted-foreground" />
          <Folder className="size-4 text-amber-500" />
          <span>src</span>
        </ShadcnCollapsibleTrigger>
        <ShadcnCollapsibleContent className="pl-6">
          <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted">
            <FileText className="size-4 text-blue-500" />
            <span>App.tsx</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted">
            <FileText className="size-4 text-blue-500" />
            <span>main.tsx</span>
          </div>
          <ShadcnCollapsible>
            <ShadcnCollapsibleTrigger className="w-full items-center rounded-md px-2 py-1 hover:bg-muted">
              <ChevronRight className="size-4 text-muted-foreground" />
              <Folder className="size-4 text-amber-500" />
              <span>components</span>
            </ShadcnCollapsibleTrigger>
            <ShadcnCollapsibleContent className="pl-6">
              <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted">
                <FileText className="size-4 text-blue-500" />
                <span>button.tsx</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted">
                <FileText className="size-4 text-blue-500" />
                <span>card.tsx</span>
              </div>
            </ShadcnCollapsibleContent>
          </ShadcnCollapsible>
        </ShadcnCollapsibleContent>
      </ShadcnCollapsible>
    </div>
  )
}

export { ShadcnCollapsibleFileTree }
