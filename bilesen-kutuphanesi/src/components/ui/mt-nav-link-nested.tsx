/**
 * MtNavLinkNested
 * Alt linkler (saf React, Mantine kaynaklı).
 * @id 1411
 * @category Navigasyon
 * @subcategory MtNavLink
 * @source mantine
 */
import { FileText, Folder } from "@/components/ui/icons"
import { MtNavLink } from "@/components/ui/mt-nav-link"

function MtNavLinkNested() {
  return (
    <div className="flex w-64 flex-col gap-1">
      <MtNavLink label="Projects" leftSection={<Folder className="size-4" />}>
        <MtNavLink label="Project A" leftSection={<FileText className="size-3.5" />} />
        <MtNavLink label="Project B" leftSection={<FileText className="size-3.5" />} />
      </MtNavLink>
      <MtNavLink label="Documents" leftSection={<FileText className="size-4" />} />
    </div>
  )
}

export { MtNavLinkNested }
