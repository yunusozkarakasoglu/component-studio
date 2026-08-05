/**
 * InputGroupWithLoadingSuffix
 * Suffix'te yükleme spinner örneği (saf React).
 * @id 338
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithLoadingSuffix() {
  return (
    <TextField className="w-full max-w-[280px]" defaultValue="Sending..." name="status">
      <InputGroup>
        <InputGroupInput className="w-full max-w-[280px]" />
        <InputGroupSuffix>
          <Spinner className="size-4" />
        </InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithLoadingSuffix }
