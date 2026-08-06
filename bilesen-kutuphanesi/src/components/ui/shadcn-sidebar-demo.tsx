/**
 * ShadcnSidebarDemo
 * Temel örnek — uygulama yan menüsü (saf React, shadcn kaynaklı).
 * @id 832
 * @category Overlay
 * @subcategory ShadcnSidebar
 * @source shadcn
 */
import { Home, LogOut, Search, Settings, User } from "@/components/ui/icons"
import {
  ShadcnSidebar,
  ShadcnSidebarContent,
  ShadcnSidebarFooter,
  ShadcnSidebarGroup,
  ShadcnSidebarHeader,
  ShadcnSidebarInset,
  ShadcnSidebarMenu,
  ShadcnSidebarMenuButton,
  ShadcnSidebarMenuItem,
  ShadcnSidebarProvider,
  ShadcnSidebarTrigger,
} from "@/components/ui/shadcn-sidebar"

function ShadcnSidebarDemo() {
  return (
    <ShadcnSidebarProvider>
      <ShadcnSidebar>
        <ShadcnSidebarHeader>
          <ShadcnSidebarTrigger />
          <span className="ml-2 truncate text-sm font-semibold">Acme Inc</span>
        </ShadcnSidebarHeader>
        <ShadcnSidebarContent>
          <ShadcnSidebarGroup title="Main">
            <ShadcnSidebarMenu>
              <ShadcnSidebarMenuItem>
                <ShadcnSidebarMenuButton isActive>
                  <Home className="size-4 shrink-0" /> <span className="truncate">Dashboard</span>
                </ShadcnSidebarMenuButton>
              </ShadcnSidebarMenuItem>
              <ShadcnSidebarMenuItem>
                <ShadcnSidebarMenuButton>
                  <Search className="size-4 shrink-0" /> <span className="truncate">Search</span>
                </ShadcnSidebarMenuButton>
              </ShadcnSidebarMenuItem>
            </ShadcnSidebarMenu>
          </ShadcnSidebarGroup>
          <ShadcnSidebarGroup title="Account">
            <ShadcnSidebarMenu>
              <ShadcnSidebarMenuItem>
                <ShadcnSidebarMenuButton>
                  <User className="size-4 shrink-0" /> <span className="truncate">Profile</span>
                </ShadcnSidebarMenuButton>
              </ShadcnSidebarMenuItem>
              <ShadcnSidebarMenuItem>
                <ShadcnSidebarMenuButton>
                  <Settings className="size-4 shrink-0" /> <span className="truncate">Settings</span>
                </ShadcnSidebarMenuButton>
              </ShadcnSidebarMenuItem>
            </ShadcnSidebarMenu>
          </ShadcnSidebarGroup>
        </ShadcnSidebarContent>
        <ShadcnSidebarFooter>
          <ShadcnSidebarMenu>
            <ShadcnSidebarMenuItem>
              <ShadcnSidebarMenuButton>
                <LogOut className="size-4 shrink-0" /> <span className="truncate">Log out</span>
              </ShadcnSidebarMenuButton>
            </ShadcnSidebarMenuItem>
          </ShadcnSidebarMenu>
        </ShadcnSidebarFooter>
      </ShadcnSidebar>
      <ShadcnSidebarInset>
        <div className="flex h-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
          Main content area
        </div>
      </ShadcnSidebarInset>
    </ShadcnSidebarProvider>
  )
}

export { ShadcnSidebarDemo }
