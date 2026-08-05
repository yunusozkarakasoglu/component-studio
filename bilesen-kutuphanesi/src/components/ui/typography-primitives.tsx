/**
 * TypographyPrimitives
 * Temel tipografi örnekleri (saf React).
 * @id 604
 * @category Genel
 * @subcategory Typography
 */
import { Typography } from "@/components/ui/typography"

function TypographyPrimitives() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Typography as="h2">Page title</Typography>
      <Typography variant="lead">Leading paragraph — sets the tone for the content below.</Typography>
      <Typography as="p">
        Regular body text with <strong>strong</strong>, <em>emphasis</em> and{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">inline code</code>.
      </Typography>
      <Typography variant="small">Small muted text for captions and footnotes.</Typography>
    </div>
  )
}

export { TypographyPrimitives }
