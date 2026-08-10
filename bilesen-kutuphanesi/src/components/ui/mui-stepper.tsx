/**
 * MuiStepper
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Adım göstergesi — süreçteki ilerlemeyi gösterir.
 *   <MuiStepper steps={[{label, content?}]} activeStep={1} />
 * steps: {label, content?}[] · activeStep · orientation: horizontal/vertical
 * alternativeLabel: adımlar eşit genişlik
 * @id 1997
 * @category Navigasyon
 * @subcategory MuiStepper
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

interface MuiStepperStep {
  label: ReactNode
  content?: ReactNode
}

interface MuiStepperProps {
  steps?: MuiStepperStep[]
  activeStep?: number
  orientation?: "horizontal" | "vertical"
  alternativeLabel?: boolean
  className?: string
}

function MuiStepper({
  steps = [{ label: "Adım 1" }, { label: "Adım 2" }, { label: "Adım 3" }],
  activeStep = 0,
  orientation = "horizontal",
  alternativeLabel = false,
  className,
}: MuiStepperProps) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col" : cn("items-start", alternativeLabel ? "w-full" : "gap-3"),
        className
      )}
    >
      {steps.map((s, i) => {
        const done = i < activeStep
        const current = i === activeStep
        return (
          <div
            key={i}
            className={cn(
              "flex",
              orientation === "vertical" ? "flex-row items-start gap-3" : "flex-col items-center",
              alternativeLabel && "flex-1"
            )}
          >
            {/* İndikatör + bağlantı çizgisi */}
            <div className={cn("flex items-center", orientation === "horizontal" && alternativeLabel ? "w-full" : "")}>
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold",
                  done && "border-blue-600 bg-blue-600 text-white",
                  current && "border-blue-600 text-blue-700",
                  !done && !current && "border-gray-300 text-gray-400"
                )}
              >
                {done ? <Check className="size-3.5" /> : i + 1}
              </span>
              {/* Çizgi */}
              {i < steps.length - 1 && (
                <span
                  className={cn(
                    "bg-gray-300",
                    orientation === "horizontal" ? "h-0.5 flex-1 min-w-6" : "ml-3.5 h-6 w-0.5 flex-1"
                  )}
                />
              )}
            </div>
            <div className={cn("px-2 text-center", orientation === "vertical" && "text-left")}>
              <p className={cn("text-sm font-medium", current ? "text-blue-700" : done ? "text-gray-700" : "text-gray-400")}>
                {s.label}
              </p>
              {current && s.content && <p className="mt-0.5 text-xs text-gray-500">{s.content}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { MuiStepper }
export type { MuiStepperProps, MuiStepperStep }
