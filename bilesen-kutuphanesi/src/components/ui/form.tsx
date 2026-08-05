/**
 * Form
 * Saf React bileşen (bağımlılıksız).
 * Form doğrulama ve gönderim sarmalayıcısı — native <form>.
 *   <Form onSubmit={handleSubmit}>
 *     <TextField isRequired name="email" type="email" validate={...}>
 *       <Label>Email</Label>
 *       <Input />
 *       <FieldError />
 *     </TextField>
 *     <Button type="submit">Gönder</Button>
 *     <Button type="reset">Sıfırla</Button>
 *   </Form>
 * Özellikler: native form attribute'ları (action/method/encType) · onSubmit/onReset ·
 * onInvalid · render prop (kök DOM override) · validationErrors (isim→mesaj haritası,
 * field değişince temizlenir).
 * @id 371
 * @category Form Elemanları
 * @subcategory Form
 */
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type FormHTMLAttributes,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

interface FormContextValue {
  /** Sunucu tarafı doğrulama hataları: alan adı → mesaj */
  validationErrors: Record<string, string[]>
  setFieldError: (name: string, errors: string[]) => void
  clearFieldError: (name: string) => void
}

const FormContext = createContext<FormContextValue | null>(null)

/** Alan bileşenleri (TextField vb.) sunucu hatalarını almak için */
function useForm(): FormContextValue | null {
  return useContext(FormContext)
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Kök DOM elementini override eder */
  render?: (props: Record<string, unknown>) => ReactNode
  /** Sunucu tarafı doğrulama hataları: alan adı → mesaj listesi */
  validationErrors?: Record<string, string[]>
  onInvalid?: (event: FormEvent<HTMLFormElement>) => void
}

function Form({
  render,
  className,
  validationErrors: externalErrors,
  onInvalid,
  onSubmit,
  children,
  ...props
}: FormProps) {
  const [localErrors, setLocalErrors] = useState<Record<string, string[]>>({})
  const validationErrors = externalErrors ?? localErrors

  const setFieldError = useCallback((name: string, errors: string[]) => {
    setLocalErrors((prev) => ({ ...prev, [name]: errors }))
  }, [])

  const clearFieldError = useCallback((name: string) => {
    setLocalErrors((prev) => {
      if (!(name in prev)) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }, [])

  const contextValue: FormContextValue = { validationErrors, setFieldError, clearFieldError }

  const rootProps: Record<string, unknown> = {
    "data-slot": "form",
    className: cn("flex flex-col gap-4", className),
    onInvalid,
    onSubmit,
    ...props,
  }

  const content = (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  )

  if (render) return <>{render({ ...rootProps, children: content })}</>
  return <form {...rootProps}>{content}</form>
}

export { Form, useForm }
export type { FormContextValue, FormProps }
