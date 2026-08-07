/**
 * MtNavLinkWithDescription
 * Açıklamalı link (saf React, Mantine kaynaklı).
 * @id 1412
 * @category Navigasyon
 * @subcategory MtNavLink
 * @source mantine
 */
import { Mail, Phone } from "@/components/ui/icons"
import { MtNavLink } from "@/components/ui/mt-nav-link"

function MtNavLinkWithDescription() {
  return (
    <div className="flex w-64 flex-col gap-1">
      <MtNavLink label="Email" description="john@example.com" leftSection={<Mail className="size-4" />} active />
      <MtNavLink label="Phone" description="+1 555 000 00 00" leftSection={<Phone className="size-4" />} />
    </div>
  )
}

export { MtNavLinkWithDescription }
