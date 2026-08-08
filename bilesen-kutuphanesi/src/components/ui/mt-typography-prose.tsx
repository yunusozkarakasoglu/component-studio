/**
 * MtTypographyProse
 * Prose tipografi stilleri (saf React, Mantine kaynaklı).
 * @id 1501
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTypographyProse() {
  return (
    <div className="max-w-lg space-y-3">
      <h1 className="text-3xl font-bold">Heading 1</h1>
      <h2 className="text-2xl font-bold">Heading 2</h2>
      <h3 className="text-xl font-bold">Heading 3</h3>
      <hr className="border-border" />
      <MtText>
        <a href="#" className="text-blue-600 underline">Mantine link</a> — typography follows the page rhythm.
      </MtText>
      <MtText c="dimmed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident omnis laudantium itaque.
      </MtText>
      <ul className="list-disc pl-5 text-sm">
        <li>list item - 1</li>
        <li>list item - 2</li>
        <li>list item - 3</li>
      </ul>
      <blockquote className="border-l-2 border-gray-300 pl-3 italic text-muted-foreground">
        Life is like an npm install — you never know what you are going to get.
      </blockquote>
    </div>
  )
}

export { MtTypographyProse }
