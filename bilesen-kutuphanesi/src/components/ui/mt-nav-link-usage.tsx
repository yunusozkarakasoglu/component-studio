/**
 * MtNavLinkUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1410
 * @category Navigasyon
 * @subcategory MtNavLink
 * @source mantine
 */
import { Home, Settings, User } from "@/components/ui/icons"
import { MtNavLink } from "@/components/ui/mt-nav-link"

function MtNavLinkUsage() {
  return (
    <div className="flex w-56 flex-col gap-1">
      <MtNavLink label="Dashboard" leftSection={<Home className="size-4" />} active />
      <MtNavLink label="Account" leftSection={<User className="size-4" />} />
      <MtNavLink label="Settings" leftSection={<Settings className="size-4" />} />
    </div>
  )
}

export { MtNavLinkUsage }
