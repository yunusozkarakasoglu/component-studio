/**
 * FieldsetOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * @id 369
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

function FieldsetOnSurface() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="flex items-center justify-center rounded-3xl bg-muted/40 p-6">
      <form className="w-full min-w-[380px]" onSubmit={onSubmit}>
        <Fieldset className="w-full">
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
              <Input placeholder="John Doe" variant="secondary" />
              <FieldError />
            </TextField>
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" variant="secondary" />
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
              <TextArea placeholder="Tell us about yourself..." variant="secondary" />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldsetGroup>
          <FieldsetActions>
            <Button type="submit">
              <Save />
              {submitted ? "Saved!" : "Save changes"}
            </Button>
            <Button type="reset" variant="tertiary">
              Cancel
            </Button>
          </FieldsetActions>
        </Fieldset>
      </form>
    </div>
  )
}

export { FieldsetOnSurface }
