/**
 * MuiCheckboxIndeterminate
 * @id 1940
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { useState } from "react"
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiCheckboxIndeterminate() {
  const [checked, setChecked] = useState<boolean[]>([true, false])
  const allChecked = checked.every(Boolean)
  const someChecked = checked.some(Boolean)
  const handleParent = () => {
    const next = allChecked ? checked.map(() => false) : checked.map(() => true)
    setChecked(next)
  }
  const handleChild = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }
  return (
    <MuiStack spacing={1}>
      <MuiCheckbox checked={allChecked} indeterminate={someChecked && !allChecked} onChange={handleParent}>
        Tüm öğeler
      </MuiCheckbox>
      <div className="pl-6">
        <MuiStack spacing={1}>
          <MuiCheckbox checked={checked[0]} onChange={() => handleChild(0)}>Birinci</MuiCheckbox>
          <MuiCheckbox checked={checked[1]} onChange={() => handleChild(1)}>İkinci</MuiCheckbox>
        </MuiStack>
      </div>
    </MuiStack>
  )
}

export { MuiCheckboxIndeterminate }
