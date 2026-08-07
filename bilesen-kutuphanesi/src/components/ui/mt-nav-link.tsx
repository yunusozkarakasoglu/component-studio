/**
 * MtNavLink
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Navigasyon bağlantısı — label, leftSection, active, children (alt linkler).
 *   <MtNavLink label="Dashboard" leftSection={<Icon/>} active />
 * @id 1389
 * @category Navigasyon
 * @subcategory MtNavLink
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "@/components/ui/icons"

interface MtNavLinkProps {
  label?: ReactNode
  description?: ReactNode
  leftSection?: ReactNode
  rightSection?: ReactNode
  active?: boolean
  onClick?: () => void
  children?: ReactNode
  disabled?: boolean
  className?: string
}

function MtNavLink({ label, description, leftSection, rightSection, active, onClick, children, disabled, className }: MtNavLinkProps) {
  const [opened, setOpened] = useState(false)
  const hasChildren = !!children
  const expandable = hasChildren

  return (
    <div className={cn("flex flex-col", className)}>
      <button
        type="button"
        data-slot="mt-nav-link"
        data-active={active ? "true" : undefined}
        disabled={disabled}
        onClick={() => {
          if (expandable) setOpened((v) => !v)
          onClick?.()
        }}
        className={cn(
          "flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground/80 transition-colors outline-none",
          "hover:bg-muted focus-visible:ring-2 focus-visible:ring-blue-500/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[active=true]:bg-blue-600 data-[active=true]:text-white",
          className
        )}
      >
        {leftSection && <span className="flex shrink-0 items-center text-muted-foreground [data-active=true]:text-white">{leftSection}</span>}
        <span className="min-w-0 flex-1 text-left">
          <span className="block truncate">{label}</span>
          {description && <span className="block truncate text-xs opacity-60">{description}</span>}
        </span>
        {expandable && (
          <ChevronRight className={cn("size-4 shrink-0 text-muted-foreground transition-transform [data-active=true]:text-white", opened && "rotate-90")} />
        )}
        {!expandable && rightSection}
      </button>
      {expandable && opened && <div className="mt-0.5 flex flex-col gap-0.5 pl-5">{children}</div>}
    </div>
  )
}

export { MtNavLink }
export type { MtNavLinkProps }
