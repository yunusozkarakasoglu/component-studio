/**
 * ButtonGroupDisabled
 * Devre dışı örnek (saf React).
 * @id 511
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupDisabled() {
  return (
    <div className="flex flex-col gap-6">
      <ButtonGroup isDisabled>
        <Button>All disabled</Button>
        <Button>
          <ButtonGroupSeparator />
          Two
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Enabled</Button>
        <Button isDisabled>
          <ButtonGroupSeparator />
          Single disabled
        </Button>
      </ButtonGroup>
    </div>
  )
}

export { ButtonGroupDisabled }
