/**
 * ShadcnButtonWithIcon
 * İkonlu butonlar — inline-start/end (saf React, shadcn kaynaklı).
 * @id 751
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButton
 * @source shadcn
 */
import { GitBranch } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <ShadcnButton variant="outline">
        <GitBranch data-icon="inline-start" className="size-4" /> New Branch
      </ShadcnButton>
      <ShadcnButton variant="outline">
        Fork
        <GitBranch data-icon="inline-end" className="size-4" />
      </ShadcnButton>
    </div>
  )
}

export { ShadcnButtonWithIcon }
