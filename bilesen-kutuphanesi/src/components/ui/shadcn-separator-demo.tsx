/**
 * ShadcnSeparatorDemo
 * Temel örnek — yatay ayraç (saf React, shadcn kaynaklı).
 * @id 959
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

function ShadcnSeparatorDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">
          The Foundation for your Design System
        </div>
      </div>
      <ShadcnSeparator />
      <div>
        A set of beautifully designed components that you can customize, extend, and build on.
      </div>
    </div>
  )
}

export { ShadcnSeparatorDemo }
