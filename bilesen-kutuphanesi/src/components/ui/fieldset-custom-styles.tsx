/**
 * FieldsetCustomStyles
 * Özelleştirilmiş örnek — özel kabuk + alan stilleri (saf React).
 * @id 370
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

const shell =
  "rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white p-4 ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10"

const field =
  "rounded-xl border border-border/80 bg-background shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30"

function FieldsetCustomStyles() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset className={shell}>
        <FieldsetLegend className="font-medium text-neutral-800 dark:text-neutral-100">
          Profile Settings
        </FieldsetLegend>
        <Description className="text-neutral-600 dark:text-neutral-400">
          Update your profile information.
        </Description>
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
            <Input className={field} placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input className={field} placeholder="john@example.com" />
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
            <TextArea className={field} placeholder="Tell us about yourself..." />
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

export { FieldsetCustomStyles }
