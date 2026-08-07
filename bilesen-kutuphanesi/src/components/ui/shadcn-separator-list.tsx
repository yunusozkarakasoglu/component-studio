/**
 * ShadcnSeparatorList
 * Liste içinde ayraç (saf React, shadcn kaynaklı).
 * @id 962
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

function ShadcnSeparatorList() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border text-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-medium">Update</span>
        <span className="text-muted-foreground">2 minutes ago</span>
      </div>
      <ShadcnSeparator />
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-medium">Delete</span>
        <span className="text-muted-foreground">1 hour ago</span>
      </div>
      <ShadcnSeparator />
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-medium">Create</span>
        <span className="text-muted-foreground">Yesterday</span>
      </div>
    </div>
  )
}

export { ShadcnSeparatorList }
