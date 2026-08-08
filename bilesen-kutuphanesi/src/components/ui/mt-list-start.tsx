/**
 * MtListStart
 * Başlangıç değeri (saf React, Mantine kaynaklı).
 * @id 1477
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListStart() {
  return (
    <MtList type="ordered" className="max-w-sm">
      <MtListItem>Create your account</MtListItem>
      <MtListItem>Verify your email</MtListItem>
      <MtListItem>Set up two-factor authentication</MtListItem>
    </MtList>
  )
}

export { MtListStart }
