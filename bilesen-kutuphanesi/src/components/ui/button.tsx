/**
 * Button
 * Saf React bileşen (bağımlılıksız).
 * Variant · size · fullWidth · isDisabled · isPending · isIconOnly · onPress · render.
 * children bir fonksiyon olarak verilirse render prop deseni (state ile) çalışır.
 *   <Button onPress={() => ...}>Click me</Button>
 *   <Button isPending>{({ isPending }) => isPending ? <Spinner /> : "Yükle"}</Button>
 * @id 092
 * @category Butonlar & Aksiyonlar
 */
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ButtonState {
  isPressed: boolean
  isHovered: boolean
  isFocused: boolean
  isFocusVisible: boolean
  isPending: boolean
  isDisabled: boolean
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick"> {
  /** Görsel varyant (bileşen kütüphanesi uyumlu) */
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "danger" | "danger-soft"
  /** Boyut */
  size?: "sm" | "md" | "lg"
  /** Tam genişlik */
  fullWidth?: boolean
  /** Devre dışı */
  isDisabled?: boolean
  /** Yükleme durumu (pointer events kapatılır) */
  isPending?: boolean
  /** Yalnızca ikon içerir (kare boyut) */
  isIconOnly?: boolean
  /** Basıldığında çağrılır (bileşen kütüphanesi onPress karşılığı) */
  onPress?: () => void
  /** Varsayılan DOM elementini özel render ile değiştirir */
  render?: (props: Record<string, unknown>, state: ButtonState) => ReactNode
  /** İçerik veya render prop: {(state) => ReactNode} */
  children?: ReactNode | ((state: ButtonState) => ReactNode)
}

const buttonVariant: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-muted text-foreground hover:bg-muted/80",
  tertiary: "bg-transparent text-foreground hover:bg-muted",
  outline: "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  danger: "bg-red-600 text-white hover:bg-red-700",
  "danger-soft": "bg-red-50 text-red-700 hover:bg-red-100",
}

const buttonSize: Record<string, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

const buttonIconSize: Record<string, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
}

function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  isDisabled,
  isPending,
  isIconOnly,
  onPress,
  render,
  children,
  className,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}: ButtonProps) {
  const [isPressed, setPressed] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const [isFocused, setFocused] = useState(false)
  const [isFocusVisible, setFocusVisible] = useState(false)

  const state: ButtonState = {
    isPressed,
    isHovered,
    isFocused,
    isFocusVisible,
    isPending: !!isPending,
    isDisabled: !!(isDisabled || isPending),
  }

  const content = typeof children === "function" ? (children as (s: ButtonState) => ReactNode)(state) : children

  const baseClass = cn(
    "inline-flex select-none items-center justify-center gap-2 rounded-lg font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
    isIconOnly ? buttonIconSize[size] : buttonSize[size],
    buttonVariant[variant],
    fullWidth && "w-full",
    isPending && "cursor-wait",
    isPressed && !isDisabled && !isPending && "scale-95",
    className
  )

  const domProps: Record<string, unknown> = {
    className: baseClass,
    type: "button",
    disabled: state.isDisabled,
    "data-variant": variant,
    "data-pending": isPending || undefined,
    "data-pressed": isPressed || undefined,
    "data-hovered": isHovered || undefined,
    "data-focus-visible": isFocusVisible || undefined,
    onPointerDown: (e: unknown) => {
      setPressed(true)
      onPointerDown?.(e as React.PointerEvent<HTMLButtonElement>)
    },
    onPointerUp: (e: unknown) => {
      setPressed(false)
      onPointerUp?.(e as React.PointerEvent<HTMLButtonElement>)
    },
    onPointerLeave: (e: unknown) => {
      setPressed(false)
      onPointerLeave?.(e as React.PointerEvent<HTMLButtonElement>)
    },
    onMouseEnter: (e: unknown) => {
      setHovered(true)
      onMouseEnter?.(e as React.MouseEvent<HTMLButtonElement>)
    },
    onMouseLeave: (e: unknown) => {
      setHovered(false)
      onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>)
    },
    onFocus: (e: unknown) => {
      setFocused(true)
      onFocus?.(e as React.FocusEvent<HTMLButtonElement>)
    },
    onBlur: (e: unknown) => {
      setFocused(false)
      setFocusVisible(false)
      onBlur?.(e as React.FocusEvent<HTMLButtonElement>)
    },
    onKeyDown: (e: unknown) => {
      if ((e as React.KeyboardEvent).key === "Tab") setFocusVisible(true)
      onKeyDown?.(e as React.KeyboardEvent<HTMLButtonElement>)
    },
    onClick: () => {
      if (!state.isDisabled) onPress?.()
    },
  }

  if (render) {
    return <>{render(domProps, state)}</>
  }

  return <button {...domProps} {...props}>{content}</button>
}

export { Button }
export type { ButtonProps, ButtonState }
