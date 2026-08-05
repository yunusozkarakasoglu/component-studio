/**
 * FormCustomStyles
 * Özelleştirilmiş form örneği (saf React).
 * @id 374
 * @category Form Elemanları
 * @subcategory Form
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function FormCustomStyles() {
  const [result, setResult] = useState("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setResult(`Submitted: ${formData.get("email")}`)
  }

  return (
    <Form
      className="flex w-80 flex-col gap-3 rounded-xl border border-border/80 bg-background p-4 shadow-sm"
      onSubmit={onSubmit}
    >
      <TextField isRequired name="email" type="email">
        <Label>Work email</Label>
        <Input className="bg-muted/60" placeholder="you@company.com" />
      </TextField>
      <Button className="w-full" type="submit">
        Continue
      </Button>
      {result && <p className="text-xs text-muted-foreground">{result}</p>}
    </Form>
  )
}

export { FormCustomStyles }
