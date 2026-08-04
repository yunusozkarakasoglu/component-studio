/**
 * TextFieldControlled
 * Kontrollü alan örneği (saf React).
 * value/onChange ile karakter sayacı senkronize edilir.
 * @id 293
 * @category Form Elemanları
 * @subcategory TextField
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { TextField } from "@/components/ui/text-field"

function TextFieldControlled() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <TextField name="name" value={name} onChange={setName}>
        <Label>Display name</Label>
        <Input placeholder="Jane" />
        <Description>Characters: {name.length}</Description>
      </TextField>
      <TextField name="bio" value={bio} onChange={setBio}>
        <Label>Bio</Label>
        <TextArea placeholder="Tell us about yourself..." />
        <Description>Characters: {bio.length} / 200</Description>
      </TextField>
    </div>
  )
}

export { TextFieldControlled }
