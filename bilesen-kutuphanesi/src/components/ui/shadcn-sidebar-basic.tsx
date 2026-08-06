/**
 * ShadcnSidebarBasic
 * Basit daraltılabilir yan menü (saf React, shadcn kaynaklı).
 * @id 833
 * @category Overlay
 * @subcategory ShadcnSidebar
 * @source shadcn
 */
import {
  ShadcnSidebar,
  ShadcnSidebarContent,
  ShadcnSidebarGroup,
  ShadcnSidebarHeader,
  ShadcnSidebarInset,
  ShadcnSidebarMenu,
  ShadcnSidebarMenuButton,
  ShadcnSidebarMenuItem,
  ShadcnSidebarProvider,
  ShadcnSidebarTrigger,
} from "@/components/ui/shadcn-sidebar"

function ShadcnSidebarBasic() {
  const items = ["Overview", "Projects", "Tasks", "Reports", "Analytics"]

  return (
    <ShadcnSidebarProvider>
      <ShadcnSidebar>
        <ShadcnSidebarHeader>
          <ShadcnSidebarTrigger />
        </ShadcnSidebarHeader>
        <ShadcnSidebarContent>
          <ShadcnSidebarGroup title="Navigation">
            <ShadcnSidebarMenu>
              {items.map((item, i) => (
                <ShadcnSidebarMenuItem key={item}>
                  <ShadcnSidebarMenuButton isActive={i === 0}>
                    <span className="truncate">{item}</span>
                  </ShadcnSidebarMenuButton>
                </ShadcnSidebarMenuItem>
              ))}
            </ShadcnSidebarMenu>
          </ShadcnSidebarGroup>
        </ShadcnSidebarContent>
      </ShadcnSidebar>
      <ShadcnSidebarInset>
        <div className="flex h-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
          Click the trigger to collapse
        </div>
      </ShadcnSidebarInset>
    </ShadcnSidebarProvider>
  )
}

export { ShadcnSidebarBasic }
