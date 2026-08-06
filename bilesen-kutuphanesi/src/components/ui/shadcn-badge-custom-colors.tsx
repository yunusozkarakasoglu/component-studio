/**
 * ShadcnBadgeCustomColors
 * Özel renkler (saf React, shadcn kaynaklı).
 * @id 780
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge className="bg-blue-100 text-blue-700">Blue</ShadcnBadge>
      <ShadcnBadge className="bg-green-100 text-green-700">Green</ShadcnBadge>
      <ShadcnBadge className="bg-sky-100 text-sky-700">Sky</ShadcnBadge>
      <ShadcnBadge className="bg-purple-100 text-purple-700">Purple</ShadcnBadge>
      <ShadcnBadge className="bg-red-100 text-red-700">Red</ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeCustomColors }
