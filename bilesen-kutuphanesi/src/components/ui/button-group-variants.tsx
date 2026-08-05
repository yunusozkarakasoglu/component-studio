/**
 * ButtonGroupVariants
 * Varyant örneği: primary/secondary/outline/ghost (saf React).
 * @id 506
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupVariants() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Primary</p>
        <ButtonGroup>
          <Button>One</Button>
          <Button>
            <ButtonGroupSeparator />
            Two
          </Button>
          <Button>
            <ButtonGroupSeparator />
            Three
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Tertiary</p>
        <ButtonGroup variant="tertiary">
          <Button>One</Button>
          <Button>
            <ButtonGroupSeparator />
            Two
          </Button>
          <Button>
            <ButtonGroupSeparator />
            Three
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export { ButtonGroupVariants }
