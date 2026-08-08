/**
 * MtTextTruncate
 * Kesme (saf React, Mantine kaynaklı).
 * @id 1481
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTextTruncate() {
  return (
    <div className="max-w-md">
      <MtText truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the available width of its container.
      </MtText>
      <MtText size="sm" c="dimmed" className="mt-2" truncate>
        /home/yunus/.pi/Component-studio/bilesen-kutuphanesi/src/components/ui/mt-text.tsx
      </MtText>
    </div>
  )
}

export { MtTextTruncate }
