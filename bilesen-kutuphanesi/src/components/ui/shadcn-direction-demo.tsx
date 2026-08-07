/**
 * ShadcnDirectionDemo
 * Yön değiştirme örneği (saf React, shadcn kaynaklı).
 * @id 1000
 * @category Genel
 * @subcategory ShadcnDirection
 * @source shadcn
 */
import { useShadcnDirection } from "@/components/ui/shadcn-direction"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnDirectionDemo() {
  const { dir, toggle } = useShadcnDirection("ltr")

  return (
    <div className="flex flex-col items-start gap-3" dir={dir}>
      <ShadcnButton onClick={toggle} variant="outline">
        Toggle Direction ({dir.toUpperCase()})
      </ShadcnButton>
      <p className="max-w-xs text-sm text-muted-foreground">
        {dir === "ltr"
          ? "This text flows left to right. Click the button to switch to RTL."
          : "هذا النص يتدفق من اليمين إلى اليسار. اضغط الزر للتبديل إلى LTR."}
      </p>
    </div>
  )
}

export { ShadcnDirectionDemo }
