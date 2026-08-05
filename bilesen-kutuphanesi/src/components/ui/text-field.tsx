/**
 * TextField
 * Saf React bileşen (bağımlılıksız).
 * Label + Input/TextArea + Description + FieldError'ı tek context'te birleştirir.
 *   <TextField name="email" type="email" isRequired isInvalid={hasError}>
 *     <Label>Email</Label>
 *     <Input placeholder="user@example.com" />
 *     <Description>We'll never share this.</Description>
 *     <FieldError>Please enter a valid email.</FieldError>
 *   </TextField>
 * Özellikler: value/defaultValue/onChange (kontrollü) · validate · isRequired ·
 * isInvalid · isDisabled · isReadOnly · name · type · fullWidth · variant
 * (primary/secondary — secondary: yüzey üzerinde) · children render prop ·
 * DOM override (render) · data-invalid/disabled/focus-within.
 * @id 285
 * @category Form Elemanları
 * @subcategory TextField
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type TextFieldVariant = "primary" | "secondary"

interface TextFieldRenderProps {
  isDisabled: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isRequired: boolean
  isFocused: boolean
  isFocusWithin: boolean
  isFocusVisible: boolean
}

interface TextFieldContextValue extends TextFieldRenderProps {
  value: string
  setValue: (v: string) => void
  name?: string
  type?: string
  variant: TextFieldVariant
  fullWidth: boolean
  autoFocus?: boolean
  setFocusWithin: (v: boolean) => void
  /** validate()'den gelen hata mesajı (FieldError children'sız kullanımda gösterilir) */
  errorMessage?: string
}

const TextFieldContext = createContext<TextFieldContextValue | null>(null)

/** Compound parçalarından (Input/TextArea/FieldError) state erişimi */
function useTextField(): TextFieldContextValue | null {
  return useContext(TextFieldContext)
}

interface TextFieldProps {
  children?: ReactNode | ((values: TextFieldRenderProps) => ReactNode)
  className?: string
  style?: CSSProperties
  fullWidth?: boolean
  id?: string
  /** Kök DOM elementini override eder: render={(props) => <div {...props} data-x="y" />} */
  render?: (props: Record<string, unknown>) => ReactNode
  isRequired?: boolean
  isInvalid?: boolean
  validate?: (value: string) => string | true | null | undefined
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isReadOnly?: boolean
  name?: string
  autoFocus?: boolean
  type?: string
  variant?: TextFieldVariant
}

function TextField({
  children,
  className,
  style,
  fullWidth = false,
  id,
  render,
  isRequired = false,
  isInvalid,
  validate,
  value: valueProp,
  defaultValue = "",
  onChange,
  isDisabled = false,
  isReadOnly = false,
  name,
  autoFocus,
  type,
  variant = "primary",
}: TextFieldProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [focusWithin, setFocusWithin] = useState(false)
  const [validateError, setValidateError] = useState<string | null>(null)

  const value = valueProp ?? internalValue
  const setValue = useCallback(
    (v: string) => {
      setInternalValue(v)
      onChange?.(v)
    },
    [onChange]
  )

  // validate fonksiyonu: hata mesajı üretiyorsa invalid
  useEffect(() => {
    if (!validate) return
    const r = validate(value)
    setValidateError(r === true || r == null ? null : String(r))
  }, [value, validate])

  const resolvedInvalid = isInvalid ?? validateError != null
  const errorMessage = validateError ?? undefined

  const renderProps: TextFieldRenderProps = {
    isDisabled,
    isInvalid: resolvedInvalid,
    isReadOnly,
    isRequired,
    isFocused: focusWithin,
    isFocusWithin: focusWithin,
    isFocusVisible: false,
  }

  const contextValue: TextFieldContextValue = {
    ...renderProps,
    value,
    setValue,
    name,
    type,
    variant,
    fullWidth,
    autoFocus,
    setFocusWithin,
    errorMessage,
  }

  const rootProps: Record<string, unknown> = {
    "data-slot": "text-field",
    "data-invalid": resolvedInvalid ? "true" : undefined,
    "data-disabled": isDisabled ? "true" : undefined,
    "data-focus-within": focusWithin ? "true" : undefined,
    id,
    style,
    className: cn("flex flex-col gap-1.5", fullWidth && "w-full", className),
  }

  const content = typeof children === "function" ? children(renderProps) : children

  return (
    <TextFieldContext.Provider value={contextValue}>
      {render ? render({ ...rootProps, children: content }) : <div {...rootProps}>{content}</div>}
    </TextFieldContext.Provider>
  )
}

export { TextField, useTextField }
export type { TextFieldProps, TextFieldRenderProps, TextFieldVariant }
