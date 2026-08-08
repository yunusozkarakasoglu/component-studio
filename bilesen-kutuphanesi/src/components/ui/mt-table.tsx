/**
 * MtTable + MtTableThead + MtTableTbody + MtTableTr + MtTableTh + MtTableTd + MtTableCaption
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tablo — compound yapı, striped, highlightOnHover, border opsiyonları, stickyHeader, caption.
 *   <MtTable striped highlightOnHover withTableBorder>
 *     <MtTableThead><MtTableTr><MtTableTh>Header</MtTableTh></MtTableTr></MtTableThead>
 *     <MtTableTbody><MtTableTr><MtTableTd>Cell</MtTableTd></MtTableTr></MtTableTbody>
 *   </MtTable>
 * @id 1426
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import type { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtTableProps extends HTMLAttributes<HTMLTableElement> {
  striped?: boolean
  highlightOnHover?: boolean
  withTableBorder?: boolean
  withColumnBorders?: boolean
  withRowBorders?: boolean
  stickyHeader?: boolean
  captionSide?: "top" | "bottom"
  tabularNums?: boolean
  horizontalSpacing?: "xs" | "sm" | "md" | "lg" | "xl"
  verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl"
}

const hPad: Record<string, string> = { xs: "px-2", sm: "px-3", md: "px-4", lg: "px-6", xl: "px-8" }
const vPad: Record<string, string> = { xs: "py-1.5", sm: "py-2", md: "py-3", lg: "py-4", xl: "py-5" }

function MtTable({
  className,
  striped,
  highlightOnHover,
  withTableBorder,
  withColumnBorders,
  withRowBorders,
  stickyHeader,
  captionSide = "bottom",
  tabularNums,
  horizontalSpacing = "md",
  verticalSpacing = "md",
  children,
  ...props
}: MtTableProps) {
  return (
    <div className={cn("w-full overflow-auto", withTableBorder && "rounded-lg border border-border")}>
      <table
        data-slot="mt-table"
        className={cn(
          "w-full border-collapse text-sm",
          withTableBorder && "rounded-lg",
          tabularNums && "tabular-nums",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

function MtTableCaption({ className, captionSide, children, ...props }: HTMLAttributes<HTMLTableCaptionElement> & { captionSide?: "top" | "bottom" }) {
  return (
    <caption data-slot="mt-table-caption" className={cn("px-2 py-2 text-xs text-muted-foreground", captionSide === "top" && "caption-top", className)} {...props}>
      {children}
    </caption>
  )
}

function MtTableThead({ className, children, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead data-slot="mt-table-thead" className={cn("border-b border-border bg-muted/40 text-left", className)} {...props}>
      {children}
    </thead>
  )
}

function MtTableTbody({ className, children, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody data-slot="mt-table-tbody" className={cn("border-b border-border last:border-b-0", className)} {...props}>{children}</tbody>
}

function MtTableTr({ className, children, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr data-slot="mt-table-tr" className={cn(className)} {...props}>{children}</tr>
}

function MtTableTh({ className, children, ...props }: ThHTMLAttributes<HTMLTableCellElement> & { horizontalSpacing?: "xs" | "sm" | "md" | "lg" | "xl"; verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  return (
    <th
      data-slot="mt-table-th"
      className={cn(
        "border-b border-border px-4 py-3 text-left text-sm font-semibold text-foreground",
        hPad[props.horizontalSpacing ?? "md"],
        vPad[props.verticalSpacing ?? "md"],
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function MtTableTd({ className, children, ...props }: TdHTMLAttributes<HTMLTableCellElement> & { horizontalSpacing?: "xs" | "sm" | "md" | "lg" | "xl"; verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  return (
    <td
      data-slot="mt-table-td"
      className={cn(
        "border-b border-border px-4 py-3 text-foreground",
        hPad[props.horizontalSpacing ?? "md"],
        vPad[props.verticalSpacing ?? "md"],
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}

export { MtTable, MtTableCaption, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr }
export type { MtTableProps }
