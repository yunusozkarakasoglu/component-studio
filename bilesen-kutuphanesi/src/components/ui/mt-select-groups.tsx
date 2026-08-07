/**
 * MtSelectGroups
 * Gruplu seçim (saf React, Mantine kaynaklı).
 * @id 1310
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectGroups() {
  return (
    <MtSelect
      data={["Frontend", "React", "Vue", "Backend", "Node.js", "Python", "DevOps", "Docker", "Kubernetes"]}
      label="Grouped select"
      className="max-w-sm"
    />
  )
}

export { MtSelectGroups }
