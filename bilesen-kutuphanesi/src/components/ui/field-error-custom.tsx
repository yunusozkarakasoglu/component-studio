/**
 * FieldErrorCustom
 * Özel doğrulama örneği: e-posta @ kontrolü (saf React).
 * @id 380
 * @category Form Elemanları
 * @subcategory FieldError
 */
import { useState } from "react"
import { FieldError } from "@/components/ui/field-error"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function FieldErrorCustom() {
  const [email, setEmail] = useState("")
  const isInvalid = email.length > 0 && !email.includes("@")

  return (
    <TextField className="w-64" isInvalid={isInvalid} value={email} onChange={setEmail}>
      <Label>Email</Label>
      <Input type="email" placeholder="user@example.com" />
      <FieldError>Email must include @ symbol</FieldError>
    </TextField>
  )
}

export { FieldErrorCustom }
