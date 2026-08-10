/**
 * MuiBadgeBasic
 * @id 2015
 * @category Veri Gösterimi
 * @subcategory MuiBadge
 * @source mui
 */
import { MuiBadge } from "@/components/ui/mui-badge"
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { MuiStack } from "@/components/ui/mui-stack"
import { Bell, Mail, ShoppingCart } from "@/components/ui/icons"

function MuiBadgeBasic() {
  return (
    <MuiStack direction="row" spacing={4} className="items-center">
      <MuiBadge badgeContent={4} color="error">
        <MuiIconButton aria-label="Bildirimler"><Bell className="size-5" /></MuiIconButton>
      </MuiBadge>
      <MuiBadge badgeContent={12} color="primary" max={9}>
        <MuiIconButton aria-label="Mesajlar"><Mail className="size-5" /></MuiIconButton>
      </MuiBadge>
      <MuiBadge badgeContent={3} color="success" variant="dot">
        <MuiIconButton aria-label="Sepet"><ShoppingCart className="size-5" /></MuiIconButton>
      </MuiBadge>
    </MuiStack>
  )
}

export { MuiBadgeBasic }
