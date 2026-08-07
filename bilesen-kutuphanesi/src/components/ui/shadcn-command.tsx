/**
 * ShadcnCommand familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Komut menüsü — arama + eylem listesi.
 * Not: kaynak cmdk kullanır — üçüncü parti olduğundan kendi çekirdeği yazıldı.
 *   <ShadcnCommand>
 *     <ShadcnCommandInput placeholder="Type a command…" />
 *     <ShadcnCommandList>
 *       <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
 *       <ShadcnCommandGroup heading="Suggestions">
 *         <ShadcnCommandItem>Calendar</ShadcnCommandItem>
 *       </ShadcnCommandGroup>
 *     </ShadcnCommandList>
 *   </ShadcnCommand>
 * @id 907
 * @category Combobox
 * @subcategory ShadcnCommand
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Search } from "@/components/ui/icons"

interface CommandContextValue {
  query: string
  setQuery: (q: string) => void
}

const CommandContext = createContext<CommandContextValue | null>(null)

function useShadcnCommand(): CommandContextValue {
  const ctx = useContext(CommandContext)
  if (!ctx) throw new Error("ShadcnCommand parçaları, ShadcnCommand içinde kullanılmalı")
  return ctx
}

interface ShadcnCommandProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCommand({ className, children, ...props }: ShadcnCommandProps) {
  const [query, setQuery] = useState("")
  return (
    <CommandContext.Provider value={{ query, setQuery }}>
      <div
        data-slot="shadcn-command"
        className={cn("flex h-auto w-full flex-col overflow-hidden rounded-xl bg-background text-foreground", className)}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  )
}

interface ShadcnCommandInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ShadcnCommandInput({ className, placeholder, ...props }: ShadcnCommandInputProps) {
  const ctx = useShadcnCommand()
  return (
    <div className="flex items-center gap-2 border-b border-border px-3">
      <Search className="size-4 shrink-0 text-muted-foreground" />
      <input
        value={ctx.query}
        onChange={(e) => ctx.setQuery(e.target.value)}
        placeholder={placeholder}
        data-slot="shadcn-command-input"
        className={cn(
          "flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    </div>
  )
}

interface ShadcnCommandListProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCommandList({ className, ...props }: ShadcnCommandListProps) {
  return <div data-slot="shadcn-command-list" className={cn("max-h-72 overflow-y-auto overflow-x-hidden p-1", className)} {...props} />
}

interface ShadcnCommandEmptyProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCommandEmpty({ className, ...props }: ShadcnCommandEmptyProps) {
  return <div data-slot="shadcn-command-empty" className={cn("py-6 text-center text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnCommandGroupProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string
}

function ShadcnCommandGroup({ className, heading, ...props }: ShadcnCommandGroupProps) {
  return (
    <div data-slot="shadcn-command-group" className={cn("overflow-hidden p-1 text-foreground", className)} {...props}>
      {heading && (
        <div className="px-2.5 py-1.5 text-xs font-medium text-muted-foreground">{heading}</div>
      )}
      {props.children}
    </div>
  )
}

interface ShadcnCommandItemProps extends HTMLAttributes<HTMLButtonElement> {
  value?: string
  isDisabled?: boolean
  onSelect?: () => void
}

function ShadcnCommandItem({ className, value, isDisabled, onSelect, children, ...props }: ShadcnCommandItemProps) {
  const ctx = useShadcnCommand()
  const label = value ?? (typeof children === "string" ? children : "")
  const hidden = ctx.query !== "" && !label.toLowerCase().includes(ctx.query.toLowerCase())
  if (hidden) return null

  return (
    <button
      type="button"
      data-slot="shadcn-command-item"
      disabled={isDisabled}
      onClick={onSelect}
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground/80 transition-colors outline-none select-none",
        "hover:bg-muted focus-visible:bg-muted",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnCommandSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCommandSeparator({ className, ...props }: ShadcnCommandSeparatorProps) {
  return <div role="separator" data-slot="shadcn-command-separator" className={cn("-mx-1 h-px bg-border", className)} {...props} />
}

interface ShadcnCommandShortcutProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnCommandShortcut({ className, ...props }: ShadcnCommandShortcutProps) {
  return <span data-slot="shadcn-command-shortcut" className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}

export {
  ShadcnCommand,
  ShadcnCommandEmpty,
  ShadcnCommandGroup,
  ShadcnCommandInput,
  ShadcnCommandItem,
  ShadcnCommandList,
  ShadcnCommandSeparator,
  ShadcnCommandShortcut,
}
export type {
  ShadcnCommandEmptyProps,
  ShadcnCommandGroupProps,
  ShadcnCommandInputProps,
  ShadcnCommandItemProps,
  ShadcnCommandListProps,
  ShadcnCommandProps,
  ShadcnCommandSeparatorProps,
  ShadcnCommandShortcutProps,
}
