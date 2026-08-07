/**
 * MtCopyButtonTimeout
 * Zaman aşımlı kopyalama (saf React, Mantine kaynaklı).
 * @id 1094
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCopyButton
 * @source mantine
 */
import { Check, Copy } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtCopyButton } from "@/components/ui/mt-copy-button"

function MtCopyButtonTimeout() {
  return (
    <MtCopyButton value="copied text" timeout={2000}>
      {({ copied, copy }) => (
        <MtButton
          variant="light"
          leftSection={copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          onClick={copy}
        >
          {copied ? "Copied (2s)" : "Copy with timeout"}
        </MtButton>
      )}
    </MtCopyButton>
  )
}

export { MtCopyButtonTimeout }
