/**
 * ToolbarCustomStyles
 * Özelleştirilmiş araç çubuğu örneği (saf React).
 * @id 518
 * @category Butonlar & Aksiyonlar
 * @subcategory Toolbar
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group"
import { Toolbar } from "@/components/ui/toolbar"

const toggleClass = "rounded-lg data-[selected=true]:bg-blue-600 data-[selected=true]:text-white"

function ToolbarCustomStyles() {
  return (
    <Toolbar
      aria-label="Formatting toolbar"
      className="gap-1 rounded-xl border border-border/80 bg-muted/40 p-1.5"
    >
      <ToggleButtonGroup aria-label="Text style" className="gap-0.5" selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" className={toggleClass} id="bold-cs">
          <Bold className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" className={toggleClass} id="italic-cs">
          <Italic className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" className={toggleClass} id="underline-cs">
          <Underline className="size-4" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Toolbar>
  )
}

export { ToolbarCustomStyles }
