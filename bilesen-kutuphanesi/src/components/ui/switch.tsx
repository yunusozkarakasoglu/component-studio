/**
 * Switch
 * Saf React bileşen (bağımlılıksız).
 * Boolean durum değiştirici — Content/Control/Thumb/Icon compound.
 *   <Switch defaultSelected>
 *     <SwitchContent>
 *       <SwitchControl>
 *         <SwitchThumb><SwitchIcon /></SwitchThumb>
 *       </SwitchControl>
 *       Bildirimleri etkinleştir
 *     </SwitchContent>
 *   </Switch>
 * Özellikler: isSelected/defaultSelected/onChange · size (sm/md/lg) ·
 * isDisabled/isInvalid/isReadOnly/isRequired · name/value (native form) ·
 * children render fn ({isSelected}) · render prop.
 * SwitchGroup: birden çok switch'i dikey/yatay gruplar.
 * @id 401
 * @category Seçim
 * @subcategory Switch
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

type SwitchSize = "sm" | "md" | "lg"

interface SwitchRenderProps {
  isSelected: boolean
  isDisabled: boolean
  isReadOnly: boolean
  isInvalid: boolean
  isRequired: boolean
}

interface SwitchContextValue extends SwitchRenderProps {
  setSelected: (v: boolean) => void
  size: SwitchSize
}

const SwitchContext = createContext<SwitchContextValue | null>(null)

function useSwitch(): SwitchContextValue {
  const ctx = useContext(SwitchContext)
  if (!ctx) throw new Error("useSwitch, <Switch> içinde kullanılmalı")
  return ctx
}

interface SwitchProps {
  children?: ReactNode | ((values: SwitchRenderProps) => ReactNode)
  className?: string
  size?: SwitchSize
  isSelected?: boolean
  defaultSelected?: boolean
  onChange?: (isSelected: boolean) => void
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  name?: string
  value?: string
  "aria-label"?: string
  id?: string
  render?: (props: Record<string, unknown>) => ReactNode
}

function Switch({
  children,
  className,
  size = "md",
  isSelected: isSelectedProp,
  defaultSelected = false,
  onChange,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  name,
  value = "on",
  render,
  ...aria
}: SwitchProps) {
  const [internalSelected, setInternalSelected] = useState(defaultSelected)
  const isSelected = isSelectedProp ?? internalSelected

  const setSelected = (v: boolean) => {
    setInternalSelected(v)
    onChange?.(v)
  }

  const renderProps: SwitchRenderProps = {
    isSelected,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
  }

  const contextValue: SwitchContextValue = { ...renderProps, setSelected, size }

  const rootProps: Record<string, unknown> = {
    "data-slot": "switch",
    "data-selected": isSelected ? "true" : undefined,
    "data-disabled": isDisabled ? "true" : undefined,
    className: cn("inline-flex cursor-pointer items-center gap-3 text-sm text-foreground", isDisabled && "cursor-not-allowed opacity-60", className),
    ...aria,
  }

  const content = typeof children === "function" ? children(renderProps) : children

  return (
    <SwitchContext.Provider value={contextValue}>
      {render ? (
        render({ ...rootProps, children: content })
      ) : (
        <label {...rootProps}>
          <input
            type="checkbox"
            role="switch"
            className="sr-only"
            checked={isSelected}
            disabled={isDisabled}
            readOnly={isReadOnly}
            required={isRequired}
            name={name}
            value={value}
            onChange={(e) => {
              if (!isDisabled && !isReadOnly) setSelected(e.target.checked)
            }}
          />
          {content}
        </label>
      )}
    </SwitchContext.Provider>
  )
}

/* ---------- Content ---------- */

interface SwitchContentProps extends HTMLAttributes<HTMLSpanElement> {}

function SwitchContent({ className, children, ...props }: SwitchContentProps) {
  return (
    <span data-slot="switch-content" className={cn("flex items-center gap-3", className)} {...props}>
      {children}
    </span>
  )
}

/* ---------- Control (track) ---------- */

interface SwitchControlProps extends HTMLAttributes<HTMLSpanElement> {}

const controlSizeClass: Record<SwitchSize, string> = {
  sm: "h-4 w-7",
  md: "h-5 w-9",
  lg: "h-6 w-11",
}

function SwitchControl({ className, children, ...props }: SwitchControlProps) {
  const ctx = useSwitch()
  return (
    <span
      data-slot="switch-control"
      aria-hidden="true"
      data-selected={ctx.isSelected ? "true" : undefined}
      data-invalid={ctx.isInvalid ? "true" : undefined}
      className={cn(
        "relative inline-flex shrink-0 items-center rounded-full bg-muted transition-colors",
        controlSizeClass[ctx.size],
        ctx.isSelected && "bg-foreground",
        ctx.isInvalid && "bg-red-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/* ---------- Thumb ---------- */

interface SwitchThumbProps extends HTMLAttributes<HTMLSpanElement> {}

const thumbSizeClass: Record<SwitchSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
}

function SwitchThumb({ className, children, ...props }: SwitchThumbProps) {
  const ctx = useSwitch()
  return (
    <span
      data-slot="switch-thumb"
      className={cn(
        "absolute top-1/2 left-0.5 flex -translate-y-1/2 items-center justify-center rounded-full bg-background shadow transition-transform",
        thumbSizeClass[ctx.size],
        ctx.isSelected && ctx.size === "sm" && "translate-x-3",
        ctx.isSelected && ctx.size === "md" && "translate-x-4",
        ctx.isSelected && ctx.size === "lg" && "translate-x-5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/* ---------- Icon ---------- */

interface SwitchIconProps extends HTMLAttributes<HTMLSpanElement> {}

function SwitchIcon({ className, children, ...props }: SwitchIconProps) {
  return (
    <span data-slot="switch-icon" className={cn("flex items-center justify-center", className)} {...props}>
      {children}
    </span>
  )
}

/* ---------- SwitchGroup ---------- */

interface SwitchGroupProps {
  children?: ReactNode
  className?: string
  orientation?: "vertical" | "horizontal"
}

function SwitchGroup({ children, className, orientation = "vertical" }: SwitchGroupProps) {
  return (
    <div
      data-slot="switch-group"
      className={cn(
        "flex gap-3",
        orientation === "horizontal" ? "flex-row flex-wrap items-center" : "flex-col",
        className
      )}
    >
      {children}
    </div>
  )
}

export { Switch, SwitchContent, SwitchControl, SwitchGroup, SwitchIcon, SwitchThumb, useSwitch }
export type { SwitchContentProps, SwitchGroupProps, SwitchProps, SwitchSize }
