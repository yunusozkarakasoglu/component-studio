/**
 * ShadcnCollapsibleSettings
 * Ayarlar paneli — açılır bölümler (saf React, shadcn kaynaklı).
 * @id 935
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { ChevronDown } from "@/components/ui/icons"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleSettings() {
  return (
    <div className="w-[350px] space-y-3">
      <ShadcnCollapsible defaultOpen>
        <ShadcnCollapsibleTrigger className="w-full justify-between rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-muted">
          <span>Notifications</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </ShadcnCollapsibleTrigger>
        <ShadcnCollapsibleContent className="mt-2 space-y-3 rounded-md border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Email notifications</p>
              <p className="text-xs text-muted-foreground">Receive email updates</p>
            </div>
            <ShadcnSwitch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Push notifications</p>
              <p className="text-xs text-muted-foreground">Receive push updates</p>
            </div>
            <ShadcnSwitch />
          </div>
        </ShadcnCollapsibleContent>
      </ShadcnCollapsible>
    </div>
  )
}

export { ShadcnCollapsibleSettings }
