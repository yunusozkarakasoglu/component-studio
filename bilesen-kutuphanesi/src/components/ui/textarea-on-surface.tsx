/**
 * TextAreaOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * Surface bileşeni olmadığından yüzey div ile simüle edilir.
 * @id 304
 * @category Form Elemanları
 * @subcategory TextArea
 */
import { TextArea } from "@/components/ui/textarea"

function TextAreaOnSurface() {
  return (
    <div className="w-full rounded-3xl bg-muted/40 p-6">
      <TextArea
        className="w-full min-w-[280px]"
        placeholder="Describe your product"
        variant="secondary"
      />
    </div>
  )
}

export { TextAreaOnSurface }
