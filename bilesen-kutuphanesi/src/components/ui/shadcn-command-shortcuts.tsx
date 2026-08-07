/**
 * ShadcnCommandWithShortcuts
 * Kısayolları olan komut menüsü (saf React, shadcn kaynaklı).
 * @id 910
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
  ShadcnCommandShortcut,
} from "@/components/ui/shadcn-command"

function ShadcnCommandWithShortcuts() {
  return (
    <ShadcnCommand className="max-w-sm rounded-lg border">
      <ShadcnCommandInput placeholder="Type a command or search..." />
      <ShadcnCommandList>
        <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
        <ShadcnCommandGroup heading="Suggestions">
          <ShadcnCommandItem value="Search">
            <span>Search</span><ShadcnCommandShortcut>⌘K</ShadcnCommandShortcut>
          </ShadcnCommandItem>
          <ShadcnCommandItem value="Undo">
            <span>Undo</span><ShadcnCommandShortcut>⌘Z</ShadcnCommandShortcut>
          </ShadcnCommandItem>
          <ShadcnCommandItem value="Redo">
            <span>Redo</span><ShadcnCommandShortcut>⇧⌘Z</ShadcnCommandShortcut>
          </ShadcnCommandItem>
        </ShadcnCommandGroup>
      </ShadcnCommandList>
    </ShadcnCommand>
  )
}

export { ShadcnCommandWithShortcuts }
