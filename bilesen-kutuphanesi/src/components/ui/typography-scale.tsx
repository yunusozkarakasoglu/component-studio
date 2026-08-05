/**
 * TypographyScale
 * Tipografi ölçeği örneği: h1-h6 + p (saf React).
 * @id 603
 * @category Genel
 * @subcategory Typography
 */
import { Typography } from "@/components/ui/typography"

function TypographyScale() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Typography as="h1">Başlık 1</Typography>
      <Typography as="h2">Başlık 2</Typography>
      <Typography as="h3">Başlık 3</Typography>
      <Typography as="h4">Başlık 4</Typography>
      <Typography as="h5">Başlık 5</Typography>
      <Typography as="h6">Başlık 6</Typography>
      <Typography as="p">Paragraf metni</Typography>
    </div>
  )
}

export { TypographyScale }
