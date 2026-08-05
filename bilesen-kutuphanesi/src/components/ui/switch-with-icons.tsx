/**
 * SwitchWithIcons
 * İkonlu anahtarlar örneği (saf React).
 * İkonlar kendi setimizden (GravityUI karşılıkları).
 * @id 404
 * @category Seçim
 * @subcategory Switch
 */
import { Bell, BellOff, Check, Mic, MicOff, Moon, Power, Sun, Volume2, VolumeX } from "@/components/ui/icons"
import { Switch, SwitchContent, SwitchControl, SwitchIcon, SwitchThumb } from "@/components/ui/switch"

const icons = {
  check: { off: Power, on: Check, selectedClass: "bg-green-500/80" },
  darkMode: { off: Moon, on: Sun, selectedClass: "" },
  microphone: { off: Mic, on: MicOff, selectedClass: "bg-red-500/80" },
  notification: { off: BellOff, on: Bell, selectedClass: "bg-purple-500/80" },
  volume: { off: Volume2, on: VolumeX, selectedClass: "bg-blue-500/80" },
} as const

function SwitchWithIcons() {
  return (
    <div className="flex gap-3">
      {Object.entries(icons).map(([key, value]) => (
        <Switch key={key} defaultSelected aria-label={key} size="lg">
          {({ isSelected }) => (
            <SwitchContent>
              <SwitchControl className={isSelected ? value.selectedClass : ""}>
                <SwitchThumb>
                  <SwitchIcon>
                    {isSelected ? (
                      <value.on className="size-3 opacity-100" />
                    ) : (
                      <value.off className="size-3 opacity-70" />
                    )}
                  </SwitchIcon>
                </SwitchThumb>
              </SwitchControl>
            </SwitchContent>
          )}
        </Switch>
      ))}
    </div>
  )
}

export { SwitchWithIcons }
