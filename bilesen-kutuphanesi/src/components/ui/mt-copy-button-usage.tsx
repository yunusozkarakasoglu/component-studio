/**
 * MtCopyButtonUsage
 * Temel kopyalama (saf React, Mantine kaynaklı).
 * @id 1093
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCopyButton
 * @source mantine
 */
import { Check, Copy } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtCopyButton } from "@/components/ui/mt-copy-button"

function MtCopyButtonUsage() {
  return (
    <MtCopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <MtButton leftSection={copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />} onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </MtButton>
      )}
    </MtCopyButton>
  )
}

export { MtCopyButtonUsage }
