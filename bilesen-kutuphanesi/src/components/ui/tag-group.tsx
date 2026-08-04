/**
 * TagGroup
 * Etiket grubu — TagGroup + Tag (saf React).
 * @id 139
 * @category Veri Gösterimi
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface TagGroupProps {
  className?: string
  children?: ReactNode
  /** Tag kaldırıldığında çağrılır (Tag id'leri seti) */
  onRemove?: (keys: Set<string>) => void
}

function TagGroup({ className, children }: TagGroupProps) {
  return <div data-slot="tag-group" className={cn("flex flex-wrap gap-1.5", className)}>{children}</div>
}

interface TagProps {
  id?: string
  className?: string
  children?: ReactNode
  onRemove?: () => void
}

function Tag({ id, className, children, onRemove }: TagProps) {
  return (
    <span data-slot="tag" className={cn("inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground", className)}>
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label={`${id ?? ""} kaldır`}
          onClick={onRemove}
          className="flex size-3.5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/10 hover:text-foreground"
        >
          <X className="size-2.5" />
        </button>
      )}
    </span>
  )
}

export { Tag, TagGroup }
