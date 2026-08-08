/**
 * MtDataList + MtDataListItem + MtDataListLabel + MtDataListView
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Veri listesi — etiket/değer satırları, dikey/yatay.
 *   <MtDataList>
 *     <MtDataListItem>
 *       <MtDataListLabel>Name</MtDataListLabel>
 *       <MtDataListView>John</MtDataListView>
 *     </MtDataListItem>
 *   </MtDataList>
 * @id 1429
 * @category Veri Gösterimi
 * @subcategory MtDataList
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtDataListProps extends HTMLAttributes<HTMLDListElement> {
  orientation?: "horizontal" | "vertical"
  withBorder?: boolean
}

function MtDataList({ className, orientation = "vertical", withBorder, children, ...props }: MtDataListProps) {
  return (
    <dl
      data-slot="mt-data-list"
      className={cn(
        "divide-y divide-border text-sm",
        orientation === "horizontal" && "flex divide-x divide-y-0",
        withBorder && "rounded-lg border border-border",
        className
      )}
      {...props}
    >
      {children}
    </dl>
  )
}

interface MtDataListItemProps extends HTMLAttributes<HTMLDivElement> {}

function MtDataListItem({ className, children, ...props }: MtDataListItemProps) {
  return (
    <div data-slot="mt-data-list-item" className={cn("flex items-center justify-between gap-4 px-4 py-3", className)} {...props}>
      {children}
    </div>
  )
}

function MtDataListLabel({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <dt data-slot="mt-data-list-label" className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </dt>
  )
}

function MtDataListView({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <dd data-slot="mt-data-list-view" className={cn("ml-0 text-right font-medium text-foreground", className)} {...props}>
      {children}
    </dd>
  )
}

export { MtDataList, MtDataListItem, MtDataListLabel, MtDataListView }
export type { MtDataListItemProps, MtDataListProps }
