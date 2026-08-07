/**
 * MtDividerDemo
 * Temel ayraç (saf React, Mantine kaynaklı).
 * @id 1029
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import { MtDivider } from "@/components/ui/mt-divider"

function MtDividerDemo() {
  return (
    <div className="max-w-sm text-sm">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <MtDivider className="my-4" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <MtDivider className="my-4" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  )
}

export { MtDividerDemo }
