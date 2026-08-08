/**
 * MtCodeBlock
 * Kod bloğu (saf React, Mantine kaynaklı).
 * @id 1568
 * @category Alert & Dialog
 * @subcategory MtCode
 * @source mantine
 */
import { MtCode } from "@/components/ui/mt-code"

const code = `function Merhaba({ isim }: { isim: string }) {
  return <h1>Merhaba, {isim}!</h1>;
}`

function MtCodeBlock() {
  return (
    <MtCode block className="max-w-lg">{code}</MtCode>
  )
}

export { MtCodeBlock }
