/**
 * ShadcnBreadcrumbDemo
 * Temel örnek — menü düğmeli içerik yolu (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 847
 * @category Navigasyon
 * @subcategory ShadcnBreadcrumb
 * @source shadcn
 */
import {
  ShadcnBreadcrumb,
  ShadcnBreadcrumbEllipsis,
  ShadcnBreadcrumbItem,
  ShadcnBreadcrumbLink,
  ShadcnBreadcrumbList,
  ShadcnBreadcrumbPage,
  ShadcnBreadcrumbSeparator,
} from "@/components/ui/shadcn-breadcrumb"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

function ShadcnBreadcrumbDemo() {
  return (
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Home</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <Menu>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ShadcnBreadcrumbEllipsis />
            </button>
            <MenuPopover>
              <MenuList>
                <MenuItem id="documentation" textValue="Documentation">Documentation</MenuItem>
                <MenuItem id="themes" textValue="Themes">Themes</MenuItem>
                <MenuItem id="github" textValue="GitHub">GitHub</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Components</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage>
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export { ShadcnBreadcrumbDemo }
