/**
 * ShadcnNavigationMenuRtl
 * RTL örneği — Arapça navigasyon (saf React, shadcn kaynaklı).
 * @id 857
 * @category Navigasyon
 * @subcategory ShadcnNavigationMenu
 * @source shadcn
 */
import {
  ShadcnNavigationMenu,
  ShadcnNavigationMenuContent,
  ShadcnNavigationMenuItem,
  ShadcnNavigationMenuLink,
  ShadcnNavigationMenuList,
  ShadcnNavigationMenuTrigger,
} from "@/components/ui/shadcn-navigation-menu"

function ShadcnNavigationMenuRtl() {
  return (
    <ShadcnNavigationMenu dir="rtl">
      <ShadcnNavigationMenuList>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#">تعلم</ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem id="menu-rtl">
          <ShadcnNavigationMenuTrigger id="menu-rtl">المكونات</ShadcnNavigationMenuTrigger>
          <ShadcnNavigationMenuContent id="menu-rtl" className="w-48">
            <ShadcnNavigationMenuLink href="#">حوار التنبيه</ShadcnNavigationMenuLink>
            <ShadcnNavigationMenuLink href="#">بطاقة التمرير</ShadcnNavigationMenuLink>
            <ShadcnNavigationMenuLink href="#">علامات التبويب</ShadcnNavigationMenuLink>
          </ShadcnNavigationMenuContent>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#">جيت هاب</ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
      </ShadcnNavigationMenuList>
    </ShadcnNavigationMenu>
  )
}

export { ShadcnNavigationMenuRtl }
