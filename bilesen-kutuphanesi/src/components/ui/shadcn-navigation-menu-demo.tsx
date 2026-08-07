/**
 * ShadcnNavigationMenuDemo
 * Temel örnek — öğren + bileşenler + github (saf React, shadcn kaynaklı).
 * @id 855
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

const components: { title: string; description: string }[] = [
  { title: "Alert Dialog", description: "A modal dialog that interrupts the user with important content." },
  { title: "Hover Card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", description: "Displays an indicator showing the completion progress of a task." },
  { title: "Tabs", description: "A set of layered sections of content displayed one at a time." },
]

function ShadcnNavigationMenuDemo() {
  return (
    <ShadcnNavigationMenu>
      <ShadcnNavigationMenuList>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#">Learn</ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem id="components">
          <ShadcnNavigationMenuTrigger id="components">Components</ShadcnNavigationMenuTrigger>
          <ShadcnNavigationMenuContent id="components" className="w-[24rem]">
            <ul className="grid gap-1 p-2">
              {components.map((c) => (
                <li key={c.title}>
                  <a href="#" className="block rounded-md px-3 py-2 transition-colors hover:bg-muted">
                    <div className="text-sm font-medium text-foreground">{c.title}</div>
                    <p className="text-xs text-muted-foreground">{c.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </ShadcnNavigationMenuContent>
        </ShadcnNavigationMenuItem>
        <ShadcnNavigationMenuItem>
          <ShadcnNavigationMenuLink href="#">GitHub</ShadcnNavigationMenuLink>
        </ShadcnNavigationMenuItem>
      </ShadcnNavigationMenuList>
    </ShadcnNavigationMenu>
  )
}

export { ShadcnNavigationMenuDemo }
