/**
 * MuiSelectGrouped
 * @id 1978
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { MuiSelect } from "@/components/ui/mui-select"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSelectGrouped() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiSelect
        label="Grup — Düz liste"
        options={[
          { value: "ahmet", label: "Ahmet" },
          { value: "mehmet", label: "Mehmet" },
          { value: "ayse", label: "Ayşe" },
          { value: "fatma", label: "Fatma" },
        ]}
        defaultValue="ahmet"
      />
    </MuiStack>
  )
}

export { MuiSelectGrouped }
