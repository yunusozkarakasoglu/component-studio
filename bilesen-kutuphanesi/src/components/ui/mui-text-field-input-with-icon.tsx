/**
 * MuiTextFieldInputWithIcon
 * @id 1935
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"
import { Search, CircleUser, Lock } from "@/components/ui/icons"

function MuiTextFieldInputWithIcon() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Kullanıcı adı" startAdornment={<CircleUser className="size-5" />} defaultValue="yunus" />
      <MuiTextField label="Şifre" startAdornment={<Lock className="size-4" />} type="password" defaultValue="••••••" />
      <MuiTextField label="Ara" startAdornment={<Search className="size-4" />} placeholder="Ürün ara…" />
    </MuiStack>
  )
}

export { MuiTextFieldInputWithIcon }
