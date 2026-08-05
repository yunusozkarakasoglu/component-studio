/**
 * InputCustomStyles
 * Özelleştirilmiş giriş örneği (saf React).
 * @id 333
 * @category Form Elemanları
 * @subcategory Input
 */
import { Input } from "@/components/ui/input"

function InputCustomStyles() {
  return (
    <Input
      aria-label="Search projects"
      className="w-64 rounded-xl border border-border/80 bg-background text-foreground placeholder:text-muted-foreground"
      placeholder="Search projects..."
    />
  )
}

export { InputCustomStyles }
