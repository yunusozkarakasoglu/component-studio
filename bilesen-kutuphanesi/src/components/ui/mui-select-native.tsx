/**
 * MuiSelectNative
 * @id 1977
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { MuiSelect } from "@/components/ui/mui-select"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSelectNative() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiSelect
        native
        label="Native select"
        options={[
          { value: 10, label: "On" },
          { value: 20, label: "Yirmi" },
          { value: 30, label: "Otuz" },
        ]}
        defaultValue={20}
      />
    </MuiStack>
  )
}

export { MuiSelectNative }
