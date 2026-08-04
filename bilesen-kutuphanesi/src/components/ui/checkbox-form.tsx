/**
 * CheckboxForm
 * HeroUI Form Integration örneği (saf React).
 * @id 208
 * @category Checkbox
 */
import { useState, type FormEvent } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

function CheckboxForm() {
  const [msg, setMsg] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setMsg("Seçilenler: " + Array.from(data.entries()).map(([k]) => k).join(", ") || "hiçbiri")
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        <Checkbox name="notifications" label="Enable notifications" />
        <Checkbox defaultSelected name="newsletter" label="Subscribe to newsletter" />
        <Checkbox name="marketing" label="Receive marketing updates" />
      </div>
      <Button className="w-fit" size="sm" type="submit">Submit</Button>
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
    </form>
  )
}

export { CheckboxForm }
