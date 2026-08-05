/**
 * ButtonGroupSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 507
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

function ButtonGroupSizes() {
  return (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground capitalize">{size}</p>
          <ButtonGroup size={size}>
            <Button>Left</Button>
            <Button>
              <ButtonGroupSeparator />
              Center
            </Button>
            <Button>
              <ButtonGroupSeparator />
              Right
            </Button>
          </ButtonGroup>
        </div>
      ))}
    </div>
  )
}

export { ButtonGroupSizes }
