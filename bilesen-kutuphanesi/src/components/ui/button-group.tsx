/**
 * ButtonGroup
 * Saf React bileşen (bağımlılıksız).
 * İlgili butonları tutarlı stil + köşe yuvarlatmayla gruplar.
 *   <ButtonGroup variant="tertiary">
 *     <Button>Fork <Chip>24</Chip></Button>
 *     <Button isIconOnly><ButtonGroupSeparator /><ChevronDown /></Button>
 *   </ButtonGroup>
 * Özellikler: variant/size/isDisabled çocuk Button'lara iletilir · orientation
 * (horizontal/vertical) · fullWidth · ButtonGroupSeparator.
 * @id 504
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Children, cloneElement, isValidElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ButtonGroupProps {
  children?: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "danger" | "danger-soft"
  size?: "sm" | "md" | "lg"
  isDisabled?: boolean
  orientation?: "horizontal" | "vertical"
  fullWidth?: boolean
}

function ButtonGroup({
  children,
  className,
  variant,
  size,
  isDisabled,
  orientation = "horizontal",
  fullWidth = false,
}: ButtonGroupProps) {
  const kids = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Button) {
      const props = child.props as Record<string, unknown>
      return cloneElement(child, {
        variant: props.variant ?? variant,
        size: props.size ?? size,
        isDisabled: props.isDisabled ?? isDisabled,
      } as Record<string, unknown>)
    }
    return child
  })

  return (
    <div
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(
        "inline-flex items-center overflow-hidden rounded-lg border border-border bg-background",
        "divide-x divide-border",
        orientation === "vertical" && "flex-col divide-x-0 divide-y",
        fullWidth && "w-full [&_button]:flex-1",
        "[&_button]:rounded-none [&_button]:border-0",
        variant === "tertiary" && "border-transparent bg-transparent [&_button]:bg-muted/40 [&_button]:hover:bg-muted",
        className
      )}
    >
      {kids}
    </div>
  )
}

/* ---------- Separator ---------- */

interface ButtonGroupSeparatorProps {
  className?: string
}

function ButtonGroupSeparator({ className }: ButtonGroupSeparatorProps) {
  return <span data-slot="button-group-separator" aria-hidden="true" className={cn("mx-1 h-4 w-px self-center bg-border", className)} />
}

export { ButtonGroup, ButtonGroupSeparator }
export type { ButtonGroupProps, ButtonGroupSeparatorProps }
