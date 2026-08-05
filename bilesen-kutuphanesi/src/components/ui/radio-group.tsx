/**
 * RadioGroup
 * Saf React bileşen (bağımlılıksız).
 * Tek seçimli seçenek grubu — Radio + Content/Control/Indicator compound.
 *   <RadioGroup defaultValue="premium" name="plan">
 *     <Label>Plan</Label>
 *     <Description>…</Description>
 *     <Radio value="basic">
 *       <RadioContent>
 *         <RadioControl><RadioIndicator /></RadioControl>
 *         Basic Plan
 *       </RadioContent>
 *       <Description>…</Description>
 *     </Radio>
 *   </RadioGroup>
 * Özellikler: value/defaultValue/onChange · isDisabled/isRequired/isReadOnly/
 * isInvalid · variant (primary/secondary) · orientation · name (native form) ·
 * render prop · Indicator children render fn ({isSelected}).
 * @id 389
 * @category Seçim
 * @subcategory RadioGroup
 */
import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type RadioGroupVariant = "primary" | "secondary"
type RadioGroupOrientation = "vertical" | "horizontal"

interface RadioGroupRenderProps {
  isDisabled: boolean
  isReadOnly: boolean
  isInvalid: boolean
  isRequired: boolean
}

interface RadioGroupContextValue extends RadioGroupRenderProps {
  value: string
  setValue: (v: string) => void
  variant: RadioGroupVariant
  name?: string
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroup(): RadioGroupContextValue {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error("useRadioGroup, <RadioGroup> içinde kullanılmalı")
  return ctx
}

/* ---------- RadioGroup ---------- */

interface RadioGroupProps {
  children?: ReactNode | ((values: RadioGroupRenderProps) => ReactNode)
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  variant?: RadioGroupVariant
  orientation?: RadioGroupOrientation
  name?: string
  render?: (props: Record<string, unknown>) => ReactNode
}

function RadioGroup({
  children,
  className,
  value: valueProp,
  defaultValue = "",
  onChange,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  isInvalid = false,
  variant = "primary",
  orientation = "vertical",
  name,
  render,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = valueProp ?? internalValue

  const setValue = (v: string) => {
    setInternalValue(v)
    onChange?.(v)
  }

  const renderProps: RadioGroupRenderProps = { isDisabled, isReadOnly, isInvalid, isRequired }
  const contextValue: RadioGroupContextValue = { ...renderProps, value, setValue, variant, name }

  const rootProps: Record<string, unknown> = {
    "data-slot": "radio-group",
    "data-variant": variant,
    "data-invalid": isInvalid ? "true" : undefined,
    "data-disabled": isDisabled ? "true" : undefined,
    role: "radiogroup",
    className: cn(
      "flex flex-col gap-2",
      orientation === "horizontal" && "flex-row flex-wrap items-center gap-x-6",
      className
    ),
  }

  const content = typeof children === "function" ? children(renderProps) : children

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {render ? render({ ...rootProps, children: content }) : <div {...rootProps}>{content}</div>}
    </RadioGroupContext.Provider>
  )
}

/* ---------- Radio ---------- */

interface RadioButtonRenderProps {
  isSelected: boolean
  isDisabled: boolean
  isReadOnly: boolean
  isInvalid: boolean
  isRequired: boolean
}

const RadioContext = createContext<RadioButtonRenderProps | null>(null)

function useRadio(): RadioButtonRenderProps {
  const ctx = useContext(RadioContext)
  if (!ctx) throw new Error("useRadio, <Radio> içinde kullanılmalı")
  return ctx
}

interface RadioProps {
  value: string
  isDisabled?: boolean
  name?: string
  children?: ReactNode
  className?: string
}

function Radio({ value, isDisabled = false, name, children, className }: RadioProps) {
  const ctx = useRadioGroup()
  const selected = ctx.value === value
  const disabled = ctx.isDisabled || isDisabled

  const renderProps: RadioButtonRenderProps = {
    isSelected: selected,
    isDisabled: disabled,
    isReadOnly: ctx.isReadOnly,
    isInvalid: ctx.isInvalid,
    isRequired: ctx.isRequired,
  }

  return (
    <RadioContext.Provider value={renderProps}>
      <label
        data-slot="radio"
        data-selected={selected ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={ctx.isInvalid ? "true" : undefined}
        className={cn(
          "group flex cursor-pointer items-start gap-2 text-sm text-foreground",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
      >
        <input
          type="radio"
          name={name ?? ctx.name}
          value={value}
          checked={selected}
          onChange={() => {
            if (!disabled && !ctx.isReadOnly) ctx.setValue(value)
          }}
          disabled={disabled}
          required={ctx.isRequired}
          className="sr-only"
        />
        {children}
      </label>
    </RadioContext.Provider>
  )
}

/* ---------- Content ---------- */

interface RadioContentProps extends HTMLAttributes<HTMLSpanElement> {}

function RadioContent({ className, children, ...props }: RadioContentProps) {
  const radio = useRadio()
  return (
    <span
      data-slot="radio-content"
      data-selected={radio.isSelected ? "true" : undefined}
      data-focus-visible="false"
      className={cn("flex items-start gap-2.5", className)}
      {...props}
    >
      {children}
    </span>
  )
}

/* ---------- Control ---------- */

interface RadioControlProps extends HTMLAttributes<HTMLSpanElement> {}

function RadioControl({ className, children, ...props }: RadioControlProps) {
  const radio = useRadio()
  return (
    <span
      data-slot="radio-control"
      aria-hidden="true"
      data-selected={radio.isSelected ? "true" : undefined}
      className={cn(
        "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-border transition-colors",
        "group-hover:border-ring group-focus-visible:ring-3 group-focus-visible:ring-ring/40",
        radio.isSelected && "border-foreground",
        radio.isInvalid && "border-red-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/* ---------- Indicator ---------- */

interface RadioIndicatorProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  children?: ReactNode | ((values: RadioButtonRenderProps) => ReactNode)
}

function RadioIndicator({ className, children, ...props }: RadioIndicatorProps) {
  const radio = useRadio()
  const content =
    typeof children === "function" ? children(radio) : children ?? (radio.isSelected ? <span className="size-2 rounded-full bg-foreground" /> : null)
  return (
    <span
      data-slot="radio-indicator"
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {content}
    </span>
  )
}

export { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator, useRadio, useRadioGroup }
export type { RadioButtonRenderProps, RadioContentProps, RadioGroupOrientation, RadioGroupProps, RadioGroupRenderProps, RadioGroupVariant, RadioProps }
