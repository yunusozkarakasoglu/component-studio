/**
 * MtNavLinkDisabled
 * Devre dışı link (saf React, Mantine kaynaklı).
 * @id 1413
 * @category Navigasyon
 * @subcategory MtNavLink
 * @source mantine
 */
import { Home, Lock } from "@/components/ui/icons"
import { MtNavLink } from "@/components/ui/mt-nav-link"

function MtNavLinkDisabled() {
  return (
    <div className="flex w-56 flex-col gap-1">
      <MtNavLink label="Dashboard" leftSection={<Home className="size-4" />} active />
      <MtNavLink label="Restricted area" leftSection={<Lock className="size-4" />} disabled />
    </div>
  )
}

export { MtNavLinkDisabled }
