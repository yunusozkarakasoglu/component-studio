/**
 * MuiSelectCheckmarks
 * @id 2061
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { MuiSelect } from "@/components/ui/mui-select"

function MuiSelectCheckmarks() {
  return (
    <MuiSelect
      label="Çoklu — işaretli"
      multiple
      defaultValue={["react", "ts"]}
      options={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "ts", label: "TypeScript" },
      ]}
    />
  )
}

export { MuiSelectCheckmarks }
