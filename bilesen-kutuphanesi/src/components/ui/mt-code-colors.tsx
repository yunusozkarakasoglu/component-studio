/**
 * MtCodeColors
 * Renkli kod (saf React, Mantine kaynaklı).
 * @id 1569
 * @category Alert & Dialog
 * @subcategory MtCode
 * @source mantine
 */
import { MtCode } from "@/components/ui/mt-code"

function MtCodeColors() {
  return (
    <p className="text-sm text-foreground">
      <MtCode color="blue">blue</MtCode>{" "}
      <MtCode color="green">green</MtCode>{" "}
      <MtCode color="red">red</MtCode>{" "}
      <MtCode color="yellow">yellow</MtCode>{" "}
      <MtCode>default</MtCode>
    </p>
  )
}

export { MtCodeColors }
