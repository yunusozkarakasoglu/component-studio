/**
 * ButtonGroupCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 512
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupCustomStyles() {
  return (
    <ButtonGroup className="rounded-full border-blue-500/20 bg-blue-500/5 [&_button]:text-blue-700 [&_button]:hover:bg-blue-500/10">
      <Button>Save</Button>
      <Button>
        <ButtonGroupSeparator />
        Save as
      </Button>
    </ButtonGroup>
  )
}

export { ButtonGroupCustomStyles }
