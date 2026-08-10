/**
 * MuiLinkBasic
 * @id 2031
 * @category Navigasyon
 * @subcategory MuiLink
 * @source mui
 */
import { MuiLink } from "@/components/ui/mui-link"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiLinkBasic() {
  return (
    <MuiStack direction="row" spacing={4} className="flex-wrap">
      <MuiLink href="#" underline="hover">Hover'da alt çizgi</MuiLink>
      <MuiLink href="#" underline="always">Her zaman alt çizgi</MuiLink>
      <MuiLink href="#" underline="none">Alt çizgisiz</MuiLink>
      <MuiLink href="#" color="secondary">Secondary</MuiLink>
    </MuiStack>
  )
}

export { MuiLinkBasic }
