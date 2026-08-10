/**
 * MuiTextareaAutosizeMinMax
 * @id 1930
 * @category Form Elemanları
 * @subcategory MuiTextareaAutosize
 * @source mui
 */
import { MuiTextareaAutosize } from "@/components/ui/mui-textarea-autosize"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextareaAutosizeMinMax() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextareaAutosize minRows={2} maxRows={4} placeholder="Min 2, maks 4 satır (içerik büyüyünce scroll)" />
      <MuiTextareaAutosize minRows={4} maxRows={10} placeholder="Min 4, maks 10 satır" />
    </MuiStack>
  )
}

export { MuiTextareaAutosizeMinMax }
