/**
 * MtBlockquoteIcon
 * İkonlu alıntı (saf React, Mantine kaynaklı).
 * @id 1566
 * @category Alert & Dialog
 * @subcategory MtBlockquote
 * @source mantine
 */
import { Quote } from "@/components/ui/icons"
import { MtBlockquote } from "@/components/ui/mt-blockquote"

function MtBlockquoteIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <MtBlockquote cite="– Grace Hopper" icon={<Quote className="size-5" />} color="teal">
        The most damaging phrase in the language is: it's always been done that way.
      </MtBlockquote>
      <MtBlockquote cite="– Ada Lovelace" color="red">
        That brain of mine is something more than merely mortal.
      </MtBlockquote>
    </div>
  )
}

export { MtBlockquoteIcon }
