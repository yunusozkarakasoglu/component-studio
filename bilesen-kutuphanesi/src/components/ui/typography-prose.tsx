/**
 * TypographyProse
 * Prose (makale) düzeni örneği (saf React).
 * @id 605
 * @category Genel
 * @subcategory Typography
 */
import { Typography } from "@/components/ui/typography"

function TypographyProse() {
  return (
    <article className="flex w-full max-w-lg flex-col gap-4">
      <Typography as="h1">Getting Started</Typography>
      <Typography as="p">
        This guide walks you through the basics of building interfaces with the component library.
      </Typography>
      <Typography as="h3">Installation</Typography>
      <Typography as="p">
        Install the package and configure your bundler. The library ships with zero runtime
        dependencies beyond React.
      </Typography>
      <Typography as="h3">Usage</Typography>
      <Typography as="p">
        Import components and compose them. Every component is accessible and themeable out of the box.
      </Typography>
    </article>
  )
}

export { TypographyProse }
