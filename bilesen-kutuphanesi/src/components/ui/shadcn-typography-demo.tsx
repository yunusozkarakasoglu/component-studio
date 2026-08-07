/**
 * ShadcnTypographyDemo
 * Temel örnek — makale düzeni (saf React, shadcn kaynaklı).
 * @id 965
 * @category Genel
 * @subcategory ShadcnTypography
 * @source shadcn
 */
import {
  ShadcnTypographyBlockquote,
  ShadcnTypographyH1,
  ShadcnTypographyH2,
  ShadcnTypographyH3,
  ShadcnTypographyP,
} from "@/components/ui/shadcn-typography"

function ShadcnTypographyDemo() {
  return (
    <div>
      <ShadcnTypographyH1>Taxing Laughter: The Joke Tax Chronicles</ShadcnTypographyH1>
      <ShadcnTypographyP>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
      </ShadcnTypographyP>
      <ShadcnTypographyH2>The King&apos;s Plan</ShadcnTypographyH2>
      <ShadcnTypographyP>
        The king thought long and hard, and finally came up with{" "}
        <a href="#" className="font-medium underline underline-offset-4">a brilliant plan</a>:
        he would tax the jokes in the kingdom.
      </ShadcnTypographyP>
      <ShadcnTypographyBlockquote>
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that they should pay for the privilege.&quot;
      </ShadcnTypographyBlockquote>
      <ShadcnTypographyH3>The Joke Tax</ShadcnTypographyH3>
      <ShadcnTypographyP>The king&apos;s subjects were not amused.</ShadcnTypographyP>
    </div>
  )
}

export { ShadcnTypographyDemo }
