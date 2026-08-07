/**
 * ShadcnNavigationMenuLinkDemo
 * Bağlantı bileşeni — düz linkler (saf React, shadcn kaynaklı).
 * @id 856
 * @category Navigasyon
 * @subcategory ShadcnNavigationMenu
 * @source shadcn
 */
import {
  ShadcnNavigationMenu,
  ShadcnNavigationMenuItem,
  ShadcnNavigationMenuLink,
  ShadcnNavigationMenuList,
} from "@/components/ui/shadcn-navigation-menu"

function ShadcnNavigationMenuLinkDemo() {
  return (
    <ShadcnNavigationMenu>
      <ShadcnNavigationMenuList>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#" className="rounded-md px-3 py-2 font-medium hover:bg-muted">
            Documentation
          </ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#" className="rounded-md px-3 py-2 font-medium hover:bg-muted">
            Components
          </ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#" className="rounded-md px-3 py-2 font-medium hover:bg-muted">
            Themes
          </ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
      </ShadcnNavigationMenuList>
    </ShadcnNavigationMenu>
  )
}

export { ShadcnNavigationMenuLinkDemo }
