/**
 * ShadcnTableActions
 * Eylem menülü tablo (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 923
 * @category Veri Gösterimi
 * @subcategory ShadcnTable
 * @source shadcn
 */
import { Copy, MoreHorizontal, Pencil, Trash } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"
import {
  ShadcnTable,
  ShadcnTableBody,
  ShadcnTableCell,
  ShadcnTableHead,
  ShadcnTableHeader,
  ShadcnTableRow,
} from "@/components/ui/shadcn-table"

const payments = [
  { id: "728ed52f", status: "Pending", email: "m@example.com" },
  { id: "489e1d42", status: "Success", email: "john@example.com" },
  { id: "2a7f6c13", status: "Failed", email: "jane@example.com" },
]

function ShadcnTableActions() {
  return (
    <ShadcnTable>
      <ShadcnTableHeader>
        <ShadcnTableRow>
          <ShadcnTableHead>ID</ShadcnTableHead>
          <ShadcnTableHead>Status</ShadcnTableHead>
          <ShadcnTableHead>Email</ShadcnTableHead>
          <ShadcnTableHead className="w-10" />
        </ShadcnTableRow>
      </ShadcnTableHeader>
      <ShadcnTableBody>
        {payments.map((p) => (
          <ShadcnTableRow key={p.id}>
            <ShadcnTableCell className="font-mono text-xs">{p.id}</ShadcnTableCell>
            <ShadcnTableCell>{p.status}</ShadcnTableCell>
            <ShadcnTableCell>{p.email}</ShadcnTableCell>
            <ShadcnTableCell>
              <Menu>
                <button type="button" aria-label="Actions" className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <MoreHorizontal className="size-4" />
                </button>
                <MenuPopover>
                  <MenuList>
                    <MenuItem id="copy" textValue="Copy payment ID">
                      <Copy className="size-4" /> Copy payment ID
                    </MenuItem>
                    <MenuItem id="edit" textValue="Edit">
                      <Pencil className="size-4" /> Edit
                    </MenuItem>
                    <MenuItem id="delete" textValue="Delete" variant="danger">
                      <Trash className="size-4" /> Delete
                    </MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </ShadcnTableCell>
          </ShadcnTableRow>
        ))}
      </ShadcnTableBody>
    </ShadcnTable>
  )
}

export { ShadcnTableActions }
