/**
 * InputBasic
 * Temel örnek: bağımsız tek satır giriş (saf React).
 * @id 327
 * @category Form Elemanları
 * @subcategory Input
 */
import { Input } from "@/components/ui/input"

function InputBasic() {
  return <Input aria-label="Name" className="w-64" placeholder="Enter your name" />
}

export { InputBasic }
