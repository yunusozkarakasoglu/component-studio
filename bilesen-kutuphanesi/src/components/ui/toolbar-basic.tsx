/**
 * ToolbarBasic
 * Temel örnek: metin biçimlendirme araç çubuğu (saf React).
 * Separator gelmediği için bölücüler inline span ile.
 * @id 514
 * @category Butonlar & Aksiyonlar
 * @subcategory Toolbar
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Bold, Copy, Italic, Scissors, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"
import { Toolbar } from "@/components/ui/toolbar"

const VSeparator = () => <span className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />

function ToolbarBasic() {
  return (
    <Toolbar aria-label="Text formatting">
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" id="bold">
          <Bold className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" id="italic">
          <ToggleButtonGroupSeparator />
          <Italic className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" id="underline">
          <ToggleButtonGroupSeparator />
          <Underline className="size-4" />
        </ToggleButton>
      </ToggleButtonGroup>
      <VSeparator />
      <ButtonGroup variant="tertiary">
        <Button isIconOnly aria-label="Copy">
          <Copy className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Cut">
          <ButtonGroupSeparator />
          <Scissors className="size-4" />
        </Button>
      </ButtonGroup>
    </Toolbar>
  )
}

export { ToolbarBasic }
