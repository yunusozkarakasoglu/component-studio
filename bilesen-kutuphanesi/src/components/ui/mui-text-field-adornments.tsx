/**
 * MuiTextFieldAdornments
 * @id 1925
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"
import { Search, Mail, Lock } from "@/components/ui/icons"

function MuiTextFieldAdornments() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Ara" startAdornment={<Search className="size-4" />} placeholder="Ara…" />
      <MuiTextField label="E-posta" startAdornment={<Mail className="size-4" />} placeholder="ornek@site.com" />
      <MuiTextField label="Şifre" startAdornment={<Lock className="size-4" />} type="password" placeholder="••••••" />
    </MuiStack>
  )
}

export { MuiTextFieldAdornments }
