/**
 * InputFullWidth
 * Tam genişlik örneği (saf React).
 * @id 330
 * @category Form Elemanları
 * @subcategory Input
 */
import { Input } from "@/components/ui/input"

function InputFullWidth() {
  return (
    <div className="w-[400px] space-y-3">
      <Input fullWidth placeholder="Full width input" />
    </div>
  )
}

export { InputFullWidth }
