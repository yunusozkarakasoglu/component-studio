/**
 * ErrorMessage
 * Saf React bileşen (bağımlılıksız).
 * Form dışı bileşenler (TagGroup, Calendar vb.) için düşük seviyeli hata mesajı.
 *   <ErrorMessage>{isInvalid && <span>En az bir kategori seçin</span>}</ErrorMessage>
 * Form alanları için FieldError kullanılır.
 * @id 375
 * @category Form Elemanları
 * @subcategory ErrorMessage
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

function ErrorMessage({ className, children, ...props }: ErrorMessageProps) {
  if (children == null || children === false) return null
  return (
    <p
      data-slot="error-message"
      slot="errorMessage"
      className={cn("text-sm font-medium text-red-500", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { ErrorMessage }
export type { ErrorMessageProps }
