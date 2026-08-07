/**
 * ShadcnCollapsibleBasic
 * Temel açılır panel (saf React, shadcn kaynaklı).
 * @id 934
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { ChevronDown } from "@/components/ui/icons"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleBasic() {
  return (
    <ShadcnCollapsible className="w-[350px]">
      <ShadcnCollapsibleTrigger className="w-full justify-between rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
        <span>Show more details</span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </ShadcnCollapsibleTrigger>
      <ShadcnCollapsibleContent className="mt-2 rounded-md border px-4 py-3 text-sm text-muted-foreground">
        <p>Here are some additional details about this item.</p>
        <p className="mt-2">You can add any content inside the collapsible.</p>
      </ShadcnCollapsibleContent>
    </ShadcnCollapsible>
  )
}

export { ShadcnCollapsibleBasic }
