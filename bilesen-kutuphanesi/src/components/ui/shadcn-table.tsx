/**
 * ShadcnTable familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Tablo — Table + Header + Body + Row + Head + Cell + Caption + Footer.
 *   <ShadcnTable>
 *     <ShadcnTableHeader>
 *       <ShadcnTableRow><ShadcnTableHead>Name</ShadcnTableHead></ShadcnTableRow>
 *     </ShadcnTableHeader>
 *     <ShadcnTableBody>
 *       <ShadcnTableRow><ShadcnTableCell>…</ShadcnTableCell></ShadcnTableRow>
 *     </ShadcnTableBody>
 *   </ShadcnTable>
 * @id 920
 * @category Veri Gösterimi
 * @subcategory ShadcnTable
 * @source shadcn
 */
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnTableProps extends HTMLAttributes<HTMLTableElement> {}

function ShadcnTable({ className, ...props }: ShadcnTableProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table data-slot="shadcn-table" className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
}

interface ShadcnTableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

function ShadcnTableHeader({ className, ...props }: ShadcnTableHeaderProps) {
  return <thead data-slot="shadcn-table-header" className={cn("[&_tr]:border-b", className)} {...props} />
}

interface ShadcnTableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

function ShadcnTableBody({ className, ...props }: ShadcnTableBodyProps) {
  return <tbody data-slot="shadcn-table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />
}

interface ShadcnTableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

function ShadcnTableFooter({ className, ...props }: ShadcnTableFooterProps) {
  return <tfoot data-slot="shadcn-table-footer" className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
}

interface ShadcnTableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

function ShadcnTableRow({ className, ...props }: ShadcnTableRowProps) {
  return (
    <tr
      data-slot="shadcn-table-row"
      className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      {...props}
    />
  )
}

interface ShadcnTableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {}

function ShadcnTableHead({ className, ...props }: ShadcnTableHeadProps) {
  return (
    <th
      data-slot="shadcn-table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground whitespace-nowrap",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

function ShadcnTableCell({ className, ...props }: ShadcnTableCellProps) {
  return (
    <td
      data-slot="shadcn-table-cell"
      className={cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
}

interface ShadcnTableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

function ShadcnTableCaption({ className, ...props }: ShadcnTableCaptionProps) {
  return <caption data-slot="shadcn-table-caption" className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
}

export {
  ShadcnTable,
  ShadcnTableBody,
  ShadcnTableCaption,
  ShadcnTableCell,
  ShadcnTableFooter,
  ShadcnTableHead,
  ShadcnTableHeader,
  ShadcnTableRow,
}
export type {
  ShadcnTableBodyProps,
  ShadcnTableCaptionProps,
  ShadcnTableCellProps,
  ShadcnTableFooterProps,
  ShadcnTableHeadProps,
  ShadcnTableHeaderProps,
  ShadcnTableProps,
  ShadcnTableRowProps,
}
