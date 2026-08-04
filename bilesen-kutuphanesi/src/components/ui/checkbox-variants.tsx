/**
 * CheckboxVariants
 * Variants örneği — primary/secondary (saf React).
 * @id 199
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Primary variant</p>
        <Checkbox label="Primary checkbox" description="Standard styling with default background" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Secondary variant</p>
        <Checkbox variant="secondary" label="Secondary checkbox" description="Lower emphasis variant for use in surfaces" />
      </div>
    </div>
  )
}

export { CheckboxVariants }
