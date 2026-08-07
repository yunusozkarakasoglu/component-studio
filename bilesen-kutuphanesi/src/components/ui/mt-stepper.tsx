/**
 * MtStepper
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Adım göstergesi — active, onStepClick, orientation, size, allowNextStepsSelect.
 *   <MtStepper active={1} onStepClick={setActive}>
 *     <MtStepperStep label="Step 1" description="…" />
 *   </MtStepper>
 * @id 1390
 * @category Navigasyon
 * @subcategory MtStepper
 * @source mantine
 */
import { createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

const StepperContext = createContext<{ active: number; onStepClick?: (index: number) => void; orientation: "horizontal" | "vertical"; size: "xs" | "sm" | "md" | "lg" } | null>(null)

interface MtStepperProps {
  active?: number
  onStepClick?: (index: number) => void
  orientation?: "horizontal" | "vertical"
  size?: "xs" | "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

function MtStepper({ active = 0, onStepClick, orientation = "horizontal", size = "md", children, className }: MtStepperProps) {
  return (
    <StepperContext.Provider value={{ active, onStepClick, orientation, size }}>
      <div
        data-slot="mt-stepper"
        className={cn("flex w-full", orientation === "horizontal" ? "flex-row items-start" : "flex-col", className)}
      >
        {children}
      </div>
    </StepperContext.Provider>
  )
}

interface MtStepperStepProps {
  label?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  completedIcon?: ReactNode
  disabled?: boolean
  allowStepSelect?: boolean
  index?: number
  className?: string
  children?: ReactNode
}

function MtStepperStep({ label, description, icon, completedIcon, disabled, index = 0, className }: MtStepperStepProps) {
  const ctx = useContext(StepperContext)!
  const isActive = ctx.active === index
  const isCompleted = ctx.active > index
  const clickable = ctx.onStepClick && !disabled

  const sizeClass = ctx.size === "xs" ? "size-6 text-xs" : ctx.size === "sm" ? "size-7 text-sm" : ctx.size === "lg" ? "size-10 text-base" : "size-8 text-sm"

  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        ctx.orientation === "horizontal" ? "flex-1 last:flex-none" : "mb-4 last:mb-0",
        className
      )}
    >
      <button
        type="button"
        disabled={!clickable}
        onClick={() => ctx.onStepClick?.(index)}
        aria-current={isActive ? "step" : undefined}
        className={cn(
          "flex shrink-0 cursor-pointer items-center justify-center rounded-full border font-medium transition-colors outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-500/30",
          "disabled:cursor-default",
          sizeClass,
          isActive && "border-blue-600 bg-blue-600 text-white",
          isCompleted && "border-blue-600 bg-blue-600 text-white",
          !isActive && !isCompleted && "border-border bg-background text-muted-foreground"
        )}
      >
        {isCompleted ? (completedIcon ?? <Check className="size-4" />) : isActive ? (icon ?? index + 1) : index + 1}
      </button>
      {(label || description) && (
        <div className={cn("min-w-0", ctx.orientation === "horizontal" && "text-center")}>
          <p className={cn("truncate text-sm font-medium", isActive ? "text-foreground" : "text-muted-foreground")}>{label}</p>
          {description && <p className="truncate text-xs text-muted-foreground">{description}</p>}
        </div>
      )}
      {ctx.orientation === "horizontal" && false && (
        <div className="mx-2 h-px flex-1 bg-border" />
      )}
    </div>
  )
}

export { MtStepper, MtStepperStep }
export type { MtStepperProps, MtStepperStepProps }
