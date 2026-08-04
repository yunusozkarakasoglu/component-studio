/**
 * CheckboxGroupCustomStyles
 * HeroUI Tailwind CSS örneği (saf React).
 * @id 220
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

const channels = [
  { label: "Email", value: "email" },
  { label: "SMS", value: "sms" },
  { label: "Push", value: "push" },
] as const

function CheckboxGroupCustomStyles() {
  return (
    <CheckboxGroup defaultValue={["email"]} name="notification-channels" label="Notification channels" description="Choose how we should reach you for account updates.">
      {channels.map((c) => (
        <Checkbox key={c.value} value={c.value} label={c.label} />
      ))}
    </CheckboxGroup>
  )
}

export { CheckboxGroupCustomStyles }
