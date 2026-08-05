/**
 * TableEmptyState
 * Boş durum örneği — EmptyState bileşeniyle (saf React).
 * @id 527
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { EmptyState } from "@/components/ui/empty-state"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

function TableEmptyState() {
  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Team" className="min-w-[500px]">
          <TableHeader>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="whitespace-normal p-6">
                <EmptyState title="No members found" description="Invite your first team member to get started." />
              </TableCell>
            </TableRow>
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableEmptyState }
