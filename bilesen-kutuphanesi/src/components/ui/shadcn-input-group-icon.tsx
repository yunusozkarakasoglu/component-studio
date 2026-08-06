/**
 * ShadcnInputGroupIcon
 * İkon çeşitleri — arama, e-posta, kart, yıldız/bilgi (saf React, shadcn kaynaklı).
 * @id 668
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Check, CreditCard, Info, Mail, Search, Star } from "@/components/ui/icons"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Search..." />
        <ShadcnInputGroupAddon>
          <Search className="size-4" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput type="email" placeholder="Enter your email" />
        <ShadcnInputGroupAddon>
          <Mail className="size-4" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Card number" />
        <ShadcnInputGroupAddon>
          <CreditCard className="size-4" />
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupAddon align="inline-end">
          <Check className="size-4 text-green-600" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Card number" />
        <ShadcnInputGroupAddon align="inline-end">
          <Star className="size-4" />
          <Info className="size-4" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupIcon }
