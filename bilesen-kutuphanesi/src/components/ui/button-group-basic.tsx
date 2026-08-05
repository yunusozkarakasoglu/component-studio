/**
 * ButtonGroupBasic
 * Temel örnek: birleştirme + açılır ok (saf React).
 * Dropdown entegrasyonu yerine basit chevron butonu kullanılır.
 * @id 505
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { ChevronDown } from "@/components/ui/icons"

function ButtonGroupBasic() {
  return (
    <div className="flex flex-col items-start gap-6">
      <ButtonGroup>
        <Button>Merge pull request</Button>
        <Button isIconOnly aria-label="More options">
          <ButtonGroupSeparator />
          <ChevronDown className="size-4" />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export { ButtonGroupBasic }
