/**
 * TextAreaCustomStyles
 * Özelleştirilmiş textarea örneği (saf React).
 * @id 308
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { TextArea } from "@/components/ui/textarea"

const fieldClass =
  "rounded-xl border border-border/80 bg-background shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30"

function TextAreaCustomStyles() {
  return (
    <TextArea
      aria-label="Notes"
      className={`h-28 w-full max-w-xs text-sm text-neutral-800 placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500 ${fieldClass}`}
      placeholder="Add a note..."
    />
  )
}

export { TextAreaCustomStyles }
