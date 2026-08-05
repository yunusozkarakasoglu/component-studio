/**
 * TypographyCustomStyles
 * Özelleştirilmiş tipografi örneği (saf React).
 * @id 607
 * @category Genel
 * @subcategory Typography
 */
import { Typography } from "@/components/ui/typography"

function TypographyCustomStyles() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-background p-5">
      <Typography as="h2" className="text-2xl font-bold text-neutral-800">Custom heading</Typography>
      <Typography as="p" className="mt-2 text-neutral-600">
        Styled with custom utility classes — sizing, weight, color and spacing are fully controlled
        via className.
      </Typography>
    </div>
  )
}

export { TypographyCustomStyles }
