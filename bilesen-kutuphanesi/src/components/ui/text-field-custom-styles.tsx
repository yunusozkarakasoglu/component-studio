/**
 * TextFieldCustomStyles
 * Özelleştirilmiş alan örneği (saf React).
 * @id 298
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

const fieldClass =
  "rounded-xl border border-border/80 bg-background shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30"

function TextFieldCustomStyles() {
  return (
    <TextField className="w-full max-w-64 gap-1.5" name="email" type="email">
      <Label className="font-medium text-neutral-800 dark:text-neutral-100">Email</Label>
      <Input
        className={`text-sm text-neutral-800 placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500 ${fieldClass}`}
        placeholder="you@email.com"
      />
    </TextField>
  )
}

export { TextFieldCustomStyles }
