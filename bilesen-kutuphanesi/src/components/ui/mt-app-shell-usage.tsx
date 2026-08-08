/**
 * MtAppShellUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1843
 * @category Özel Komponentler
 * @subcategory MtAppShell
 * @source mantine
 */
import { MtAppShell, MtAppShellFooter, MtAppShellHeader, MtAppShellMain, MtAppShellNavbar } from "@/components/ui/mt-app-shell"

function MtAppShellUsage() {
  return (
    <MtAppShell className="h-80">
      <MtAppShellHeader>
        <span className="font-semibold text-foreground">Uygulamam</span>
        <span className="ml-auto text-xs text-muted-foreground">Oturum: demo</span>
      </MtAppShellHeader>
      <div className="flex min-h-0 flex-1">
        <MtAppShellNavbar>
          <p className="text-xs font-semibold uppercase text-muted-foreground">Menü</p>
          <div className="mt-2 space-y-1 text-sm">
            <p className="cursor-pointer rounded-md bg-blue-600 px-2 py-1.5 text-white">Panel</p>
            <p className="cursor-pointer rounded-md px-2 py-1.5 text-foreground hover:bg-muted">Ayarlar</p>
            <p className="cursor-pointer rounded-md px-2 py-1.5 text-foreground hover:bg-muted">Profil</p>
          </div>
        </MtAppShellNavbar>
        <MtAppShellMain>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Hoş geldiniz</h2>
          <p className="text-sm text-muted-foreground">
            Bu, AppShell bileşeninin temel kullanımıdır — header, navbar, main ve footer alanlarını birleştirir.
          </p>
        </MtAppShellMain>
      </div>
      <MtAppShellFooter>© 2025 Component Studio</MtAppShellFooter>
    </MtAppShell>
  )
}

export { MtAppShellUsage }
