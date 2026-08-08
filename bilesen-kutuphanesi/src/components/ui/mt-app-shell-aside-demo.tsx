/**
 * MtAppShellAside
 * Yan paneli (aside) olan kabuk (saf React, Mantine kaynaklı).
 * @id 1844
 * @category Özel Komponentler
 * @subcategory MtAppShell
 * @source mantine
 */
import { MtAppShell, MtAppShellAside, MtAppShellHeader, MtAppShellMain } from "@/components/ui/mt-app-shell"

function MtAppShellAsideDemo() {
  return (
    <MtAppShell className="h-80">
      <MtAppShellHeader>
        <span className="font-semibold text-foreground">Editör</span>
      </MtAppShellHeader>
      <div className="flex min-h-0 flex-1">
        <MtAppShellMain>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Belge</h2>
          <p className="text-sm text-muted-foreground">
            Ana içerik alanı — belgeyi burada düzenleyin. Sağdaki aside bölümü özellikleri gösterir.
          </p>
        </MtAppShellMain>
        <MtAppShellAside>
          <p className="text-xs font-semibold uppercase text-muted-foreground">Özellikler</p>
          <div className="mt-2 space-y-1 text-sm text-foreground">
            <p>Yazı tipi: Inter</p>
            <p>Boyut: 16px</p>
            <p>Renk: #0f172a</p>
          </div>
        </MtAppShellAside>
      </div>
    </MtAppShell>
  )
}

export { MtAppShellAsideDemo }
