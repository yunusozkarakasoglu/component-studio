/**
 * InputGroupWithBadgeSuffix
 * Rozet (Chip) suffix örneği (saf React).
 * @id 348
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Chip, ChipLabel } from "@/components/ui/chip"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithBadgeSuffix() {
  return (
    <TextField aria-label="Email address" className="w-full max-w-[280px]" name="email">
      <InputGroup>
        <InputGroupInput className="w-full max-w-[280px]" placeholder="Email address" />
        <InputGroupSuffix className="pe-2">
          <Chip color="accent" size="md" variant="soft">
            <ChipLabel>Pro</ChipLabel>
          </Chip>
        </InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithBadgeSuffix }
