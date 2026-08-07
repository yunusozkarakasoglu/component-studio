/**
 * ShadcnCommandWithGroups
 * Gruplu komut menüsü (saf React, shadcn kaynaklı).
 * @id 911
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
  ShadcnCommandSeparator,
} from "@/components/ui/shadcn-command"

function ShadcnCommandWithGroups() {
  return (
    <ShadcnCommand className="max-w-sm rounded-lg border">
      <ShadcnCommandInput placeholder="Type a command or search..." />
      <ShadcnCommandList>
        <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
        <ShadcnCommandGroup heading="General">
          <ShadcnCommandItem value="Dashboard">Dashboard</ShadcnCommandItem>
          <ShadcnCommandItem value="Projects">Projects</ShadcnCommandItem>
          <ShadcnCommandItem value="Team">Team</ShadcnCommandItem>
        </ShadcnCommandGroup>
        <ShadcnCommandSeparator />
        <ShadcnCommandGroup heading="Account">
          <ShadcnCommandItem value="Profile">Profile</ShadcnCommandItem>
          <ShadcnCommandItem value="Billing">Billing</ShadcnCommandItem>
          <ShadcnCommandItem value="Settings">Settings</ShadcnCommandItem>
        </ShadcnCommandGroup>
      </ShadcnCommandList>
    </ShadcnCommand>
  )
}

export { ShadcnCommandWithGroups }
