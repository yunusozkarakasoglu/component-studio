/**
 * MtBlockquoteUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1565
 * @category Alert & Dialog
 * @subcategory MtBlockquote
 * @source mantine
 */
import { MtBlockquote } from "@/components/ui/mt-blockquote"

function MtBlockquoteUsage() {
  return (
    <MtBlockquote cite="– Forrest Gump" className="max-w-lg">
      Life is like an npm install – you never know what you are going to get.
    </MtBlockquote>
  )
}

export { MtBlockquoteUsage }
