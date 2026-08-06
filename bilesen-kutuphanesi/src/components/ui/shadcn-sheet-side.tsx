/**
 * ShadcnSheetSide
 * Yönler — left, right, top, bottom (saf React, shadcn kaynaklı).
 * @id 823
 * @category Overlay
 * @subcategory ShadcnSheet
 * @source shadcn
 */
import {
  ShadcnSheet,
  ShadcnSheetContent,
  ShadcnSheetDescription,
  ShadcnSheetHeader,
  ShadcnSheetTitle,
  ShadcnSheetTrigger,
} from "@/components/ui/shadcn-sheet"

function ShadcnSheetSide() {
  const sides = [
    { id: "left", label: "Left" },
    { id: "right", label: "Right" },
    { id: "top", label: "Top" },
    { id: "bottom", label: "Bottom" },
  ] as const

  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((s) => (
        <ShadcnSheet key={s.id}>
          <ShadcnSheetTrigger>{s.label}</ShadcnSheetTrigger>
          <ShadcnSheetContent side={s.id}>
            <ShadcnSheetHeader>
              <ShadcnSheetTitle>{s.label} sheet</ShadcnSheetTitle>
              <ShadcnSheetDescription>
                This sheet appears from the {s.label} side.
              </ShadcnSheetDescription>
            </ShadcnSheetHeader>
          </ShadcnSheetContent>
        </ShadcnSheet>
      ))}
    </div>
  )
}

export { ShadcnSheetSide }
