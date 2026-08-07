/**
 * ShadcnSeparatorMenu
 * Menü içinde ayraç (saf React, shadcn kaynaklı).
 * @id 961
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

function ShadcnSeparatorMenu() {
  return (
    <div className="w-48 rounded-lg border border-border p-1 text-sm">
      <div className="cursor-pointer rounded-md px-2.5 py-1.5 hover:bg-muted">Profile</div>
      <div className="cursor-pointer rounded-md px-2.5 py-1.5 hover:bg-muted">Settings</div>
      <ShadcnSeparator className="my-1" />
      <div className="cursor-pointer rounded-md px-2.5 py-1.5 hover:bg-muted">Help</div>
      <div className="cursor-pointer rounded-md px-2.5 py-1.5 hover:bg-muted">Log out</div>
    </div>
  )
}

export { ShadcnSeparatorMenu }
