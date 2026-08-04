/**
 * ChipVariants
 * Variants örneği — size × variant × color matrisi (sadeleştirilmiş, saf React).
 * @id 223
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import { Chip, ChipLabel } from "@/components/ui/chip"

const sizes = ["sm", "md", "lg"] as const
const variants = ["primary", "secondary", "tertiary", "soft"] as const
const colors = ["accent", "default", "success", "warning", "danger"] as const

function ChipVariants() {
  return (
    <div className="flex flex-col gap-6 overflow-x-auto">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold capitalize text-muted-foreground">{size}</h3>
          <div className="flex items-start gap-3">
            <div className="w-20 shrink-0 text-sm capitalize text-muted-foreground" />
            {variants.map((variant) => (
              <div key={variant} className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">{variant}</span>
                {colors.map((color) => (
                  <Chip key={color} color={color} size={size} variant={variant}>
                    <ChipLabel>Label</ChipLabel>
                  </Chip>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { ChipVariants }
