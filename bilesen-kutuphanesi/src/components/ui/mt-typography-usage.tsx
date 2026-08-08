/**
 * MtTypographyUsage
 * Tipografi kombinasyonu (saf React, Mantine kaynaklı).
 * @id 1502
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"
import { MtTitle } from "@/components/ui/mt-title"

function MtTypographyUsage() {
  return (
    <div className="max-w-lg space-y-2">
      <MtTitle order={2}>The quick brown fox</MtTitle>
      <MtText c="dimmed">
        Jumps over the lazy dog. A paragraph combines{" "}
        <MtText span c="blue" fw={600}>emphasis</MtText> and{" "}
        <MtText span c="teal">color</MtText> to guide the reader.
      </MtText>
      <MtText fw={700}>Bold weight</MtText>
      <MtText c="red.4">Red 4 shade</MtText>
      <MtText tt="uppercase" size="xs">small uppercase label</MtText>
    </div>
  )
}

export { MtTypographyUsage }
