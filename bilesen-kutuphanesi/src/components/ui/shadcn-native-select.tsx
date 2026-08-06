/**
 * ShadcnNativeSelect + Option + OptGroup
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Tarayıcı yerel select'i, tasarım sistemine uygun stilli.
 *   <ShadcnNativeSelect>
 *     <ShadcnNativeSelectOption value="todo">Todo</ShadcnNativeSelectOption>
 *     <ShadcnNativeSelectOptGroup label="Engineering">…</ShadcnNativeSelectOptGroup>
 *   </ShadcnNativeSelect>
 * @id 686
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import type { OptgroupHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const CHEVRON_SVG =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"

interface ShadcnNativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

function ShadcnNativeSelect({ className, style, ...props }: ShadcnNativeSelectProps) {
  return (
    <select
      data-slot="shadcn-native-select"
      className={cn(
        "flex h-9 w-full cursor-pointer appearance-none rounded-md border border-border bg-background px-3 pr-8 text-sm text-foreground shadow-xs transition-colors outline-none",
        "bg-no-repeat bg-[position:right_0.75rem_center] bg-[size:1rem]",
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "aria-invalid:border-red-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{ backgroundImage: CHEVRON_SVG, ...style }}
      {...props}
    />
  )
}

interface ShadcnNativeSelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

function ShadcnNativeSelectOption({ className, ...props }: ShadcnNativeSelectOptionProps) {
  return <option className={className} {...props} />
}

interface ShadcnNativeSelectOptGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {}

function ShadcnNativeSelectOptGroup({ className, ...props }: ShadcnNativeSelectOptGroupProps) {
  return <optgroup className={className} {...props} />
}

export { ShadcnNativeSelect, ShadcnNativeSelectOptGroup, ShadcnNativeSelectOption }
export type {
  ShadcnNativeSelectOptionProps,
  ShadcnNativeSelectOptGroupProps,
  ShadcnNativeSelectProps,
}
