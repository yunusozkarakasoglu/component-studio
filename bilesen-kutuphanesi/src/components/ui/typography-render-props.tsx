/**
 * TypographyRenderProps
 * as prop ile render örneği (saf React).
 * @id 606
 * @category Genel
 * @subcategory Typography
 */
import { Typography } from "@/components/ui/typography"

function TypographyRenderProps() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Typography as="span" variant="muted">span olarak render edilen metin</Typography>
      <Typography as="h4" className="text-blue-700">Özel renkli başlık</Typography>
      <Typography as="p" className="font-mono text-sm">Monospace paragraf</Typography>
    </div>
  )
}

export { TypographyRenderProps }
