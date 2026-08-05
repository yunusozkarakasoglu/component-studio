/**
 * FieldError
 * Saf React bileşen (bağımlılıksız).
 * Doğrulama hata mesajı — TextField içinde isInvalid iken gösterilir.
 *   <FieldError>Kullanıcı adı en az 3 karakter olmalı.</FieldError>
 * @id 301
 * @category Form Elemanları
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useTextField } from "@/components/ui/text-field"

interface FieldErrorValidation {
  /** Geçerli doğrulama hataları (validate() mesajları) */
  validationErrors: string[]
}

interface FieldErrorProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "children"> {
  /** Bağımsız kullanımda her zaman göster (varsayılan). TextField içinde yalnızca invalid iken. */
  alwaysVisible?: boolean
  children?: ReactNode | ((validation: FieldErrorValidation) => ReactNode)
}

function FieldError({ className, alwaysVisible = false, children, ...props }: FieldErrorProps) {
  const ctx = useTextField()

  // TextField içinde: yalnızca isInvalid iken render et
  if (ctx && !ctx.isInvalid && !alwaysVisible) return null

  // children fonksiyon ise doğrulama nesnesiyle çağır
  const resolved =
    typeof children === "function"
      ? children({ validationErrors: ctx?.errorMessage ? [ctx.errorMessage] : [] })
      : children

  // children yoksa validate()'den gelen hata mesajını göster
  const message = resolved ?? ctx?.errorMessage
  if (message == null) return null

  return (
    <p
      data-slot="field-error"
      role="alert"
      className={cn("mt-1 text-xs text-red-500", className)}
      {...props}
    >
      {message}
    </p>
  )
}

export { FieldError }
export type { FieldErrorProps }
