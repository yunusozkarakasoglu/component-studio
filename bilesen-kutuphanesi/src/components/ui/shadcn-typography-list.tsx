/**
 * ShadcnTypographyList
 * Liste (saf React, shadcn kaynaklı).
 * @id 972
 * @category Genel
 * @subcategory ShadcnTypography
 * @source shadcn
 */
import { ShadcnTypographyP } from "@/components/ui/shadcn-typography"

function ShadcnTypographyList() {
  return (
    <div>
      <ShadcnTypographyP>The joke tax rates:</ShadcnTypographyP>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </ul>
    </div>
  )
}

export { ShadcnTypographyList }
