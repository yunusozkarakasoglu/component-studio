/**
 * ToolbarWithButtonGroup
 * ButtonGroup'lu örnek — düzenleyici araç çubuğu (saf React).
 * @id 517
 * @category Butonlar & Aksiyonlar
 * @subcategory Toolbar
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Redo, Underline, Undo } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"
import { Toolbar } from "@/components/ui/toolbar"

const VSeparator = () => <span className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />

function ToolbarWithButtonGroup() {
  return (
    <Toolbar aria-label="Editor toolbar">
      <ButtonGroup variant="tertiary">
        <Button>
          <Undo className="size-4" />
          Undo
        </Button>
        <Button>
          <ButtonGroupSeparator />
          <Redo className="size-4" />
          Redo
        </Button>
      </ButtonGroup>
      <VSeparator />
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" id="bold-tb">
          <Bold className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" id="italic-tb">
          <ToggleButtonGroupSeparator />
          <Italic className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" id="underline-tb">
          <ToggleButtonGroupSeparator />
          <Underline className="size-4" />
        </ToggleButton>
      </ToggleButtonGroup>
      <VSeparator />
      <ButtonGroup variant="tertiary">
        <Button isIconOnly aria-label="Align left">
          <AlignLeft className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Align center">
          <ButtonGroupSeparator />
          <AlignCenter className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Align right">
          <ButtonGroupSeparator />
          <AlignRight className="size-4" />
        </Button>
      </ButtonGroup>
    </Toolbar>
  )
}

export { ToolbarWithButtonGroup }
