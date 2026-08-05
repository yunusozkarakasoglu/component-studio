/**
 * RadioGroupVariants
 * primary/secondary variant örneği (saf React).
 * @id 392
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupVariants() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Primary variant</p>
        <RadioGroup defaultValue="option1" name="primary-plan" variant="primary">
          <Radio value="option1">
            <RadioContent>
              <RadioControl>
                <RadioIndicator />
              </RadioControl>
              Option 1
            </RadioContent>
            <Description>Standard styling with default background</Description>
          </Radio>
          <Radio value="option2">
            <RadioContent>
              <RadioControl>
                <RadioIndicator />
              </RadioControl>
              Option 2
            </RadioContent>
            <Description>Another option with primary styling</Description>
          </Radio>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Secondary variant</p>
        <RadioGroup defaultValue="option1" name="secondary-plan" variant="secondary">
          <Radio value="option1">
            <RadioContent>
              <RadioControl>
                <RadioIndicator />
              </RadioControl>
              Option 1
            </RadioContent>
            <Description>Lower emphasis variant for use in surfaces</Description>
          </Radio>
          <Radio value="option2">
            <RadioContent>
              <RadioControl>
                <RadioIndicator />
              </RadioControl>
              Option 2
            </RadioContent>
            <Description>Another option with secondary styling</Description>
          </Radio>
        </RadioGroup>
      </div>
    </div>
  )
}

export { RadioGroupVariants }
