/**
 * ShadcnCommandDemo
 * Temel örnek — komut paleti (saf React, shadcn kaynaklı).
 * @id 908
 * @category Combobox
 * @subcategory ShadcnCommand
 * @source shadcn
 */
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "@/components/ui/icons"
import {
  ShadcnCommand,
  ShadcnCommandEmpty,
  ShadcnCommandGroup,
  ShadcnCommandInput,
  ShadcnCommandItem,
  ShadcnCommandList,
  ShadcnCommandSeparator,
  ShadcnCommandShortcut,
} from "@/components/ui/shadcn-command"

function ShadcnCommandDemo() {
  return (
    <ShadcnCommand className="max-w-sm rounded-lg border">
      <ShadcnCommandInput placeholder="Type a command or search..." />
      <ShadcnCommandList>
        <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
        <ShadcnCommandGroup heading="Suggestions">
          <ShadcnCommandItem value="Calendar"><Calendar className="size-4" /><span>Calendar</span></ShadcnCommandItem>
          <ShadcnCommandItem value="Search Emoji"><Smile className="size-4" /><span>Search Emoji</span></ShadcnCommandItem>
          <ShadcnCommandItem value="Calculator" isDisabled><Calculator className="size-4" /><span>Calculator</span></ShadcnCommandItem>
        </ShadcnCommandGroup>
        <ShadcnCommandSeparator />
        <ShadcnCommandGroup heading="Settings">
          <ShadcnCommandItem value="Profile"><User className="size-4" /><span>Profile</span><ShadcnCommandShortcut>⌘P</ShadcnCommandShortcut></ShadcnCommandItem>
          <ShadcnCommandItem value="Billing"><CreditCard className="size-4" /><span>Billing</span><ShadcnCommandShortcut>⌘B</ShadcnCommandShortcut></ShadcnCommandItem>
          <ShadcnCommandItem value="Settings"><Settings className="size-4" /><span>Settings</span><ShadcnCommandShortcut>⌘S</ShadcnCommandShortcut></ShadcnCommandItem>
        </ShadcnCommandGroup>
      </ShadcnCommandList>
    </ShadcnCommand>
  )
}

export { ShadcnCommandDemo }
