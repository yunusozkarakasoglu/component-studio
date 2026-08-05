/**
 * Table
 * Saf React bileşen (bağımlılıksız).
 * Veri tablosu — ScrollContainer/Content/Header/Column/Body/Row/Cell/Footer.
 *   <Table>
 *     <TableScrollContainer>
 *       <TableContent aria-label="Team">
 *         <TableHeader>
 *           <TableColumn isRowHeader>Name</TableColumn>
 *           <TableColumn>Role</TableColumn>
 *         </TableHeader>
 *         <TableBody>
 *           <TableRow><TableCell>Kate</TableCell><TableCell>CEO</TableCell></TableRow>
 *         </TableBody>
 *       </TableContent>
 *     </TableScrollContainer>
 *   </Table>
 * Özellikler: variant (primary/secondary) · Column isRowHeader (scope=row) ·
 * zebra hover satırlar · min-w içerik (yatay kaydırma).
 * @id 519
 * @category Veri Gösterimi
 * @subcategory Table
 */
import type { ReactNode, ThHTMLAttributes, TdHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

/* ---------- Table ---------- */

interface TableProps {
  children?: ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

function Table({ children, className, variant = "primary" }: TableProps) {
  return (
    <div data-slot="table" data-variant={variant} className={cn("w-full", className)}>
      {children}
    </div>
  )
}

/* ---------- ScrollContainer ---------- */

interface TableScrollContainerProps {
  children?: ReactNode
  className?: string
}

function TableScrollContainer({ children, className }: TableScrollContainerProps) {
  return (
    <div data-slot="table-scroll-container" className={cn("overflow-x-auto", className)}>
      {children}
    </div>
  )
}

/* ---------- Content ---------- */

interface TableContentProps {
  children?: ReactNode
  className?: string
  "aria-label"?: string
}

function TableContent({ children, className, ...aria }: TableContentProps) {
  return (
    <table
      data-slot="table-content"
      className={cn("w-full border-collapse text-left text-sm text-foreground", className)}
      {...aria}
    >
      {children}
    </table>
  )
}

/* ---------- Header ---------- */

interface TableHeaderProps {
  children?: ReactNode
  className?: string
}

function TableHeader({ children, className }: TableHeaderProps) {
  return <thead data-slot="table-header" className={cn("border-b border-border", className)}>{children}</thead>
}

/* ---------- Column ---------- */

interface TableColumnProps extends ThHTMLAttributes<HTMLTableCellElement> {
  isRowHeader?: boolean
}

function TableColumn({ children, className, isRowHeader = false, ...props }: TableColumnProps) {
  return (
    <th
      data-slot="table-column"
      scope={isRowHeader ? "row" : "col"}
      className={cn(
        "px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase whitespace-nowrap",
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

/* ---------- Body ---------- */

interface TableBodyProps {
  children?: ReactNode
  className?: string
}

function TableBody({ children, className }: TableBodyProps) {
  return <tbody data-slot="table-body" className={cn("divide-y divide-border", className)}>{children}</tbody>
}

/* ---------- Row ---------- */

interface TableRowProps {
  children?: ReactNode
  className?: string
}

function TableRow({ children, className }: TableRowProps) {
  return (
    <tr data-slot="table-row" className={cn("transition-colors hover:bg-muted/50", className)}>
      {children}
    </tr>
  )
}

/* ---------- Cell ---------- */

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td data-slot="table-cell" className={cn("px-4 py-2.5 text-sm whitespace-nowrap", className)} {...props}>
      {children}
    </td>
  )
}

/* ---------- Footer ---------- */

interface TableFooterProps {
  children?: ReactNode
  className?: string
}

function TableFooter({ children, className }: TableFooterProps) {
  return <div data-slot="table-footer" className={cn("mt-2 text-sm text-muted-foreground", className)}>{children}</div>
}

export { Table, TableBody, TableCell, TableColumn, TableContent, TableFooter, TableHeader, TableRow, TableScrollContainer }
export type { TableCellProps, TableColumnProps, TableContentProps, TableProps, TableRowProps }
