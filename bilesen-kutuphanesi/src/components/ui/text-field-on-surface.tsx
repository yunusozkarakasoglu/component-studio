/**
 * TextFieldOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * Surface bileşeni olmadığından yüzey div ile simüle edilir.
 * @id 287
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Description } from "@/components/ui/description"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { TextField } from "@/components/ui/text-field"

function TextFieldOnSurface() {
  return (
    <div className="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl bg-muted/40 p-6">
      <TextField name="name" variant="secondary">
        <Label>Your name</Label>
        <Input className="w-full" placeholder="John" />
        <Description>We&apos;ll never share this with anyone else</Description>
      </TextField>
      <TextField name="email" type="email" variant="secondary">
        <Label>Email</Label>
        <Input className="w-full" placeholder="john@example.com" />
      </TextField>
      <TextField name="bio" variant="secondary">
        <Label>Bio</Label>
        <TextArea className="w-full" placeholder="Tell us about yourself..." rows={4} />
        <Description>Minimum 4 rows</Description>
      </TextField>
    </div>
  )
}

export { TextFieldOnSurface }
