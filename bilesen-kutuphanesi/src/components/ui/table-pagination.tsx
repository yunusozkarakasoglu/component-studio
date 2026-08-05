/**
 * TablePagination
 * Sayfalı tablo örneği (saf React).
 * @id 525
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableFooter, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const ALL_ROWS = Array.from({ length: 25 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editor" : "Viewer",
  email: `user${i + 1}@acme.com`,
}))

const PAGE_SIZE = 5

function TablePagination() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(ALL_ROWS.length / PAGE_SIZE)
  const rows = ALL_ROWS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Users" className="min-w-[500px]">
          <TableHeader>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
      <TableFooter>
        <Pagination className="w-full justify-between">
          <p className="text-sm text-muted-foreground">
            Page {page} of {totalPages} · {ALL_ROWS.length} users
          </p>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                <PaginationPreviousIcon />
              </PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                <PaginationNextIcon />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </TableFooter>
    </Table>
  )
}

export { TablePagination }
