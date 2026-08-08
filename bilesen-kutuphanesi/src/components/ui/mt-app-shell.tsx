/**
 * MtAppShell + MtAppShellHeader + MtAppShellNavbar + MtAppShellAside + MtAppShellMain + MtAppShellFooter
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Uygulama kabuğu — header, navbar, aside, main, footer bileşik yapısı.
 *   <MtAppShell>
 *     <MtAppShellHeader>…</MtAppShellHeader>
 *     <MtAppShellNavbar>…</MtAppShellNavbar>
 *     <MtAppShellMain>…</MtAppShellMain>
 *   </MtAppShell>
 * @id 1765
 * @category Özel Komponentler
 * @subcategory MtAppShell
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtAppShellProps extends HTMLAttributes<HTMLDivElement> {
  headerHeight?: number
  navbarWidth?: number
  asideWidth?: number
  footerHeight?: number
}

function MtAppShell({ className, headerHeight = 60, navbarWidth = 260, asideWidth = 0, footerHeight = 0, children, ...props }: MtAppShellProps) {
  return (
    <div
      data-slot="mt-app-shell"
      className={cn("relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-border bg-background", className)}
      {...props}
    >
      <div className="flex min-h-0 flex-1">
        <div className="flex min-h-0 flex-1 flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

function MtAppShellHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header data-slot="mt-app-shell-header" className={cn("flex h-14 shrink-0 items-center gap-2 border-b border-border px-4", className)} {...props}>
      {children}
    </header>
  )
}

function MtAppShellNavbar({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav data-slot="mt-app-shell-navbar" className={cn("w-60 shrink-0 border-r border-border bg-muted/30 p-3", className)} {...props}>
      {children}
    </nav>
  )
}

function MtAppShellAside({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <aside data-slot="mt-app-shell-aside" className={cn("w-56 shrink-0 border-l border-border bg-muted/30 p-3", className)} {...props}>
      {children}
    </aside>
  )
}

function MtAppShellMain({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <main data-slot="mt-app-shell-main" className={cn("min-h-0 flex-1 overflow-auto p-4", className)} {...props}>
      {children}
    </main>
  )
}

function MtAppShellFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer data-slot="mt-app-shell-footer" className={cn("flex h-10 shrink-0 items-center border-t border-border px-4 text-xs text-muted-foreground", className)} {...props}>
      {children}
    </footer>
  )
}

export { MtAppShell, MtAppShellAside, MtAppShellFooter, MtAppShellHeader, MtAppShellMain, MtAppShellNavbar }
export type { MtAppShellProps }
