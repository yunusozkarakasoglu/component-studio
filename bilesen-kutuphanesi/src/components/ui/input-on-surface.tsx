/**
 * InputOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * Yüzey div ile simüle edilir.
 * @id 329
 * @category Form Elemanları
 * @subcategory Input
 */
import { Input } from "@/components/ui/input"

function InputOnSurface() {
  return (
    <div className="flex h-[180px] w-[280px] items-center justify-center rounded-3xl bg-muted/40 p-4">
      <Input className="w-full" placeholder="Your name" variant="secondary" />
    </div>
  )
}

export { InputOnSurface }
