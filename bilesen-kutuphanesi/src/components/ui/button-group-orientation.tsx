/**
 * ButtonGroupOrientation
 * Yön örneği: yatay/dikey (saf React).
 * @id 508
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupOrientation() {
  return (
    <div className="flex items-start gap-8">
      <ButtonGroup>
        <Button>Horizontal 1</Button>
        <Button>
          <ButtonGroupSeparator />
          2
        </Button>
        <Button>
          <ButtonGroupSeparator />
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button>Vertical 1</Button>
        <Button>
          <ButtonGroupSeparator />
          2
        </Button>
        <Button>
          <ButtonGroupSeparator />
          3
        </Button>
      </ButtonGroup>
    </div>
  )
}

export { ButtonGroupOrientation }
