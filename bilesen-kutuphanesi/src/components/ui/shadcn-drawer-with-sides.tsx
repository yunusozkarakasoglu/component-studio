/**
 * ShadcnDrawerWithSides
 * Yönler — bottom, left, right, top (saf React, shadcn kaynaklı).
 * @id 828
 * @category Overlay
 * @subcategory ShadcnDrawer
 * @source shadcn
 */
import {
  ShadcnDrawer,
  ShadcnDrawerContent,
  ShadcnDrawerDescription,
  ShadcnDrawerHeader,
  ShadcnDrawerTitle,
  ShadcnDrawerTrigger,
} from "@/components/ui/shadcn-drawer"

function ShadcnDrawerWithSides() {
  const sides = [
    { id: "bottom", label: "Bottom" },
    { id: "left", label: "Left" },
    { id: "right", label: "Right" },
    { id: "top", label: "Top" },
  ] as const

  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((s) => (
        <ShadcnDrawer key={s.id}>
          <ShadcnDrawerTrigger>{s.label}</ShadcnDrawerTrigger>
          <ShadcnDrawerContent side={s.id} showHandle={s.id === "bottom"}>
            <ShadcnDrawerHeader>
              <ShadcnDrawerTitle>{s.label} drawer</ShadcnDrawerTitle>
              <ShadcnDrawerDescription>
                This drawer appears from the {s.label} side.
              </ShadcnDrawerDescription>
            </ShadcnDrawerHeader>
          </ShadcnDrawerContent>
        </ShadcnDrawer>
      ))}
    </div>
  )
}

export { ShadcnDrawerWithSides }
