/**
 * FieldsetBasic
 * Temel örnek: profil ayarları formu — doğrulamalı (saf React).
 * FieldError children'sız kullanılır — validate hata mesajı otomatik gelir.
 * @id 368
 * @category Form Elemanları
 * @subcategory Fieldset
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { FieldError } from "@/components/ui/field-error"
import { Fieldset, FieldsetActions, FieldsetGroup, FieldsetLegend } from "@/components/ui/fieldset"
import { Save } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { TextField } from "@/components/ui/text-field"

function FieldsetBasic() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <FieldsetLegend>Profile Settings</FieldsetLegend>
        <Description>Update your profile information.</Description>
        <FieldsetGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) return "Name must be at least 3 characters"
              return null
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="bio"
            validate={(value) => {
              if (value.length < 10) return "Bio must be at least 10 characters"
              return null
            }}
          >
            <Label>Bio</Label>
            <TextArea placeholder="Tell us about yourself..." />
            <Description>Minimum 10 characters</Description>
            <FieldError />
          </TextField>
        </FieldsetGroup>
        <FieldsetActions>
          <Button type="submit">
            <Save />
            {submitted ? "Saved!" : "Save changes"}
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </FieldsetActions>
      </Fieldset>
    </form>
  )
}

export { FieldsetBasic }
