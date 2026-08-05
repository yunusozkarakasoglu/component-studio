/**
 * FormBasic
 * Temel örnek: e-posta + şifre doğrulamalı form (saf React).
 * @id 372
 * @category Form Elemanları
 * @subcategory Form
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { FieldError } from "@/components/ui/field-error"
import { Form } from "@/components/ui/form"
import { Check } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function FormBasic() {
  const [result, setResult] = useState("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })
    setResult(`Submitted: ${data.email} / ${"*".repeat(data.password?.length ?? 0)}`)
  }

  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address"
          }
          return null
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) return "Password must be at least 8 characters"
          if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter"
          if (!/[0-9]/.test(value)) return "Password must contain at least one number"
          return null
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      {result && <p className="text-xs text-muted-foreground">{result}</p>}
    </Form>
  )
}

export { FormBasic }
