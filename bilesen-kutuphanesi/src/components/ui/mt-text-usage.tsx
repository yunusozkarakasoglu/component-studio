/**
 * MtTextUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1479
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTextUsage() {
  return (
    <div className="flex flex-col gap-1.5">
      <MtText size="xs">Extra small text</MtText>
      <MtText size="sm">Small text</MtText>
      <MtText size="md">Default text</MtText>
      <MtText size="lg">Large text</MtText>
      <MtText size="xl">Extra large text</MtText>
      <MtText fw={500}>Semibold</MtText>
      <MtText fw={700}>Bold</MtText>
      <MtText fs="italic">Italic</MtText>
      <MtText td="underline">Underlined</MtText>
      <MtText td="line-through">Strikethrough</MtText>
      <MtText c="dimmed">Dimmed text</MtText>
      <MtText c="blue">Blue text</MtText>
      <MtText c="teal.4">Teal 4 text</MtText>
      <MtText tt="uppercase">Uppercase</MtText>
      <MtText tt="capitalize">capitalized text</MtText>
      <MtText ta="center">Aligned to center</MtText>
      <MtText ta="right">Aligned to right</MtText>
    </div>
  )
}

export { MtTextUsage }
