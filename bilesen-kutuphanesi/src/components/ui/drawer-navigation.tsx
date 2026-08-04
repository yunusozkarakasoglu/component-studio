/**
 * DrawerNavigation
 * Sol navigasyon paneli örneği (saf React).
 * İkonlar kendi setimizden (Menu/Bell/Mail/Settings/Home/Search/User).
 * @id 282
 * @category Panel & Drawer
 */
import type { ComponentType, SVGProps } from "react"
import { Bell, Home, Mail, Menu, Search, Settings, User } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerDialog, DrawerHeader, DrawerHeading } from "@/components/ui/drawer"

interface NavItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
]

function DrawerNavigation() {
  return (
    <Drawer>
      <Button variant="secondary">
        <Menu />
        Menu
      </Button>
      <DrawerBackdrop>
        <DrawerContent placement="left">
          <DrawerDialog>
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Navigation</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <item.icon className="size-5 text-muted-foreground" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  )
}

export { DrawerNavigation }
