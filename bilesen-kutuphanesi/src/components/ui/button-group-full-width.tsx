/**
 * ButtonGroupFullWidth
 * Tam genişlik örneği (saf React).
 * @id 510
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupFullWidth() {
  return (
    <div className="w-full max-w-md">
      <ButtonGroup fullWidth>
        <Button>Yes</Button>
        <Button>
          <ButtonGroupSeparator />
          No
        </Button>
        <Button>
          <ButtonGroupSeparator />
          Maybe
        </Button>
      </ButtonGroup>
    </div>
  )
}

export { ButtonGroupFullWidth }
