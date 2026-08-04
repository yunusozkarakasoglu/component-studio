/**
 * CheckboxGroupFeatures
 * HeroUI Features and Add-ons örneği — ikonlu kart checkbox'lar (saf React).
 * @id 218
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import { Bell, Mail, MessageCircle } from "@/components/ui/icons"

const addOns = [
  { value: "email", icon: Mail, title: "Email Notifications", description: "Receive updates via email" },
  { value: "sms", icon: MessageCircle, title: "SMS Alerts", description: "Get instant SMS notifications" },
  { value: "push", icon: Bell, title: "Push Notifications", description: "Browser and mobile push alerts" },
]

function CheckboxGroupFeatures() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <CheckboxGroup name="notification-preferences" label="Notification preferences" description="Choose how you want to receive updates" className="w-full max-w-sm">
        {addOns.map((a) => (
          <Checkbox key={a.value} value={a.value} variant="secondary"
            className="rounded-2xl bg-muted/40 p-3 transition-colors has-data-[selected=true]:bg-blue-50"
            label={
              <span className="flex items-center gap-3">
                <a.icon className="size-5 shrink-0 text-muted-foreground" />
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{a.title}</span>
                  <span className="text-xs text-muted-foreground">{a.description}</span>
                </span>
              </span>
            }
          />
        ))}
      </CheckboxGroup>
    </div>
  )
}

export { CheckboxGroupFeatures }
