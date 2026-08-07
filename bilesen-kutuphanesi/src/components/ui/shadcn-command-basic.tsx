/**
 * ShadcnCommandBasic
 * Temel komut menüsü (saf React, shadcn kaynaklı).
 * @id 909
 * @category Combobox
 * @subcategory ShadcnCommand
 * @source shadcn
 */
import {
  ShadcnCommand,
  ShadcnCommandEmpty,
  ShadcnCommandGroup,
  ShadcnCommandInput,
  ShadcnCommandItem,
  ShadcnCommandList,
} from "@/components/ui/shadcn-command"

function ShadcnCommandBasic() {
  return (
    <ShadcnCommand className="max-w-sm rounded-lg border">
      <ShadcnCommandInput placeholder="Search…" />
      <ShadcnCommandList>
        <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
        <ShadcnCommandGroup heading="Actions">
          <ShadcnCommandItem value="New File">New File</ShadcnCommandItem>
          <ShadcnCommandItem value="Open File">Open File</ShadcnCommandItem>
          <ShadcnCommandItem value="Save">Save</ShadcnCommandItem>
          <ShadcnCommandItem value="Export">Export…</ShadcnCommandItem>
        </ShadcnCommandGroup>
      </ShadcnCommandList>
    </ShadcnCommand>
  )
}

export { ShadcnCommandBasic }
