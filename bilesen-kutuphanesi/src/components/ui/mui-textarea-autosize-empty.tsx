/**
 * MuiTextareaAutosizeEmpty
 * @id 1931
 * @category Form Elemanları
 * @subcategory MuiTextareaAutosize
 * @source mui
 */
import { MuiTextareaAutosize } from "@/components/ui/mui-textarea-autosize"

function MuiTextareaAutosizeEmpty() {
  return (
    <MuiTextareaAutosize minRows={3} placeholder="Boş başlar, yazdıkça büyür…" className="max-w-md" />
  )
}

export { MuiTextareaAutosizeEmpty }
