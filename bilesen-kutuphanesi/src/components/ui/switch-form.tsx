/**
 * SwitchForm
 * Form entegrasyonu örneği (saf React).
 * @id 413
 * @category Seçim
 * @subcategory Switch
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Switch, SwitchContent, SwitchControl, SwitchGroup, SwitchThumb } from "@/components/ui/switch"

function SwitchForm() {
  const [result, setResult] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const entries = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")
    setResult(entries || "(boş — hiçbir anahtar seçilmedi)")
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <SwitchGroup>
        <Switch name="notifications" value="on">
          <SwitchContent>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
            Enable notifications
          </SwitchContent>
        </Switch>
        <Switch defaultSelected name="newsletter" value="on">
          <SwitchContent>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
            Subscribe to newsletter
          </SwitchContent>
        </Switch>
        <Switch name="marketing" value="on">
          <SwitchContent>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
            Receive marketing updates
          </SwitchContent>
        </Switch>
      </SwitchGroup>
      <Button className="mt-4 w-fit" size="sm" type="submit" variant="primary">
        Submit
      </Button>
      {result && <pre className="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground">{result}</pre>}
    </form>
  )
}

export { SwitchForm }
