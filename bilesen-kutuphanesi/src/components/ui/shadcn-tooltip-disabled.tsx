/**
 * ShadcnTooltipDisabled
 * Devre dışı buton üzerinde tooltip (saf React, shadcn kaynaklı).
 * @id 799
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import {
  ShadcnTooltip,
  ShadcnTooltipContent,
} from "@/components/ui/shadcn-tooltip"

function ShadcnTooltipDisabled() {
  return (
    <ShadcnTooltip>
      <button
        type="button"
        className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none opacity-50 hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40"
        onMouseEnter={(e) => (e.currentTarget.parentElement as HTMLElement)?.dispatchEvent(new MouseEvent("mouseenter"))}
      >
        Disabled
      </button>
      <ShadcnTooltipContent>
        <p>Disabled button</p>
      </ShadcnTooltipContent>
    </ShadcnTooltip>
  )
}

export { ShadcnTooltipDisabled }
